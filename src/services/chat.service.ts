import { axiosGet, axiosPost, axiosPut } from "./service";
import { AnalyzeResponse, ChatResponse } from "@/types";

export async function listChats() {
  return await axiosGet<ChatResponse[]>("/api/chat");
}

export async function getChat(chatId: number) {
  return await axiosGet<ChatResponse>(`/api/chat/${chatId}`);
}

export async function getChatAnalysis(chatId: number) {
  return await axiosGet<AnalyzeResponse>(`/api/chat/${chatId}/analyze`);
}

export async function createChat() {
  return await axiosPost<ChatResponse>("/api/chat");
}

export async function putMessage(chatId: number, formData: FormData) {
  return await axiosPut(`/api/chat/${chatId}`, formData);
}
