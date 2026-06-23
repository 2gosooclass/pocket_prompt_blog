'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptBoxProps {
  prompt: string;
  title?: string;
}

export default function PromptBox({ prompt, title = '프롬프트' }: PromptBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt: ', err);
    }
  };

  return (
    <div style={{
      background: 'var(--bg-subtle)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      margin: '1.5rem 0',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-elevated)',
      }}>
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--fg-muted)' }}>{title}</span>
        <button 
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: copied ? '#10b981' : 'var(--fg-subtle)',
            fontSize: '0.85rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
        >
          {copied ? <><Check size={16} /> 복사완료</> : <><Copy size={16} /> 복사</>}
        </button>
      </div>
      <div style={{ padding: '1.25rem', background: 'var(--bg)', fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--fg)', whiteSpace: 'pre-wrap' }}>
        {prompt}
      </div>
    </div>
  );
}
