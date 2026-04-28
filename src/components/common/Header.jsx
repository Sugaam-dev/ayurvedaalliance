import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="flex items-center gap-3 flex-shrink-0">
    {/* Lotus SVG logo inspired by the Ayurveda aesthetic */}
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="21" stroke="#5C6B5E" strokeWidth="1.2" />
      {/* Leaf */}
      <path
        d="M22 8 C18 12, 14 17, 15 22 C16 27, 20 28, 22 26 C24 28, 28 27, 29 22 C30 17, 26 12, 22 8Z"
        fill="#5C6B5E"
        opacity="0.85"
      />
      <path
        d="M22 8 L22 26"
        stroke="#f0ede6"
        strokeWidth="0.8"
      />
      {/* Small petal details */}
      <path
        d="M15 22 C17 19, 20 18, 22 20"
        stroke="#f0ede6"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d="M29 22 C27 19, 24 18, 22 20"
        stroke="#f0ede6"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>

    <div className="leading-none">
      <div
        className="text-[#3d4a3e] tracking-[0.25em] text-lg font-semibold"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", letterSpacing: "0.22em" }}
      >
        AYURVEDA
      </div>
      <div
        className="text-[#7a8c7b] tracking-[0.3em] text-[9px] mt-0.5"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        AYURVEDA &nbsp;·&nbsp; WELLNESS &nbsp;·&nbsp; RETREAT
      </div>
    </div>
  </div>
);

const navItems = [
   {
    label: "About Us",
    children: [
      { label: "Our Story", link: "about/ourstory" },
      { label: "Our Program", link: "about/ourprogram" },
      { label: "Our Team", link: "about/ourteam" },
      { label: "Our Treatments", link: "about/ourtreatments" },
      { label: "Our Villas", link: "about/stay" },
      { label: "Other Services", link: "about/otherservices" },
    ],
  },
 {
    label: "Your Journey",
    children: [
      { label: "Your Stay", link: "/stay" },
      { label: "Retreat Experience", link: "/retreat" },
      { label: "Daily Schedule", link: "/schedule" },
      { label: "Wellness Goals", link: "/goals" },
      { label: "Pricing", link: "/pricing" },
    ],
  },
  {
    label: "Your Wellness Goals",
    children: [
      { label: "Detox", link: "/detox" },
      { label: "Stress Relief", link: "/stress" },
      { label: "Weight Loss", link: "/weight-loss" },
    ],
  },
 {
    label: "Ayurveda",
    children: [
      { label: "What is Ayurveda?", link: "/ayurveda" },
      { label: "Panchakarma", link: "/panchakarma" },
      { label: "Benefits", link: "/benefits" },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
    children: [],
  },
];

const DropdownMenu = ({ items, isOpen }) => (
  <div
    className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 z-50 transition-all duration-200 ${
      isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
    }`}
    style={{ minWidth: "210px" }}
  >
    <div className="bg-[#f5f2eb] shadow-lg py-3">
      {items.map((item) => (
  <Link
    key={item.label}
    to={item.link}
    className="block px-6 py-2.5 text-[#4a5a4b] hover:text-[#2e3d2f] hover:bg-[#ede8df] transition-colors duration-150 text-sm"
    style={{
      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      fontSize: "15px",
      letterSpacing: "0.01em",
    }}
  >
    {item.label}
  </Link>
))}
    </div>
  </div>
);

const MobileAccordion = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-[#d8d2c4]">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-6 py-4 text-[#3d4a3e] hover:text-[#2e3d2f] transition-colors"
      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "16px", letterSpacing: "0.04em" }}
    >
      <span>{item.label}</span>
      {item.children.length > 0 && (
        <svg
          className={`w-4 h-4 text-[#7a8c7b] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </button>
    {item.children.length > 0 && isOpen && (
      <div className="bg-[#ede8df] pb-2">
       {item.children.map((child) => (
  <Link
    key={child.label}
    to={child.link}
    className="block px-10 py-2.5 text-[#5a6b5b] hover:text-[#2e3d2f] transition-colors"
    style={{
      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      fontSize: "15px",
    }}
    onClick={() => setMobileOpen(false)}
  >
    {child.label}
  </Link>
))}
      </div>
    )}
  </div>
);

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        :root {
          --body-font-family: 'Cormorant Garamond', 'Georgia', serif;
        }

        * { box-sizing: border-box; }

        header a,
        header .unlinked {
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: var(--body-font-family);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{ backgroundColor: "#f5f2eb" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Logo />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className={`px-3 xl:px-4 py-2 text-sm transition-colors duration-150 whitespace-nowrap block ${
                      activeMenu === item.label
                        ? "text-[#2e3d2f]"
                        : "text-[#4a5a4b] hover:text-[#2e3d2f]"
                    }`}
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontSize: "17.5px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </a>
                  {item.children.length > 0 && (
                    <DropdownMenu items={item.children} isOpen={activeMenu === item.label} />
                  )}
                </div>
              ))}
            </nav>

            {/* Book Now + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hidden sm:inline-block border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-[#f5f2eb] transition-colors duration-200 px-5 py-2 text-xs tracking-[0.18em] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", letterSpacing: "0.18em", fontSize: "13px" }}
              >
                BOOK NOW
              </a>

              {/* Hamburger (mobile/tablet) */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-px w-6 bg-[#3d4a3e] transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-[#3d4a3e] transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-[#3d4a3e] transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#f5f2eb", borderTop: "1px solid #d8d2c4" }}
        >
          <div className="pb-4">
            {navItems.map((item) => (
              <MobileAccordion
                key={item.label}
                item={item}
                isOpen={mobileAccordion === item.label}
                onToggle={() =>
                  setMobileAccordion(
                    mobileAccordion === item.label ? null : item.label
                  )
                }
              />
            ))}
            {/* Book Now for mobile */}
            <div className="px-6 pt-5 pb-2">
              <a
                href="#"
                className="block text-center border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-[#f5f2eb] transition-colors duration-200 px-5 py-3 text-xs tracking-[0.18em] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", letterSpacing: "0.18em", fontSize: "13px" }}
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-[72px] lg:h-[80px]" />
    </>
  );
}




// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// /* ================= LOGO ================= */
// const Logo = () => (
//   <div className="flex items-center gap-3 flex-shrink-0">
//     <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
//       <circle cx="22" cy="22" r="21" stroke="#e6dcc6" strokeWidth="1.2" />
//       <path
//         d="M22 8 C18 12, 14 17, 15 22 C16 27, 20 28, 22 26 C24 28, 28 27, 29 22 C30 17, 26 12, 22 8Z"
//         fill="#e6dcc6"
//         opacity="0.85"
//       />
//     </svg>

//     <div className="leading-none">
//       <div className="text-[#e6dcc6] tracking-[0.25em] text-lg font-semibold">
//         AYURVEDA
//       </div>
//       <div className="text-[#cfc7b2] tracking-[0.3em] text-[9px] mt-0.5">
//         AYURVEDA · WELLNESS · RETREAT
//       </div>
//     </div>
//   </div>
// );

// /* ================= NAV DATA ================= */
// const navItems = [
//   {
//     label: "About Sukhavati",
//     children: [
//       { label: "Our Story", link: "/about/ourstory" },
//       { label: "Our Program", link: "/about/ourprogram" },
//     ],
//   },
//   {
//     label: "Your Journey",
//     children: [
//       { label: "Your Stay", link: "/stay" },
//       { label: "Retreat Experience", link: "/retreat" },
//     ],
//   },
//   {
//     label: "Contact",
//     link: "/contact",
//     children: [],
//   },
// ];

// /* ================= DROPDOWN ================= */
// const DropdownMenu = ({ items, isOpen }) => (
//   <div
//     className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 transition-all duration-200 ${
//       isOpen
//         ? "opacity-100 pointer-events-auto"
//         : "opacity-0 pointer-events-none"
//     }`}
//   >
//     <div className="bg-[#2f3e34] shadow-lg py-3 min-w-[220px]">
//       {items.map((item) => (
//         <Link
//           key={item.label}
//           to={item.link}
//           className="block px-6 py-2 text-[#d6cfb8] hover:bg-[#3f4f42]"
//         >
//           {item.label}
//         </Link>
//       ))}
//     </div>
//   </div>
// );

// /* ================= MOBILE ================= */
// const MobileAccordion = ({ item, isOpen, onToggle, closeMenu }) => (
//   <div className="border-b border-[#5a4a3a]">
//     <button
//       onClick={onToggle}
//       className="flex justify-between w-full px-6 py-4 text-[#e6dcc6]"
//     >
//       {item.label}
//     </button>

//     {isOpen && item.children.length > 0 && (
//       <div className="bg-[#3f4f42]">
//         {item.children.map((child) => (
//           <Link
//             key={child.label}
//             to={child.link}
//             onClick={closeMenu}
//             className="block px-10 py-2 text-[#d6cfb8]"
//           >
//             {child.label}
//           </Link>
//         ))}
//       </div>
//     )}
//   </div>
// );

// /* ================= HEADER ================= */
// export default function Header() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileAccordion, setMobileAccordion] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleEnter = (label) => {
//     clearTimeout(timeoutRef.current);
//     setActiveMenu(label);
//   };

//   const handleLeave = () => {
//     timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "shadow-lg backdrop-blur-md" : ""
//         }`}
//         style={{
//           background: "linear-gradient(to right, #2f3e34, #5a3e2b)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-6">
          
//           {/* LOGO */}
//           <Link to="/">
//             <Logo />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex gap-6">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => handleEnter(item.label)}
//                 onMouseLeave={handleLeave}
//               >
//                 {item.link ? (
//                   <Link
//                     to={item.link}
//                     className="text-[#e6dcc6] hover:text-white"
//                   >
//                     {item.label}
//                   </Link>
//                 ) : (
//                   <span className="text-[#e6dcc6] cursor-pointer">
//                     {item.label}
//                   </span>
//                 )}

//                 {item.children.length > 0 && (
//                   <DropdownMenu
//                     items={item.children}
//                     isOpen={activeMenu === item.label}
//                   />
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-4">
//             <button className="hidden sm:block border border-[#e6dcc6] text-[#e6dcc6] px-5 py-2 text-xs tracking-[0.2em] hover:bg-[#e6dcc6] hover:text-[#2f3e34] transition">
//               BOOK NOW
//             </button>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="lg:hidden text-[#e6dcc6]"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               ☰
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         {mobileOpen && (
//           <div
//             className="lg:hidden"
//             style={{
//               background:
//                 "linear-gradient(to bottom, #2f3e34, #5a3e2b)",
//             }}
//           >
//             {navItems.map((item) => (
//               <MobileAccordion
//                 key={item.label}
//                 item={item}
//                 isOpen={mobileAccordion === item.label}
//                 onToggle={() =>
//                   setMobileAccordion(
//                     mobileAccordion === item.label ? null : item.label
//                   )
//                 }
//                 closeMenu={() => setMobileOpen(false)}
//               />
//             ))}
//           </div>
//         )}
//       </header>

//       {/* SPACER */}
//       <div className="h-[70px]" />
//     </>
//   );
// }