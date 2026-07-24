import { ShieldCheck } from "lucide-react";
export function TrustBanner() {
  return (
    <div className="border-b border-border/60 bg-secondary/60">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs text-muted-foreground sm:text-sm">
        <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
        <span><strong className="font-medium text-foreground">Independent analysis.</strong>{" "}Every tool is tested in a live SMB environment. We disclose all affiliate relationships.</span>
      </div>
    </div>
  );
}
