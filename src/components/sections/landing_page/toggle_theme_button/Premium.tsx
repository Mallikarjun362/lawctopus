"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="bg-background relative flex h-10 w-20 items-center rounded-full border p-1 shadow-lg"
    >
      <motion.div
        animate={{
          x: dark ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="bg-primary absolute h-8 w-8 rounded-full"
      />

      <div className="relative z-10 flex w-full justify-between pl-2 pr-1.5">
        <Sun className="h-4 w-4 text-white" />
        <Moon className="h-4 w-4 text-black" />
      </div>
    </button>
  );
}
