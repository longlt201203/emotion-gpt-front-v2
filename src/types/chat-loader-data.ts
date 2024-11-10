import { AnalyzeResponse } from "./analyze";
import { ChatResponse } from "./chat";

export interface ChatLoaderData {
  chats: ChatResponse[];
  chat?: ChatResponse;
  analysis?: AnalyzeResponse;
}
