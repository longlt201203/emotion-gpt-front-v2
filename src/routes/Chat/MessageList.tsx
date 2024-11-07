import { ScrollArea } from "@/components/ui/scroll-area";
import MessageListItem from "./MessageListItem";
import { ChatResponse } from "@/types";

export interface MessageListProps {
    chat: ChatResponse;
}

export default function MessageList({ chat }: MessageListProps) {
    return (
        <ScrollArea className="flex-grow">
            <div className="flex flex-col p-4 gap-6">
                {chat.logs.map((item, index) => <MessageListItem key={index} role={index % 2 != 0 ? "bot" : "user"} text={item.message} />)}
            </div>
        </ScrollArea>
    );
}