import { Separator } from "@/components/ui/separator";

export interface MessageListItemProps {
    role?: string;
    text?: string;
    images?: string[];
}

export default function MessageListItem(props: MessageListItemProps) {
    return (
        <div className={`flex flex-col ${props.role == "user" ? "items-end" : "items-start"}`}>
            <div className={`border p-2 rounded-lg min-w-[20%] max-w-[60%] ${props.role == "user" && "bg-secondary"}`}>
                <p className="font-semibold">{props.role == "user" ? "You" : "Bot"}</p>
                <Separator className="mb-2" />
                {props.text && props.text.split("\n").map((item, index) => (
                    <p key={index} className="text-sm">{item}</p>
                ))}
                {props.images && (
                    <div className="flex gap-2 mt-2">
                        {props.images.map((item, index) => (
                            <img key={index} src={item} className="h-20 rounded" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}