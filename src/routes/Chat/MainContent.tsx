import { useLoaderData } from "react-router-dom";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { ChatLoaderData } from "@/types";

export default function MainContent() {
  const { chat } = useLoaderData() as ChatLoaderData;

  return chat ? (
    <div className="flex-grow flex flex-col gap-2">
      <MessageList chat={chat} />
      <MessageInput />
    </div>
  ) : (
    <div className="flex-grow flex flex-col gap-2">Please select a chat</div>
  );
}
