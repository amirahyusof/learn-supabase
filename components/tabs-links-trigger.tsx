"use client"

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProgressBar, ProgressBarLink } from "@/components/progress-bar";

export function TabsTrigger({ className, href, disabled, children }: { className?: string; href: string; disabled?: boolean; children: React.ReactNode }) {
  const pathName = usePathname()

  return (
    <ProgressBar>
      <div>
        <ProgressBarLink
          className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          pathName === href && "bg-background text-foreground shadow",
          disabled && "pointer-events-none opacity-50",
          className
          )}
          href={href}
        >
          {children}
        </ProgressBarLink>
      </div>
    </ProgressBar>
    
  )
}