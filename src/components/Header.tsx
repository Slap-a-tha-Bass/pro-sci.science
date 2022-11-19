import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">Logo</Link>
      <div>
        <Link href="/mission">Mission</Link>
        <Link href="/team">Team</Link>
      </div>
      <Link href="/">Contact</Link>
    </header>
  );
}
