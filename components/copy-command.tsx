"use client";
import { useSitePreferences } from "@/components/site-preferences";
import { useEffect, useRef, useState } from "react";
export function CopyCommand({ command }: { command: string }) {
  const { t } = useSitePreferences();
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);
  useEffect(() => {
    setStatus("idle");
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [command]);
  async function copy() {
    const { t } = useSitePreferences();
    try {
      await navigator.clipboard.writeText(command);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 1600);
  }
  return (
    <div className="command-block">
      <code>{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={`${t("复制命令：")}${command}`}
        aria-live="polite"
      >
        {status === "copied"
          ? t("已复制 ✓")
          : status === "failed"
            ? t("请手动复制")
            : t("复制")}
      </button>
    </div>
  );
}
