import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // --- Smart Scroll Logic ---
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Only trigger hide/show if the mobile menu is NOT open
        if (!isMobileMenuOpen) {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setIsVisible(false); // Hide on scroll down
          } else {
            setIsVisible(true);  // Show on scroll up
          }
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* 1. MAIN HEADER (Desktop & Tablet/Mobile Toggle) */}
      <header 
        className={`fixed top-0 left-0 w-full z-[60] font-sans transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo Section - Changed 'md' to 'lg' to keep tablet in mobile style */}
        <div className="flex justify-between items-center px-4 py-3 lg:justify-center relative">
          <button 
            className="lg:hidden text-white hover:text-[#ff9933] transition-colors p-2" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>

          <div className="lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
            <Link to="/">
              <img 
                src="https://i0.wp.com/www.ayurvedaalliance.org/wp-content/uploads/2025/09/logo-ayurveda-alliance.webp?fit=286%2C269&ssl=1" 
                alt="Logo" 
                className="h-14 lg:h-24 w-auto brightness-0 invert" 
              />
            </Link>
          </div>
          
          <div className="w-10 lg:hidden"></div>
        </div>

        {/* 2. Desktop Navigation (Visible only on Large Screens) */}
        <nav className="hidden lg:block bg-[#333a3d]/95 backdrop-blur-sm border-b border-white/5 shadow-2xl">
          <ul className="flex items-center justify-center space-x-2 text-white text-[13px] font-medium tracking-wider uppercase">
            <NavItem title="Home" to="/" active={isActive('/')} />
            
            <NavItem title="Find a solution for..." hasDropdown active={isActive('/solutions')}>
              <DropdownItem title="Stress Management" to="/solutions/stress" active={isActive('/solutions/stress')} />
              <DropdownItem title="Health & Wellness" hasSubmenu active={isActive('/solutions/health')}>
                <SubmenuItem title="Yoga for Back Pain" to="/solutions/yoga-back" active={isActive('/solutions/yoga-back')} />
                <SubmenuItem title="Ayurveda Tips" to="/solutions/ayurveda" active={isActive('/solutions/ayurveda')} />
              </DropdownItem>
              <DropdownItem title="Anxiety & Depression" to="/solutions/anxiety" active={isActive('/solutions/anxiety')} />
            </NavItem>

            <NavItem title="Meditation" hasDropdown active={isActive('/meditation')}>
              <DropdownItem title="Sahaj Samadhi" to="/meditation/sahaj" active={isActive('/meditation/sahaj')} />
              <DropdownItem title="Mindfulness" to="/meditation/mindfulness" active={isActive('/meditation/mindfulness')} />
              <DropdownItem title="Guided Meditation" to="/meditation/guided" active={isActive('/meditation/guided')} />
            </NavItem>

            <NavItem title="Yoga" hasDropdown active={isActive('/yoga')}>
              <DropdownItem title="Sri Sri Yoga" to="/yoga/sri-sri" active={isActive('/yoga/sri-sri')} />
              <DropdownItem title="Hatha Yoga" to="/yoga/hatha" active={isActive('/yoga/hatha')} />
              <DropdownItem title="Power Yoga" to="/yoga/power" active={isActive('/yoga/power')} />
            </NavItem>

            <NavItem title="Wisdom" hasDropdown active={isActive('/wisdom')}>
              <DropdownItem title="Knowledge Sheets" to="/wisdom/sheets" active={isActive('/wisdom/sheets')} />
              <DropdownItem title="Yoga Sutras" to="/wisdom/sutras" active={isActive('/wisdom/sutras')} />
            </NavItem>

            <NavItem title="Events" to="/events" active={isActive('/events')} />
            <NavItem title="Social Impact" to="/social-impact" active={isActive('/social-impact')} />
            <NavItem title="About Us" to="/about" active={isActive('/about')} />
          </ul>
        </nav>
      </header>

      {/* 3. Mobile/Tablet Sidebar (Beautiful Drawer) - Moved outside header for reliability */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-[380px] bg-[#222729] shadow-2xl transform transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#333a3d]">
            <span className="text-white font-bold tracking-widest text-xs uppercase">Official Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#ff9933] transition-colors p-2">
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col text-white h-[calc(100%-80px)] overflow-y-auto py-4">
            <MobileNavItem title="Home" to="/" active={isActive('/')} closeMenu={() => setIsMobileMenuOpen(false)} />
            
            <MobileNavItem title="Find a solution for..." hasDropdown active={isActive('/solutions')}>
                <MobileLink to="/solutions/stress" label="Stress Management" active={isActive('/solutions/stress')} closeMenu={() => setIsMobileMenuOpen(false)} />
                <MobileLink to="/solutions/health" label="Health & Wellness" active={isActive('/solutions/health')} closeMenu={() => setIsMobileMenuOpen(false)} />
                <MobileLink to="/solutions/anxiety" label="Anxiety & Depression" active={isActive('/solutions/anxiety')} closeMenu={() => setIsMobileMenuOpen(false)} />
            </MobileNavItem>

            <MobileNavItem title="Meditation" hasDropdown active={isActive('/meditation')}>
                <MobileLink to="/meditation/sahaj" label="Sahaj Samadhi" active={isActive('/meditation/sahaj')} closeMenu={() => setIsMobileMenuOpen(false)} />
                <MobileLink to="/meditation/mindfulness" label="Mindfulness" active={isActive('/meditation/mindfulness')} closeMenu={() => setIsMobileMenuOpen(false)} />
                <MobileLink to="/meditation/guided" label="Guided Meditation" active={isActive('/meditation/guided')} closeMenu={() => setIsMobileMenuOpen(false)} />
            </MobileNavItem>

            <MobileNavItem title="Yoga" hasDropdown active={isActive('/yoga')}>
                <MobileLink to="/yoga/sri-sri" label="Sri Sri Yoga" active={isActive('/yoga/sri-sri')} closeMenu={() => setIsMobileMenuOpen(false)} />
                <MobileLink to="/yoga/hatha" label="Hatha Yoga" active={isActive('/yoga/hatha')} closeMenu={() => setIsMobileMenuOpen(false)} />
            </MobileNavItem>

            <MobileNavItem title="Events" to="/events" active={isActive('/events')} closeMenu={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem title="About Us" to="/about" active={isActive('/about')} closeMenu={() => setIsMobileMenuOpen(false)} />
          </ul>
        </div>
      </div>
    </>
  );
};

// --- Desktop Components ---

const NavItem = ({ title, to, hasDropdown, active, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="relative group px-4 py-5" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      {hasDropdown ? (
        <button className={`flex items-center gap-1 transition-colors outline-none cursor-default ${active ? 'text-[#ff9933]' : 'text-white hover:text-[#ff9933]'}`}>
          {title} <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <Link to={to} className={`transition-colors ${active ? 'text-[#ff9933]' : 'text-white hover:text-[#ff9933]'}`}>
          {title}
        </Link>
      )}

      {hasDropdown && (
        <div className={`absolute left-0 top-full w-64 bg-[#333a3d] border-t-2 border-[#ff9933] transition-all duration-300 origin-top shadow-xl ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
          <ul className="py-2">{children}</ul>
        </div>
      )}
    </li>
  );
};

const DropdownItem = ({ title, to, hasSubmenu, active, children }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <li 
      className="relative border-b border-white/5 last:border-0" 
      onMouseEnter={() => setIsSubOpen(true)} 
      onMouseLeave={() => setIsSubOpen(false)}
    >
      {hasSubmenu ? (
        <div className={`flex justify-between items-center px-5 py-3 text-sm cursor-default transition-colors ${active ? 'text-[#ff9933]' : 'text-white hover:text-[#ff9933]'}`}>
          <span>{title}</span> <ChevronRight size={14} />
        </div>
      ) : (
        <Link to={to} className={`block px-5 py-3 text-sm transition-colors hover:bg-white/5 ${active ? 'text-[#ff9933]' : 'text-white hover:text-[#ff9933]'}`}>
          {title}
        </Link>
      )}

      {hasSubmenu && (
        <div className={`absolute left-full top-0 w-60 bg-[#444c4f] shadow-2xl ml-[2px] transition-all duration-300 origin-left ${isSubOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
          <ul className="py-2">{children}</ul>
        </div>
      )}
    </li>
  );
};

const SubmenuItem = ({ title, to, active }) => (
  <li>
    <Link to={to} className={`block px-6 py-2 text-[13px] transition-colors ${active ? 'text-[#ff9933]' : 'text-white/70 hover:text-white'}`}>
      {title}
    </Link>
  </li>
);

// --- Mobile/Tablet Components ---

const MobileNavItem = ({ title, to, hasDropdown, active, children, closeMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="border-b border-white/5 last:border-0">
      <div className="flex justify-between items-center">
        {hasDropdown ? (
          /* Text clicking also toggles the menu on mobile/tablet */
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex-grow text-left px-6 py-5 font-medium flex items-center justify-between outline-none">
            <span className={active || isExpanded ? 'text-[#ff9933]' : 'text-white'}>{title}</span>
            <ChevronDown size={20} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#ff9933]' : 'opacity-40'}`} />
          </button>
        ) : (
          <Link to={to} onClick={closeMenu} className={`flex-grow px-6 py-5 font-medium transition-colors ${active ? 'text-[#ff9933] bg-white/5' : 'text-white hover:bg-white/5'}`}>
            {title}
          </Link>
        )}
      </div>

      {hasDropdown && (
        <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="min-h-0 bg-black/10">
            {children}
          </div>
        </div>
      )}
    </li>
  );
};

const MobileLink = ({ to, label, active, closeMenu }) => (
  <Link 
    to={to} 
    onClick={closeMenu} 
    className={`block pl-10 py-3 text-sm transition-all ${active ? 'text-[#ff9933]' : 'text-white/60 hover:text-white hover:pl-11'}`}
  >
    {label}
  </Link>
);

export default Header;