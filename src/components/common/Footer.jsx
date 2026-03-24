import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#222729] text-white font-sans border-t border-white/5 mt-auto">
      {/* 1. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <Link to="/">
              <img 
                src="https://i0.wp.com/www.ayurvedaalliance.org/wp-content/uploads/2025/09/logo-ayurveda-alliance.webp?fit=286%2C269&ssl=1" 
                alt="Logo" 
                className="h-16 w-auto brightness-0 invert" 
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Empowering individuals through ancient wisdom and modern wellness practices. Join our global community today.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Youtube} href="#" />
            </div>
          </div>

          {/* Column 2: Solutions & Programs (Matches Header) */}
          <div>
            <h4 className="text-[#ff9933] font-bold uppercase tracking-widest text-[11px] mb-8 border-b border-white/10 pb-2 inline-block">Solutions</h4>
            <ul className="space-y-4 text-[13px] text-white/70">
              <FooterLink to="/solutions/stress">Stress Management</FooterLink>
              <FooterLink to="/solutions/health">Health & Wellness</FooterLink>
              <FooterLink to="/solutions/anxiety">Anxiety & Depression</FooterLink>
              <FooterLink to="/meditation/sahaj">Sahaj Samadhi Meditation</FooterLink>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Matches Header) */}
          <div>
            <h4 className="text-[#ff9933] font-bold uppercase tracking-widest text-[11px] mb-8 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-[13px] text-white/70">
              <FooterLink to="/yoga/sri-sri">Sri Sri Yoga</FooterLink>
              <FooterLink to="/wisdom/sheets">Knowledge Sheets</FooterLink>
              <FooterLink to="/events">Upcoming Events</FooterLink>
              <FooterLink to="/social-impact">Social Impact</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div>
            <h4 className="text-[#ff9933] font-bold uppercase tracking-widest text-[11px] mb-8 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="space-y-6 text-[13px] text-white/70">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-[#ff9933] shrink-0 mt-1" />
                <span className="leading-relaxed">21st Kanakapura Road, Udayapura, Bangalore, India</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-[#ff9933] shrink-0" />
                <span>+91 80 67262626</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-[#ff9933] shrink-0" />
                <span>info@yogaAlliance.org</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="bg-[#1a1e20] py-8 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-white/30 uppercase tracking-[2px] font-medium text-center md:text-left leading-relaxed">
            <p>© {currentYear} PMRG Solution. All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-8 text-[11px] text-white/30 uppercase tracking-[2px] font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Reusable Sub-components ---

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="hover:text-[#ff9933] hover:translate-x-1 inline-block transition-all duration-300"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff9933] hover:text-white transition-all duration-500 text-white/40 border border-white/5"
  >
    <Icon size={18} />
  </a>
);

export default Footer;