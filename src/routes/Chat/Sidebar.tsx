import { Button } from "@/components/ui/button";
import Profile from "./Profile";
import { Separator } from "@/components/ui/separator";
import ChatHistory from "./ChatHistory";
import { Form } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="border-r p-4 flex flex-col gap-4 min-w-[240px]">
            <Profile />
            <Form method="post" className="flex flex-col">
                <Button name="action" value="new-chat" type="submit">New Chat</Button>
            </Form>
            <Separator />
            <ChatHistory />
        </div>
    );
}