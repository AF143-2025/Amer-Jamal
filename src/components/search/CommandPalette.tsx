import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  Wrench, 
  Compass,
  Award,
  Navigation, 
  CornerDownLeft
} from 'lucide-react';
import { useSearch, UnifiedSearchResult } from '../../hooks/useSearch';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { results } = useSearch(query);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation within results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (results.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          navigate(results[selectedIndex].url);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  const getItemIcon = (type: UnifiedSearchResult['type']) => {
    switch (type) {
      case 'tool': return <Wrench className="h-4 w-4 text-amber-700" />;
      case 'roadmap': return <Compass className="h-4 w-4 text-teal-700" />;
      case 'certification': return <Award className="h-4 w-4 text-emerald-700" />;
      default: return <Navigation className="h-4 w-4 text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-20 px-3 sm:px-4 bg-slate-950/35 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Backdrop click handler */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Search Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_16px_50px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* World-Class Search Bar Input */}
        <div className="flex items-center px-4 sm:px-5 py-3.5 sm:py-4 border-b border-slate-200 gap-2.5 sm:gap-3.5 bg-white">
          <Search className="h-5 w-5 text-teal-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="ابحث في الأدوات السيبرانية، خارطة الطريق، المختبرات، وتحديات CTF..."
            className="w-full text-sm sm:text-base font-arabic font-semibold text-slate-950 placeholder:text-slate-400 bg-transparent focus:outline-none"
          />
          {query.trim().length > 0 && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors shrink-0 cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[65vh] overflow-y-auto p-2">
          {query.trim().length > 0 ? (
            results.length > 0 ? (
              <div className="space-y-1 py-1">
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(item.url);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-start gap-3.5 p-3.5 rounded-2xl cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-teal-50 text-slate-950 shadow-2xs border border-teal-200/80' 
                          : 'hover:bg-slate-50 text-slate-800 border border-transparent'
                      }`}
                    >
                      {/* Vertical Icon Box */}
                      <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        {getItemIcon(item.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold font-arabic text-slate-950 truncate">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium truncate mt-1">
                          {item.description}
                        </p>
                      </div>

                      {isSelected && (
                        <div className="flex items-center text-teal-600 mt-1 shrink-0">
                          <CornerDownLeft className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-14 text-center space-y-2">
                <p className="text-sm font-bold text-slate-900 font-arabic">لا توجد نتائج مطابقة لبحثك</p>
                <p className="text-xs text-slate-500 font-medium">جرب البحث بكلمات أخرى مثل: Nmap, SSRF, SUID, Wireshark, CTF</p>
              </div>
            )
          ) : (
            /* Clean, World-Class Search Guidance */
            <div className="py-12 px-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-200/80 mx-auto flex items-center justify-center text-teal-700 shadow-2xs">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-950 font-arabic">البحث الفوري الشامل</h3>
              <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto leading-relaxed">
                اكتب للبحث الفوري في كافة أدوات الأمن السيبراني، محطات خارطة الطريق، ومحاكيات المختبر وتحديات CTF.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {['Nmap', 'SSRF', 'Linux SUID', 'Zero Trust', 'Burp Suite', 'Amass', 'eBPF', 'CTF'].map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

