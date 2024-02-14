'use client'
import { Header } from '../components/Header'


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const chatSchema = z.object({
  id: z.string(),  
  question: z.string(),
  answer: z.string(),
});

import React, { useState } from 'react';
import ChatMessage from './ChatMessage';


export type ChatFields = z.infer<typeof chatSchema>;

function generateRandomKey(): string {
    return Math.random().toString(36).substring(2, 15); // Generate random alphanumeric string
  }
  
  const ChatBoard: React.FC = () => {
    const [messages, setMessages] = useState<[ChatFields]>([]);
  
    const appendMessage = async (message: ChatFields) => {
        message.id = generateRandomKey();
       setMessages([...messages, message]);
       console.log(messages);

    };

  const onChatSubmit = async (data: ChatFields) => {
    await appendMessage(data);
  }
  
  const form = useForm<ChatFields>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
        id: "0",
      question: "",
      answer: "",
    },
  });
    return (
        <div>
            <div className="chat-board">
                {messages.map((message) => (
                <ChatMessage key={message.id} {...message} />
                ))}
            </div>
            <form onSubmit={form.handleSubmit((data) => onChatSubmit(data))}   className="flex flex-col  h-screen">
                <div className="w-full flex-grow">
                <label>question</label>
                <input {...form.register("question")}/>
                </div>
                <div className="w-full flex-grow">
                <label>answer</label>
                <input {...form.register("answer")}/>
                </div>
                <div className="w-full flex-grow">Row 2 content</div>

                {/* Submit Button */}
                <button
                type="submit"
                className="mt-20 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
                > Submit </button>
            </form>
            </div>
    );
};
export default ChatBoard;