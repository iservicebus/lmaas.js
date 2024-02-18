'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IchatMessage, ChatSchema, ChatFields, makePostCall } from "./ChatAction";


import React, { useState } from 'react';
import ChatMessage from './ChatMessage';


function generateRandomKey(): string {
  return Math.random().toString(36).substring(2, 15); // Generate random alphanumeric string
}

export const ChatBoard = () => {
  const [messages, setMessages] = useState<[IchatMessage]>([]);

  const appendMessage = (message: IchatMessage) => {
    message.id = generateRandomKey();
    setMessages([...messages, message]);
    console.log("append" ,  message);

  };

  const onChatSubmit = async (fields: ChatFields) => {
    const res = await makePostCall(fields);
    appendMessage(res);
  }

  const form = useForm<ChatFields>({
    resolver: zodResolver(ChatSchema),
    defaultValues: {
      instruction: "",
      content: "",
    },
  });

  return (
    <div>

      <div className=" mr-1 h-full overflow-y-auto">
        <div className="mx-auto flex h-full max-w-3xl flex-col gap-6 px-5 pt-6 sm:gap-8 xl:max-w-4xl">
          <div className="flex h-max flex-col gap-6 pb-52">
            <div className="chat-board">
                {messages.map((message) => (
                <ChatMessage key={message.id} {...message} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0  border-t border-gray-300 ">

        <form onSubmit={form.handleSubmit((data) => onChatSubmit(data))} className="w-full">

          <div className="mb-4 flex items-center p-1">
            <label htmlFor="name" className="w-40 text-sm font-bold mx-1">
              Instruction
            </label>
            <input type="text"
              className="w-full shadow mr-4 my-1 appearance-none bg-gray-800 rounded-2xl py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              {...form.register("instruction")}
            />
          </div>
          <div className="flex h-full  bg-gray-800 rounded-2xl">
            <div className="relative min-w-0 flex-1">
              <pre className="invisible overflow-x-hidden overflow-y-scroll whitespace-pre-wrap break-words p-3" aria-hidden="true" style={{ minHeight: "2.5em", maxHeight: "10em" }}>
              </pre>
              <textarea {...form.register("content")}

                className="absolute bg-gray-800 rounded-2xl top-0 mx-auto h-full w-full resize-none scroll-p-3 overflow-x-hidden overflow-y-scroll  p-3 outline-none focus:ring-0 focus-visible:ring-0"
                placeholder="Ask anything"
                style={{ minHeight: "2.5rem", maxHeight: "10em" }} // Added inline styles for the textarea
              ></textarea>
            </div>
            <button className="btn mx-1 my-1 h-[2.4rem] self-end rounded-lg bg-transparent p-1 px-[0.7rem] text-gray-400 disabled:opacity-60 enabled:hover:text-gray-700 dark:disabled:opacity-40 enabled:dark:hover:text-gray-100" type="submit" disabled="">
              <svg viewBox="0 0 32 32" width="1.2em" height="1.2em">
                <path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
