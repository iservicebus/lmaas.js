// app/actions.ts

//"use server";

import { z } from "zod";
import ChatMessage from "./ChatMessage";

interface IchatText {
  role: string;
  content: string;
}

interface IchatList {
  messages: IchatText[]
}
interface IchatCompletionReq {
  text_list: IchatList
}

export interface IchatMessage {
  id?: string;
  user?: string;
  system?: string;
  assistant?: string;
}

export const ChatSchema = z.object({
  instruction: z.string(),
  content: z.string(),
});

export type ChatFields = z.infer<typeof ChatSchema>;

export const convert_api_inputs = (fields: ChatFields)=> {

  const userText: IchatText={
    role: "user",
    content: fields.content,
  }

  const sysText: IchatText={
    role: "system",
    content: fields.instruction,
  }
  const chatList: IchatList = {
    messages: [userText, sysText]
  }
  
  const chatReq: IchatCompletionReq ={
      text_list: chatList
  }

    return chatReq
}

export const convert_ui_message = (fields: ChatFields, res: any)=> {

  var msg: IchatMessage ={
    user: fields.content,
    system: fields.instruction,
    id: res.id,
    assistant: res.res_text.assistant,
  }
  if (res.res_text.role =="assistant")
    msg.assistant = res.res_text.content

  return msg;
}


export async function makePostCall(fields: ChatFields) {
  try {
    const chatReq = convert_api_inputs(fields);
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chatReq), // Stringify the postData object
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
    const res_json = await response.json();
    const response_data = convert_ui_message(fields, res_json);
    console.log("Response data:", response_data);
    return response_data;
  } catch (error) {
    console.error("Error:", error);
  }
}




/*
export async function handleChatSubmit(data: ChatFields) {
  console.log({ question: data.question, answer: data.answer});
} 

export async function handleAPI(data: ChatFields) {
  console.log("call API");

  try {
    const response = DefaultService.chatCompletionChatCompletionPost({
        requestBody: chatReq
    });

    console.log("Chat completion response:", response);
} catch (error) {
        console.error("Unexpected error:", error);
}


} 
*/