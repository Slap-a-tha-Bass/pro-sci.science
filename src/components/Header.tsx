'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <Link className="logo" href="/">
        <Image
          src="/pro-sci-logo.svg"
          alt="logo"
          priority
          width={200}
          height={100}
        />
      </Link>
      <div className="web-menu">
        <Link href="/mission">Mission</Link>
        <Link href="/team">Team</Link>
        <Link href="/alumni">Alumni</Link>
        <Link href="/">Contact</Link>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button"
      />
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button2"
      />
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setIsMenuOpen(false)} href="/mission">
            Mission
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/team">
            Team
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/alumni">
            Alumni
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
