import { DefaultService } from "./client/index";
import { ChatCompletionReq, ChatText, ChatTextList } from "./client/index";


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


try {
    const response = DefaultService.chatCompletionChatCompletionPost({
        requestBody: chatReq
    });

    console.log("Chat completion response:", response);
} catch (error) {
        console.error("Unexpected error:", error);
}

