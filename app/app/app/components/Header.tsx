"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.png" alt="MejaCreations logo" className="logo" />
          <div className="brand-text">
            <a href="/" className="domain">MejaCreations.com</a>
            <div className="owner">Mirela Meja Kovačević</div>
            <div className="title">Virtual Assistant &amp; Visual Creator &amp; Writer</div>
          </div>
        </div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#o-meni">O meni</a>
          <a href="#sto-radim">Što radim</a>
          <a href="#blog">Blog i savjeti</a>
          <a href="#galerija">Galerija</a>
          <a href="#shop">Shop</a>
          <a href="#vise">Više</a>
        </nav>

        <div className="right">
          <div className="socials">
            <a aria-label="Facebook" href="#" className="icon" title="Facebook">
              <svg viewBox="0 0 24 24"><path d="M13 22v-9h3l1-4h-4V7a2 2 0 0 1 2-2h2V1h-3a5 5 0 0 0-5 5v3H6v4h3v9h4z"/></svg>
            </a>
            <a aria-label="Twitter/X" href="#" className="icon" title="Twitter">
              <svg viewBox="0 0 24 24"><path d="M3 3l7.5 9.2L3 21h4.2L12 13.6 16.8 21H21l-7.5-8.8L21 3h-4.2L12 10.4 7.2 3H3z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="icon" title="Instagram">
              <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
            </a>
            <a aria-label="Pinterest" href="#" className="icon" title="Pinterest">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 .1-2.9.2-.8 1.3-5.3 1.3-5.3s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.6-.9 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.3 0-5.2 2.5-5.2 5.1 0 1 .4 2.1 1 2.7.1.1.1.2.1.3-.1.4-.3 1.2-.4 1.4-.1.2-.2.2-.5.1-1.4-.7-2.3-2.8-2.3-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.3l-.7 2.6c-.2.9-.8 2-1.1 2.7A10 10 0 1 0 12 2z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="icon" title="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.3 2.5-2.7 5.2-2.7 5.5 0 6.5 3.6 6.5 8.3V24h-5V16c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.2V24H7V8z"/></svg>
            </a>
          </div>

          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
