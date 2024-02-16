// api > hello > route.ts

'use server'
import {NextRequest, NextResponse} from "next/server";



import { DefaultService } from "../../client/index";
import { ChatCompletionReq, ChatText, ChatTextList } from "../../client/index";

/*
const userText: ChatText={
    role: "user",
    content: "Hello, how can I help you?",
}

const sysText: ChatText={
    role: "system",
    content: "Hello, how can I help you?",
}

const chatList: ChatTextList = {
    messages: [userText, sysText]
}

const chatReq: ChatCompletionReq ={
    text_list: chatList
}

*/



async function handleAPI(chatReq: ChatCompletionReq) {
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


export  async function GET (request: NextRequest){
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    return NextResponse.json({
        message: json
      }, {
        status: 200,
      })
}


export  async function POST(req: NextRequest) {
    try {
      const data: ChatCompletionReq = await req.json();
      console.log("calling API")

      handleAPI(data)
      console.log(data)

        // Perform your POST logic
      // (e.g., interact with a database, call another API)

      return NextResponse.json({
        message: data
      }, {
        status: 200,
      })
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: 'Failed to process data' 
      }, {
        status: 500,
      })

    }
  }
