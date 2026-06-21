"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import styles from "./page.module.css";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button onClick={handleCopy} className={styles.copyBtn}>
      {copied ? (
        <>
          <Check size={16} color="var(--emerald-400)" /> 복사완료!
        </>
      ) : (
        <>
          <Copy size={16} /> 프롬프트 복사
        </>
      )}
    </button>
  );
}
