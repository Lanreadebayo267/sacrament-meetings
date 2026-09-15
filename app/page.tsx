import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Alakuko Ward
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Sacrament Meeting Planner
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Plan, manage, and review sacrament meeting programs
              in one simple place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/meetings"
                className="rounded-md bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View all meetings
              </Link>

              <Link
                href="/meetings/current"
                className="rounded-md border border-slate-500 px-5 py-3 font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Current meeting
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/lds-church.jpg"
              alt="Sacrament meeting chapel interior"
              width={800}
              height={600}
              className="rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Plan with confidence
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Keep announcements, hymns, prayers, speakers, musical
            numbers, and meeting leadership organized and easy to
            review.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Meeting Programs
            </h3>
            <p className="mt-2 text-slate-600">
              View complete agendas for current and past meetings.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Organized Details
            </h3>
            <p className="mt-2 text-slate-600">
              Keep hymns, prayers, speakers, and ward business in
              one organized program.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Easy Navigation
            </h3>
            <p className="mt-2 text-slate-600">
              Quickly move between all meetings and the current
              meeting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}