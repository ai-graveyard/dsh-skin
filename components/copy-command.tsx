"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 1600);
  }

  return (
    <div className="command-block">
      <code>{command}</code>
      <button type="button" onClick={copy} aria-label={`Copy command: ${command}`} aria-live="polite">
        {status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy"}
      </button>
    </div>
  );
}
