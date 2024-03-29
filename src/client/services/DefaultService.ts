/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionReq } from '../models/ChatCompletionReq';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Chat Completion
     * @returns any Successful Response
     * @throws ApiError
     */
    public static chatCompletionChatCompletionPost(host_url: string, {
        requestBody,
    }: {
        requestBody: ChatCompletionReq,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: host_url+'/chat/completion',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
