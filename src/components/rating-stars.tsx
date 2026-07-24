import { Star } from "lucide-react";
export function RatingStars({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i + 1 <= Math.round(value);
        return <Star key={i} className={"h-4 w-4 " + (filled ? "fill-accent text-accent" : "text-muted-foreground/40")} />;
      })}
      <span className="ml-1 text-sm font-medium tabular-nums text-foreground">{value.toFixed(1)}</span>
    </div>
  );
}
