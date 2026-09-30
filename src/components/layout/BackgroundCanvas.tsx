import React from 'react';
import { InteractiveCyberSymbolsCanvas } from './InteractiveCyberSymbolsCanvas';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-white"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-white" />
      <InteractiveCyberSymbolsCanvas />
    </div>
  );
};

