"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { Button } from "./ui/button";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Code({ code, className, copyText }: { code: string, className?: string, copyText?: string }) {
  const [icon, setIcon] = useState(CopyIcon);

  const copy = async () => {
    const text = copyText ? copyText : code;

    await navigator?.clipboard?.writeText(text);
    setIcon(CheckIcon);
    setTimeout(() => setIcon(CopyIcon), 2000);
  };

  return (
    <pre className={cn("bg-gray-800 dark:bg-[#18181B] text-white relative rounded-md border border-white/10 p-4 text-sm font-medium h-fit w-fit overflow-clip", className)}>
      <code>{code}</code>
      <Button
        onClick={copy}
        className="p-2 rounded-md absolute right-2 top-2 bg-gray-600 hover:bg-gray-500 transition h-fit text-white"
      >
        {icon}
      </Button>
    </pre>
  );
}
