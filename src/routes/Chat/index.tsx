import {
  createChat,
  getChat,
  getChatAnalysis,
  listChats,
  putMessage,
} from "@/services/chat.service";
import { ChatLoaderData } from "@/types";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { z } from "zod";
import { zx } from "zodix";
import RightSidebar from "./RightSidebar";

const chatActionSchema = z.object({
  action: z.enum(["new-chat", "put-message"]),
  message: z.string().optional(),
});

export async function action({ params, request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = await zx.parseForm(formData, chatActionSchema);
  const chatId = Number(params.chatId);
  switch (data.action) {
    case "new-chat":
      const newChat = await createChat();
      return redirect(`/chat/${newChat.id}`);
    case "put-message":
      await putMessage(chatId, formData);
      break;
    default:
      return new Error("Unknown action");
  }
  return null;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const chats = await listChats();
  let chat = undefined;
  let analysis = undefined;
  if (params.chatId) {
    [chat, analysis] = await Promise.all([
      getChat(Number(params.chatId)),
      getChatAnalysis(Number(params.chatId)),
    ]);
  }
  const chatLoaderData: ChatLoaderData = {
    chats,
    chat,
    analysis,
  };
  return chatLoaderData;
}

export default function Chat() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}
