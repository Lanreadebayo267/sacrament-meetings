import Link from 'next/link';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Sacrament Meeting Planner
          </Link>
          <p className="mt-1 text-sm text-slate-500">
            Alakuko Ward
          </p>
        </div>

        <p className="hidden text-sm text-slate-600 sm:block">
          {currentDate}
        </p>
      </div>
    </header>
  );
}