import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
      <div>
        <Link href="/mission">Mission</Link>
        <Link href="/team">Team</Link>
        <Link href="/alumni">Alumni</Link>
      </div>
      <Link href="/">Contact</Link>
    </header>
  );
}
