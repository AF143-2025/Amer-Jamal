import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-xs" dir="ltr">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-900/60">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700 inline-block"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700 inline-block"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700 inline-block"></span>
          {filename && <span className="text-slate-400 text-[11px] ml-2 font-medium">{filename}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">{language}</span>
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed text-left">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
};

