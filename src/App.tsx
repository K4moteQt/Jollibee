import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { planSections } from './content';

export default function App() {
  const [activeTab, setActiveTab] = useState(planSections[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Use refs to implement a scrollspy
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      let currentActiveId = activeTab;

      planSections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            currentActiveId = section.id;
          }
        }
      });

      if (currentActiveId !== activeTab) {
        setActiveTab(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#FFC72C] selection:text-slate-900">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 bg-[#D91A21] text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#D91A21]" fill="currentColor">
                 <path d="M50 10c-22 0-40 18-40 40 0 11 4.5 21.5 12 28.5L50 95l28-16.5c7.5-7 12-17.5 12-28.5 0-22-18-40-40-40zM35 45c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm30 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm-15 25c-8.3 0-15-6.7-15-15h30c0 8.3-6.7 15-15 15z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black font-sans tracking-tight leading-none uppercase">Jollibee</h1>
              <p className="text-xs text-[#FFC72C] font-bold tracking-wider uppercase">CRO & UX Masterplan</p>
            </div>
          </div>
          <button 
            className="md:hidden p-2 text-white hover:bg-white/20 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex gap-8">
        
        {/* Sidebar Nav (Desktop) */}
        <aside className="hidden md:block w-64 flex-shrink-0 relative">
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Strategy Sections</h2>
            </div>
            <nav className="flex flex-col py-2 max-h-[calc(100vh-10rem)] overflow-y-auto">
              {planSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                    activeTab === section.id 
                      ? 'bg-[#FFC72C]/10 text-[#D91A21] font-bold border-r-4 border-[#D91A21]' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-r-4 border-transparent'
                  }`}
                >
                  <span className={activeTab === section.id ? 'text-[#D91A21]' : 'text-slate-400'}>
                    {section.icon}
                  </span>
                  <span className="text-sm leading-tight font-bold tracking-wide">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div 
              className="absolute top-16 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-xl overflow-y-auto transform transition-transform"
              onClick={e => e.stopPropagation()}
            >
              <nav className="flex flex-col py-4">
                {planSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3 px-6 py-4 text-left border-b border-slate-100 ${
                      activeTab === section.id ? 'bg-[#FFC72C]/10 text-[#D91A21] font-bold' : 'text-slate-600 font-bold'
                    }`}
                  >
                    <span className={activeTab === section.id ? 'text-[#D91A21]' : 'text-slate-400'}>
                      {section.icon}
                    </span>
                    <span className="text-sm tracking-wide">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-12 pb-32">
          
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#D91A21] text-white p-8 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC72C]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-4xl font-black tracking-tight mb-2 relative z-10">Bida ang Saya.</h2>
              <p className="text-white/90 text-lg relative z-10">A modern, high-converting digital experience blueprint.</p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center bg-white relative z-10">
              <p className="text-slate-600 leading-relaxed text-lg">
                This comprehensive masterplan outlines the exact structure, technical stack, UX/UI rationale, and conversion rate optimization (CRO) strategies required to build an industry-leading, high-performing web application for Jollibee.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-red-100 text-[#D91A21] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">CRO Strategy</span>
                <span className="bg-red-100 text-[#D91A21] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">UX/UI Blueprint</span>
                <span className="bg-red-100 text-[#D91A21] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">Technical Stack</span>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {planSections.map((section, index) => (
              <section 
                key={section.id} 
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-6 pb-2 border-b-2 border-slate-100">
                  <div className="w-12 h-12 bg-[#FFC72C]/10 border border-[#FFC72C]/30 text-[#D91A21] rounded-2xl flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">SECTION {String(index + 1).padStart(2, '0')}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">{section.title}</h2>
                  </div>
                </div>
                
                <div className="prose prose-red max-w-none text-slate-600 prose-headings:text-slate-900">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-slate-100 text-center text-slate-500 font-bold tracking-wide uppercase text-xs">
            <p className="text-sm">End of Blueprint. Ready for Implementation.</p>
          </footer>

        </main>
      </div>
    </div>
  );
}
