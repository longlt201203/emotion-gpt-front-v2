import { ChatLog } from "./chatlog";

export interface ChatResponse {
    id: number;
    createdAt: string;
    updatedAt: string;
    logs: ChatLog[];
}