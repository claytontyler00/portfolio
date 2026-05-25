"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const is = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="nav">
      <Link href="/" className="wordmark">
        Clayton <span className="italic-serif">Tyler</span>
      </Link>
      <nav aria-label="Primary">
        <ul>
          <li>
            <Link href="/#work" aria-current={pathname === "/" ? "page" : undefined}>
              work
            </Link>
          </li>
          <li>
            <Link href="/about" aria-current={is("/about") ? "page" : undefined}>
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
