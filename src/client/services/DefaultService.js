import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Chat Completion
     * @returns any Successful Response
     * @throws ApiError
     */
    static chatCompletionChatCompletionPost({ requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: 'http://localhost:8000/chat/completion',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
