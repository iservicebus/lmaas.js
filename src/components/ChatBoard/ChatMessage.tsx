
import React, { useState } from 'react';
import {IchatMessage} from "./ChatAction";
import {marked} from 'marked';

interface MessageProps {
    id: string;
    question: string;
    answer: string;
    tm: Date;
  }
  
  const ChatMessage = (message: IchatMessage) => {

    //var htmlString ="<p className='disabled w-full appearance-none whitespace-break-spaces text-wrap break-words bg-inherit px-5 py-3.5 text-gray-500 dark:text-gray-400'>" +question+"</p>"
    const parsedHtml = marked.parse(message.assistant);
    return (

      <div className="chat-message">
        <div className="group relative w-full items-start justify-start gap-4 max-sm:text-sm" role="presentation">
          <div className="flex w-full flex-col"> 
            <div className="flex w-full flex-row flex-nowrap">
    
            <p className='disabled w-full appearance-none whitespace-break-spaces text-wrap break-words bg-inherit px-5 py-3.5 '>
               {message.user}
            </p>

            </div>
          </div>
        </div> 
        <div className="group relative -mb-6 flex items-start justify-start gap-4 pb-4 leading-relaxed" role="presentation">
          <div className="relative min-h-[calc(2rem+theme(spacing[3.5])*2)] min-w-[60px] break-words rounded-2xl border border-gray-100 bg-gray-800 from-gray-50 px-5 py-3.5  prose-pre:my-2 dark:border-gray-800 dark:from-gray-800/40 dark:text-gray-300"> 
            <div className="prose max-w-none max-sm:prose-sm dark:prose-invert prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900">

            <p dangerouslySetInnerHTML={{ __html: parsedHtml}} />

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  