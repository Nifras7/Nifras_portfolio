import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ReplicaNavbarProps {
  onOpenContact?: () => void;
  onSelectNav?: (item: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

// Order sections appear on the page (Contact opens a modal, so it is not tracked)
const TRACKED = ['home', 'work', 'experience', 'skills'];
const LABEL_BY_ID: Record<string, string> = {
  home: 'Home',
  work: 'Work',
  experience: 'Experience',
  skills: 'Skills',
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ReplicaNavbar: React.FC<ReplicaNavbarProps> = ({
  onOpenContact,
  onSelectNav,
}) => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [shortDate, setShortDate] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');
  const [stuck, setStuck] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(
    () => document.documentElement.getAttribute('data-mode') === 'dark'
  );

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      setTime(`${hours}:${minutes}${ampm}`);
      setDate(`${now.getDate()} ${MONTHS[now.getMonth()]}, ${now.getFullYear()}`);
      setShortDate(`${now.getDate()} ${SHORT_MONTHS[now.getMonth()]}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Frosted header once the page has scrolled
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const id of TRACKED) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActiveSection(LABEL_BY_ID[current]);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    if (bg) {
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
    }
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  const handleNavClick = (label: string, id: string) => {
    if (label === 'Contact') {
      onOpenContact?.();
      return;
    }
    setActiveSection(label);
    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    onSelectNav?.(label);
  };

  return (
    <header className={`hdr rv${stuck ? ' stuck' : ''}`}>
      <div className="shell hdr__in">
        <nav aria-label="Primary">
          <ul className="nav">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.label, item.id)}
                  aria-current={activeSection === item.label ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hdr__right">
          <div className="chip clock" role="timer" aria-label="Local time">
            <span className="clock__lbl">Local time</span>
            <span className="clock__time">{time}</span>
            <span className="clock__sep" aria-hidden="true">•</span>
            <span className="clock__date">{date}</span>
            <span className="clock__ds">{shortDate}</span>
          </div>

          <button
            className="chip theme-btn"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>

          <button
            className="chip menu-btn"
            id="menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="word">Menu</span>
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-panel" id="mobile-menu">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              aria-current={activeSection === item.label ? 'page' : undefined}
              onClick={() => {
                setMenuOpen(false);
                handleNavClick(item.label, item.id);
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
