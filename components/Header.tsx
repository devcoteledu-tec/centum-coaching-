
import React, { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28SELqMf_xjvFnRvohJuQIuf0cEKM6K9lmA&s";
  const loginUrl = "https://img.freepik.com/free-vector/login-template_1017-6719.jpg";

  const institutionalLinks = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'about-us', label: 'About Us', icon: 'fa-university' },
    { id: 'blogs', label: 'Blogs', icon: 'fa-book-open' },
    { id: 'news', label: 'News', icon: 'fa-newspaper' },
    { id: 'results', label: 'Results', icon: 'fa-trophy' },
    { id: 'useful-links', label: 'Useful Links', icon: 'fa-link' },
  ];

  const academicDropdown = {
    label: 'Programs',
    icon: 'fa-graduation-cap',
    items: [
      { label: '+1 Coaching', id: 'online-admission' },
      { label: '+2 Coaching', id: 'online-admission' },
      { label: 'Foundation (8-10)', id: 'online-admission' },
      { label: 'Crash Courses', id: 'online-admission' }
    ]
  };

  const admissionDropdown = {
    label: 'Admission',
    icon: 'fa-id-card',
    items: [
      { label: 'Online Registration', id: 'online-admission' },
      { label: 'Fee Structure', id: 'online-admission' },
      { label: 'Application Process', id: 'online-admission' }
    ]
  };

  const contactDropdown = {
    label: 'Contact Us',
    icon: 'fa-headset',
    items: [
      { label: 'Contact Details', id: 'contact-us' },
      { label: 'Our Centers', id: 'centers' },
      { label: 'Careers', id: 'carrier' },
      { label: 'Announcements', id: 'announcements' }
    ]
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`w-full z-[100] transition-all duration-300 ${isMobileMenuOpen ? 'bg-white' : 'xl:bg-white bg-transparent'} ${activeTab === 'home' ? 'xl:sticky absolute' : 'sticky bg-white'} xl:shadow-sm xl:border-b xl:border-slate-100`}>
      {/* 1. News Ticker (Hidden on Mobile) */}
      <div className="ticker-wrapper relative z-[110] border-b border-white/10 hidden md:block">
        <div className="ticker-text text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="mx-12"><i className="fas fa-fire-flame-curved mr-2"></i> Admissions Open for 2025-26 Academic Year</span>
          <span className="mx-12"><i className="fas fa-trophy mr-2"></i> Centum Scholarship Test (CST) is Now Active</span>
          <span className="mx-12"><i className="fas fa-bullhorn mr-2"></i> Congratulations to our 2025 Top Rankers </span>
        </div>
      </div>

      {/* 2. Top Secondary Bar (Hidden on Mobile) */}
      <div className="bg-slate-50 border-b border-slate-100 py-2.5 px-6 lg:px-12 hidden md:block">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-700">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-red-800"></i>
              +91 7593038781
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-envelope text-red-800"></i>
              info@centumeducation.in
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="fas fa-clock text-red-800"></i>
              Mon - Sun: 9:00 AM - 7:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Header Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3.5 sm:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer shrink-0" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-100 overflow-hidden p-1 transition-transform group-hover:scale-105">
            <img src={logoUrl} alt="Centum Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className={`text-lg sm:text-xl font-black tracking-tighter leading-none uppercase shrink-0 transition-colors ${activeTab === 'home' ? 'xl:text-slate-900 text-white' : 'text-slate-900'}`}>
            CENTUM <span className="text-red-800">Cherpulassery</span>
          </h1>
        </div>

        {/* Navigation Items (Desktop Only) */}
        <div className="hidden xl:flex items-center flex-1 justify-center px-4 xl:px-8">
          <div className="flex items-center space-x-0.5 xl:space-x-1">
            {institutionalLinks.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)} 
                className={`px-3 xl:px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'text-red-800 bg-red-50 shadow-sm' 
                    : 'text-slate-800 hover:text-red-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-6 w-px bg-slate-200 mx-2 xl:mx-4"></div>

            {[academicDropdown, admissionDropdown, contactDropdown].map((dropdown) => (
              <div 
                key={dropdown.label}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(dropdown.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`px-3 xl:px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeDropdown === dropdown.label || dropdown.items.some(i => i.id === activeTab) ? 'text-red-800 bg-red-50' : 'text-slate-800 hover:text-red-800'
                }`}>
                  {dropdown.label}
                  <i className={`fas fa-chevron-down text-[7px] transition-transform duration-300 ${activeDropdown === dropdown.label ? 'rotate-180' : ''}`}></i>
                </button>

                <div className={`absolute top-full left-0 w-60 bg-white shadow-2xl rounded-2xl border border-slate-100 py-4 z-[150] transition-all duration-300 transform origin-top ${
                  activeDropdown === dropdown.label ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
                }`}>
                  {dropdown.items.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setActiveTab(opt.id!); setActiveDropdown(null); }}
                      className={`w-full text-left block px-7 py-3 text-[10px] font-bold transition-all border-l-4 ${
                        activeTab === opt.id 
                          ? 'text-red-800 bg-red-50 border-red-800' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-red-800 border-transparent hover:border-red-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a 
            href={loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-red-800 text-white px-6 xl:px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-red-900/10 hover:bg-slate-900 transition-all active:scale-95 whitespace-nowrap"
          >
            Login Portal
          </a>
          <button onClick={toggleMobileMenu} className={`xl:hidden p-3 rounded-2xl transition-all ${activeTab === 'home' && !isMobileMenuOpen ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'} active:scale-90 relative z-[160]`}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-bars-staggered' : 'fa-bars-staggered'} text-xl`}></i>
          </button>
        </div>
      </nav>

      {/* Upgrade Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[150] bg-white animate-in slide-in-from-right-full duration-500 ease-out flex flex-col overflow-hidden">
          {/* Header area of Menu - Removed Redundant Cross Icon */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-[160]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-100 p-1 bg-white shadow-sm">
                <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="font-black text-slate-900 tracking-tighter uppercase leading-none text-sm">CENTUM <span className="text-red-800">CPY</span></h2>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Cherpulassery</p>
              </div>
            </div>
            {/* Redundant close button removed to satisfy request */}
          </div>
          
          {/* Content area with staggered animations */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
            
            {/* Main Links */}
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Navigation</p>
              <div className="grid grid-cols-2 gap-2">
                {institutionalLinks.map((item, idx) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }} 
                    style={{ animationDelay: `${idx * 50}ms` }}
                    className={`flex flex-col items-center gap-3 p-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest transition-all border animate-in slide-in-from-bottom-4 duration-500 fill-mode-both ${
                      activeTab === item.id 
                        ? 'bg-red-800 text-white border-red-900 shadow-xl' 
                        : 'bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100'
                    } active:scale-95`}
                  >
                    <i className={`fas ${item.icon} text-lg mb-1`}></i>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdown Groups as Cards */}
            {[academicDropdown, admissionDropdown, contactDropdown].map((group, groupIdx) => (
              <div 
                key={group.label} 
                className="space-y-4 animate-in slide-in-from-bottom-6 duration-700 fill-mode-both"
                style={{ animationDelay: `${(institutionalLinks.length * 50) + (groupIdx * 100)}ms` }}
              >
                <div className="flex items-center gap-3 px-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-red-800 text-xs shadow-sm">
                    <i className={`fas ${group.icon}`}></i>
                  </div>
                  <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">{group.label}</p>
                </div>
                
                <div className="bg-slate-50/50 border border-slate-100 rounded-[2rem] p-2 space-y-1">
                  {group.items.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setActiveTab(opt.id!); setIsMobileMenuOpen(false); }}
                      className={`w-full text-left text-[11px] font-black py-4 px-6 rounded-2xl transition-all uppercase tracking-widest flex items-center justify-between ${
                        activeTab === opt.id ? 'text-red-800 bg-white shadow-sm' : 'text-slate-600 hover:bg-white/50'
                      }`}
                    >
                      {opt.label}
                      <i className="fas fa-chevron-right text-[8px] opacity-30"></i>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom Contact Info Strip */}
            <div 
              className="bg-slate-950 rounded-[2rem] p-6 text-white animate-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: '600ms' }}
            >
              <h4 className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-4">Quick Support</h4>
              <div className="space-y-4">
                <a href="tel:+917593038781" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-active:scale-90 transition-transform">
                    <i className="fas fa-phone-alt text-xs"></i>
                  </div>
                  <span className="text-xs font-bold">+91 7593038781</span>
                </a>
                <div className="flex gap-2">
                   {['facebook-f', 'instagram', 'youtube', 'whatsapp'].map(soc => (
                     <a key={soc} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-red-800 transition-colors">
                       <i className={`fab fa-${soc} text-xs`}></i>
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Fixed Footer CTA */}
          <div className="p-6 bg-white border-t border-slate-100 sticky bottom-0 w-full z-[170] shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
            <a 
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-800 text-white py-5 text-center rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-900/10 active:scale-95 transition-all"
            >
              <i className="fas fa-user-lock mr-2"></i> Student Portal Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
