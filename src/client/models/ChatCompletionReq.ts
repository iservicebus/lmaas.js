/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatTextList } from './ChatTextList';
export type ChatCompletionReq = {
    max_tokens?: (number | null);
    temperature?: number;
    top_p?: number;
    stop?: (string | Array<string> | null);
    model?: (string | null);
    id?: string;
    req_time?: string;
    text_list: ChatTextList;
};

