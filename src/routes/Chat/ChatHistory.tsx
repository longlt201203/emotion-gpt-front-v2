import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ChatHistoryItem from "./ChatHistoryItem";
import { useLoaderData, useParams } from "react-router-dom";
import { ChatLoaderData } from "@/types";

export default function ChatHistory() {
    const { chats } = useLoaderData() as ChatLoaderData;
    const params = useParams();

    return (
        <ScrollArea>
            <div className="flex flex-col gap-4">
                {chats.map((item, index) => (<ChatHistoryItem key={item.id} chat={item} index={index+1} active={params.chatId != undefined && Number(params.chatId) == item.id} />))}
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}