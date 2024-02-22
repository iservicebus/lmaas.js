// api > hello > route.ts

'use server'
import {NextRequest, NextResponse} from "next/server";



import { DefaultService } from "../../client/index";
import { ChatCompletionReq, ChatText, ChatTextList } from "../../client/index";



 const lmaas_host = process.env.LMAAS_HOST;

async function handleAPI(chatReq: ChatCompletionReq) {
    console.log("call handleAPI");

    try {
        const response = await DefaultService.chatCompletionChatCompletionPost(lmaas_host, {
            requestBody: chatReq
        });
        return response;
    } catch (error) {
            console.error("Unexpected error:", error);
    }
}


export  async function GET (request: NextRequest){
    const greeting = "This is for Post API only!"
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
      console.log("calling API Post")

      const response = await handleAPI(data)
      console.log("calling API Post", response)
        // Perform your POST logic
      // (e.g., interact with a database, call another API)

      return NextResponse.json(response, {
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
