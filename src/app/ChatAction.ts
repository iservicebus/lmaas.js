// app/actions.ts

//"use server";

import { ChatFields } from './ChatBoard';

interface ChatText {
  role: string;
  content: string;
}

interface ChatList {
  messages: ChatText[]
}
interface ChatCompletionReq {
  text_list: ChatList
}

const userText: ChatText={
    role: "user",
    content: "Hello, how can I help you?",
}

const sysText: ChatText={
    role: "system",
    content: "Hello, how can I help you?",
}

const chatList: ChatList = {
  messages: [userText, sysText]
}

const chatReq: ChatCompletionReq ={
    text_list: chatList
}

export async function makePostCall() {
  try {
    console.log("API Call on client side");
    const response = await fetch("/apis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chatReq), // Stringify the postData object
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const responseData = await response.json();
    console.log("Response:", responseData);
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