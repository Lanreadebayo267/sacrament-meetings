'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    href: '/meetings',
    label: 'All Meetings',
  },
  {
    href: '/meetings/current',
    label: 'Current Meeting',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Meeting navigation"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto flex max-w-6xl gap-2 px-6 py-3">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}