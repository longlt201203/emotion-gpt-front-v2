import { axiosGet } from "./service";
import { ChatResponse } from "@/types";

export async function listChats() {
    return await axiosGet<ChatResponse[]>('/api/chat');
}

export async function getChat(chatId: number) {
    return await axiosGet<ChatResponse>(`/api/chat/${chatId}`);
}