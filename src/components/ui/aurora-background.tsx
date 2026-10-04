"use client";

import { cn } from "@/lib/utils";

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#030712]", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[30%] left-[10%] h-[70%] w-[50%] animate-aurora-1 rounded-full opacity-[0.12] blur-[160px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #1d4ed8 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-[20%] right-[5%] h-[60%] w-[45%] animate-aurora-2 rounded-full opacity-[0.08] blur-[160px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
