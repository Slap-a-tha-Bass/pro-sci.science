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
      <div className="is-mobile">
        <Link href="/mission">Mission</Link>
        <Link href="/team">Team</Link>
        <Link href="/alumni">Alumni</Link>
      </div>
      <Link className="is-mobile" href="/">
        Contact
      </Link>
      <label className="menu-button" htmlFor="menu-toggle" />
      <input type="checkbox" id="menu-toggle" />
      <ul id="menu">
        <li>
          <Link className="navlink" href="/mission">
            Mission
          </Link>
        </li>
        <li>
          <Link className="navlink" href="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="navlink" href="/alumni">
            Alumni
          </Link>
        </li>
      </ul>
    </header>
  );
}
