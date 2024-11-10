import { Separator } from "@/components/ui/separator";
import { ChatLoaderData } from "@/types";
import { useLoaderData } from "react-router-dom";
import Analysis from "./Analysis";

export default function RightSidebar() {
  const { analysis } = useLoaderData() as ChatLoaderData;

  return (
    <div className="border-l p-4 flex flex-col gap-4 min-w-[240px] max-w-[480px]">
      <div>
        <h1 className="text-2xl font-semibold text-center">Analysis</h1>
      </div>
      <Separator />
      {analysis ? (
        <Analysis analysis={analysis} />
      ) : (
        <div>Select a chat to see analysis</div>
      )}
    </div>
  );
}
