import React, { useState, useEffect } from 'react';

interface ReplicaNavbarProps {
  onOpenContact?: () => void;
  onSelectNav?: (item: string) => void;
}

export const ReplicaNavbar: React.FC<ReplicaNavbarProps> = ({
  onOpenContact,
  onSelectNav,
}) => {
  const [time, setTime] = useState<string>('10:27pm');
  const [date, setDate] = useState<string>('4 November, 2026');
  const [shortDate, setShortDate] = useState<string>('4 Nov');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      setTime(`${hours}:${minutes}${ampm}`);

      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setDate(`${day} ${month}, ${year}`);
      setShortDate(`${day} ${shortMonths[now.getMonth()]}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'main' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (label: string, id: string) => {
    setActiveSection(label);
    if (label === 'Contact') {
      if (onOpenContact) onOpenContact();
      return;
    }
    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onSelectNav) onSelectNav(label);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    if (onSelectNav) onSelectNav(label);
  };

  return (
    <header className="hdr rv" style={{ position: 'static', fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}>
      <div className="shell hdr__in">
        <nav aria-label="Primary">
          <ul className="nav" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.label, item.id)}
                  aria-current={activeSection === item.label ? 'page' : undefined}
                  style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}
                >
                  <span style={{ opacity: activeSection === item.label ? 1 : 0.75, fontWeight: activeSection === item.label ? 700 : 500, fontSize: '1.05rem', letterSpacing: '0.02em' }}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hdr__right">
          <div className="chip clock" aria-label="Local time" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}>
            <span className="clock__lbl" style={{ fontStyle: 'italic' }}>Local time</span>
            <span className="clock__time tnum" style={{ fontWeight: 700 }}>{time}</span>
            <span className="clock__sep" aria-hidden="true">•</span>
            <span className="clock__date" style={{ fontWeight: 600 }}>{date}</span>
            <span className="clock__ds">{shortDate}</span>
          </div>

          <button
            className="chip menu-btn"
            id="menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ minHeight: '44px', minWidth: '44px', fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}
          >
            <span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="word" style={{ fontWeight: 700, letterSpacing: '0.05em' }}>Menu</span>
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '1rem',
            right: '1rem',
            backgroundColor: 'var(--panel)',
            border: '1px solid var(--chip-line)',
            borderRadius: '1.25rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 16px 36px rgba(0,0,0,0.15)',
            zIndex: 60,
            fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif",
          }}
        >
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setMenuOpen(false);
                handleNavClick(item.label, item.id);
              }}
              style={{
                textAlign: 'left',
                fontSize: '1.25rem',
                fontWeight: 700,
                padding: '0.4rem 0',
                fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
