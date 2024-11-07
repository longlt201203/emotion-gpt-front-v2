import { ChatResponse } from "./chat";

export interface ChatLoaderData {
    chats: ChatResponse[];
    chat?: ChatResponse;
}