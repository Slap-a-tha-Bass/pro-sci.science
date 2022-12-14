'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Aside() {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    s.setAttribute('async', 'true');
    document.head.appendChild(s);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <aside
      className={
        pathname === '/' || pathname === '/gallery' ? 'home-content' : ''
      }
    >
      {isLoaded && (
        <Link
          className="twitter-timeline twitter-card"
          href="https://twitter.com/DrYararFisher?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </aside>
  );
}
