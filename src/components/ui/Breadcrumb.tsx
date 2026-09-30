import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1.5 text-xs text-slate-500 mb-6 font-arabic">
      <Link 
        to="/" 
        className="hover:text-amber-600 transition-colors flex items-center gap-1 text-slate-600"
        title="Home"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.name}>
            <ChevronRight className="h-3 w-3 opacity-40 shrink-0" />
            {item.href && !isLast ? (
              <Link 
                to={item.href} 
                className="hover:text-amber-600 transition-colors truncate max-w-[200px] text-slate-600 font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-slate-900 font-bold truncate max-w-[240px]">
                {item.name}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

