import { Button } from "@/components/ui/button";
import { ChatResponse } from "@/types";
import { useNavigate } from "react-router-dom";

export interface ChatHistoryItemProps {
    active?: boolean;
    chat: ChatResponse;
    index: number;
}

export default function ChatHistoryItem(props: ChatHistoryItemProps) {
    const navigate = useNavigate();

    return (
        <Button className={`h-full px-2 justify-start break-all whitespace-pre-wrap max-w-[320px]${props.active ? " bg-secondary" : ''}`} variant="ghost" onClick={() => navigate(`/chat/${props.chat.id}`)}>
            <div className="text-start">
                <p className="text-base">Chat {props.index}</p>
                {/* <p className="font-normal">Chat content asjdhkjashd asdha kshdaksjdhaskjdhjkas asdjhasjkd</p> */}
            </div>
        </Button>
    );
}