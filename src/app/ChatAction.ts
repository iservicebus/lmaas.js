// app/actions.ts

"use server";

import { ChatFields } from './ChatBoard';

export async function handleChatSubmit(data: ChatFields) {
  console.log({ question: data.question, answer: data.answer});
} 