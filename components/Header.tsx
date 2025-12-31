
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'عن الشركة', href: '#about' },
    { name: 'تفاصيل العمل', href: '#details' },
    { name: 'نظام الاستحقاقات', href: '#salaries' },
    { name: 'نظام الدفع', href: '#payment-systems' },
    { name: 'نظام البونص', href: '#bonuses' },
    { name: 'الضمانات الرسمية', href: '#guarantees' },
    { name: 'معايير الأهلية', href: '#apply' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.ibb.co/r20hDcqJ/1000149894.jpg" 
              alt="TRX Logo" 
              className="w-9 h-9 rounded-lg shadow-md border border-slate-100 object-cover"
            />
            <div>
              <h1 className="text-base font-black bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent tracking-tighter">TRX COMPANY</h1>
              <p className="text-[7px] text-slate-500 font-extrabold tracking-widest uppercase">Official Portal</p>
            </div>
          </div>

          <button 
            className="p-1.5 text-slate-900 bg-slate-50 border border-slate-100 rounded-lg transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between items-center">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Nav - Slide from bottom with fade */}
        <div 
          className={`fixed inset-0 top-[61px] bg-slate-950/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`bg-white w-full rounded-b-[24px] shadow-2xl p-4 space-y-1 transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link, idx) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 text-slate-800 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all active:scale-[0.97]"
              >
                {link.name}
                <i className="fas fa-chevron-left text-[8px] opacity-20"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
