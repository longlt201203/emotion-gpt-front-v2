import { Separator } from "@/components/ui/separator";

export default function RightSidebar() {
    return (
        <div className="border-l p-4 flex flex-col gap-4 min-w-[240px]">
            <div>
                <h1 className="text-2xl font-semibold text-center">Analysis</h1>
            </div>
            <Separator />
        </div>
    );
}