import { getChat, listChats } from "@/services/chat.service";
import { ChatLoaderData } from "@/types";
import { ActionFunctionArgs, LoaderFunctionArgs } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { z } from "zod";
import { zx } from "zodix";

const chatActionSchema = z.object({
    action: z.enum(["new-chat", "put-message"]),
    message: z.string()
});

export async function action({ params, request }: ActionFunctionArgs) {
    const formData = await request.formData();
    zx.parseFormSafe(formData, chatActionSchema);
    return null;
}

export async function loader({ params }: LoaderFunctionArgs) {
    const chats = await listChats();
    let chat = undefined;
    if (params.chatId) chat = await getChat(Number(params.chatId));
    const chatLoaderData: ChatLoaderData = {
        chats,
        chat
    }
    return chatLoaderData;
}

export default function Chat() {
    return (
        <div className="h-screen flex">
            <Sidebar />
            <MainContent />
        </div>
    );
}