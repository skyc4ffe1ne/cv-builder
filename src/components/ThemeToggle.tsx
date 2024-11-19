"use client";
import { useTheme } from "next-themes";
import { Monitor, MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-accentbd" />
          <MoonStar className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-accentbd" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`cursor-pointer font-medium text-sm ${theme === "light" ? "bg-accent" : ""}`}
          onClick={() => setTheme("light")}
        >
          <Sun
            strokeWidth={2}
            className={`mr-2 ${theme === "light" ? "stroke-accentbd" : ""}`}
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer font-medium my-1 text-sm ${theme === "dark" ? "bg-accent" : ""}`}
          onClick={() => setTheme("dark")}
        >
          <MoonStar
            strokeWidth={2}
            className={`mr-2 ${theme === "dark" ? "stroke-accentbd" : ""}`}
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer font-medium text-sm ${theme === "system" ? "bg-accent" : ""}`}
          onClick={() => setTheme("system")}
        >
          <Monitor
            strokeWidth={2}
            className={`mr-2 ${theme === "system" ? "stroke-accentbd" : ""}`}
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
