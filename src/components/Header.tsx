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
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/alumni">Alumni</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={isMenuOpen ? 'mobile-menu-active' : 'mobile-menu-inactive'}
      /> */}
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="circle" />
      <Image
        src="/favicon-white-transbg.png"
        alt="menu"
        width={50}
        height={50}
        className="header-image"
      />
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link
            className="navlink"
            onClick={() => setIsMenuOpen(false)}
            href="/about"
          >
            About
          </Link>
          <Link
            className="navlink"
            onClick={() => setIsMenuOpen(false)}
            href="/team"
          >
            Team
          </Link>
          <Link
            className="navlink"
            onClick={() => setIsMenuOpen(false)}
            href="/alumni"
          >
            Alumni
          </Link>
          <Link
            className="navlink"
            onClick={() => setIsMenuOpen(false)}
            href="/"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
