export default function Footer() {
  const navLinks = [
    { label: "OUR PROGRAM", href: "#" },
    { label: "YOUR JOURNEY", href: "#" },
    { label: "RETREAT EXPERIENCE", href: "#" },
    { label: "WELLNESS GOALS", href: "#" },
    { label: "ABOUT AYURVEDA", href: "#" },
  ];

  const location = [
    "Br Bebengan Tangeb Abianbase",
    "Mengwi Badung 80351",
    "Bali, Indonesia",
  ];

  const contact = [
    { label: "Phone", value: "+62 361 900 6128", href: "tel:+623619006128" },
    { label: "WhatsApp", value: "+62 819-1622-1559", href: "https://wa.me/6281916221559" },
    {
      label: "Email",
      value: "rejuvenation@sukhavatibali.com",
      href: "mailto:rejuvenation@sukhavatibali.com",
    },
  ];

  const social = [
    { label: "Trip Advisor", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        :root {
          --body-font-family: 'Cormorant Garamond', 'Georgia', serif;
          --footer-bg: #eae6dd;
          --footer-text: #7d8775;
          --footer-heading: #666e5e;
          --footer-divider: #cbc7bc;
          --footer-link-hover: #3d4a3e;
        }

        footer a,
        footer .unlinked {
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: var(--body-font-family);
          text-decoration: none;
          color: var(--footer-text);
          transition: color 0.18s ease;
        }

        footer a:hover {
          color: var(--footer-link-hover);
        }

        .f-divider {
          height: 1px;
          background-color: var(--footer-divider);
          margin: 0 32px;
        }

        /* ── 3-column info grid ── */
        .f-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .f-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 36px 20px;
          border-bottom: 1px solid var(--footer-divider);
        }

        .f-col:last-child {
          border-bottom: none;
        }

        @media (min-width: 640px) {
          .f-info-grid {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 32px;
          }
          .f-col {
            border-bottom: none;
            border-right: 1px solid var(--footer-divider);
            padding: 48px 36px;
          }
          .f-col:last-child {
            border-right: none;
          }
        }

        .f-col-heading {
          font-family: var(--body-font-family);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: var(--footer-heading);
          margin-bottom: 18px;
        }

        .f-col-text {
          font-family: var(--body-font-family);
          font-size: 14px;
          font-weight: 400;
          color: var(--footer-text);
          line-height: 2.1;
          margin: 0;
        }

        .f-nav-link {
          font-family: var(--body-font-family);
          font-size: 11.5px;
          letter-spacing: 0.16em;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .f-nav-link:hover {
          color: var(--footer-link-hover);
        }
      `}</style>

      <footer style={{ backgroundColor: "var(--footer-bg)", fontFamily: "var(--body-font-family)" }}>

        {/* ── Logo + Brand Block ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "56px 24px 40px" }}>

          {/* Leaf icon */}
          <svg
            width="56"
            height="66"
            viewBox="0 0 56 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: "22px" }}
          >
            <g opacity="0.70">
              <line x1="28" y1="62" x2="28" y2="5" stroke="#8e9885" strokeWidth="1" />
              <path d="M28 49 C21 43,11 35,15 21 C17 14,25 12,28 16" fill="#8e9885" opacity="0.44" />
              <path d="M28 41 C19 37, 9 27,13 15 C15 9,24 8,28 12" fill="#8e9885" opacity="0.50" />
              <path d="M28 33 C21 29,13 19,17 9 C19 3,26 2,28 6" fill="#8e9885" opacity="0.56" />
              <path d="M28 49 C35 43,45 35,41 21 C39 14,31 12,28 16" fill="#8e9885" opacity="0.44" />
              <path d="M28 41 C37 37,47 27,43 15 C41 9,32 8,28 12" fill="#8e9885" opacity="0.50" />
              <path d="M28 33 C35 29,43 19,39 9 C37 3,30 2,28 6" fill="#8e9885" opacity="0.56" />
              <path d="M28 62 C26 57,25 52,28 49 C31 52,30 57,28 62Z" fill="#8e9885" opacity="0.55" />
            </g>
          </svg>

          {/* SUKHAVATI wordmark */}
          <div
            style={{
              fontFamily: "var(--body-font-family)",
              fontWeight: 300,
              letterSpacing: "0.35em",
              color: "var(--footer-heading)",
              fontSize: "clamp(24px, 4vw, 40px)",
              marginBottom: "14px",
            }}
          >
             AYURVEDA
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: "var(--body-font-family)",
              fontWeight: 400,
              letterSpacing: "0.28em",
              color: "var(--footer-text)",
              fontSize: "clamp(9px, 1.1vw, 12px)",
            }}
          >
            AYURVEDA &nbsp;&nbsp;&nbsp; WELLNESS &nbsp;&nbsp;&nbsp; RETREAT
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="f-divider" />

        {/* ── Navigation row ── */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px 28px",
            padding: "26px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="f-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Divider ── */}
        <div className="f-divider" />

        {/* ── 3-column: Location / Contact / Follow ── */}
        <div className="f-info-grid">

          {/* Location */}
          <div className="f-col">
            <p className="f-col-heading">LOCATION</p>
            {location.map((line) => (
              <p key={line} className="f-col-text">{line}</p>
            ))}
          </div>

          {/* Contact */}
          <div className="f-col">
            <p className="f-col-heading">CONTACT</p>
            {contact.map((item) => (
              <p key={item.label} className="f-col-text">
                {item.label}:{" "}
                <a href={item.href} style={{ fontSize: "14px", color: "var(--footer-text)" }}>
                  {item.value}
                </a>
              </p>
            ))}
          </div>

          {/* Follow Us */}
          <div className="f-col">
            <p className="f-col-heading">FOLLOW US</p>
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="f-col-text"
                style={{ display: "block", textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Copyright ── */}
        <p
          style={{
            fontFamily: "var(--body-font-family)",
            fontSize: "13px",
            color: "var(--footer-text)",
            letterSpacing: "0.02em",
            textAlign: "center",
            padding: "0 16px 32px",
          }}
        >
          © 2026 –  Ayurvedic Wellness Retreat Bali. All Rights Reserved.
        </p>

      </footer>
    </>
  );
}