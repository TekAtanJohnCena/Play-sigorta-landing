"use client";

import { cn } from "@/lib/utils";

export function MeshGradientBg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-white", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[30%] -right-[10%] h-[60%] w-[50%] animate-mesh-1 rounded-full opacity-[0.15] blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] -left-[15%] h-[55%] w-[45%] animate-mesh-2 rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-[20%] right-[10%] h-[50%] w-[40%] animate-mesh-3 rounded-full opacity-[0.1] blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #60a5fa 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
