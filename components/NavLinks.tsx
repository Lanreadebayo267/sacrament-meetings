'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinksProps {
  currentMeetingId?: number | null;
}

export default function NavLinks({ currentMeetingId }: NavLinksProps) {
  const pathname = usePathname();

  const isAllMeetingsActive =
    pathname === '/meetings' ||
    (pathname.startsWith('/meetings/') &&
      pathname !== `/meetings/${currentMeetingId}`);

  const isCurrentMeetingActive =
    currentMeetingId != null && pathname === `/meetings/${currentMeetingId}`;

  const links = [
    { href: '/meetings', label: 'All Meetings', isActive: isAllMeetingsActive },
    { href: '/meetings/current', label: 'Current Meeting', isActive: isCurrentMeetingActive },
  ];

  return (
    <nav
      aria-label="Meeting navigation"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto flex max-w-6xl gap-2 px-6 py-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              link.isActive
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}