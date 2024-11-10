import { AnalyzeResponse } from "@/types";

export interface AnalysisProps {
  analysis?: AnalyzeResponse;
}

export default function Analysis({ analysis }: AnalysisProps) {
  return (
    <div className="flex flex-col">
      <AnalysisItem title="Summary" value={analysis?.summary} />
      <AnalysisItem title="Hobbies" value={analysis?.hobbies.join(",")} />
      <AnalysisItem title="Interests" value={analysis?.interests.join(",")} />
      <AnalysisItem title="Problems" value={analysis?.problems.join(",")} />
      <AnalysisItem
        title="Personalities"
        value={analysis?.personalities.join(",")}
      />
      <AnalysisItem
        title="Other Observations"
        value={analysis?.otherObservations.join(",")}
      />
    </div>
  );
}

export interface AnalysisItemProps {
  title?: string;
  value?: string;
}

export function AnalysisItem({ title, value }: AnalysisItemProps) {
  return (
    <div className="flex gap-1">
      <h5 className="text-base font-semibold">{title}:</h5>
      <p>{value}</p>
    </div>
  );
}
