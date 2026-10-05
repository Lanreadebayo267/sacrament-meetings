import MeetingCard from '@/components/MeetingCard';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sacrament Meetings',
  description:
    'View upcoming and past sacrament meeting programs for Alakuko Ward.',
  openGraph: {
    title: 'Sacrament Meetings | Sacrament Meeting Planner',
    description:
      'View upcoming and past sacrament meeting programs for Alakuko Ward.',
    images: [
      {
        url: '/lds-church.jpg',
        width: 800,
        height: 600,
        alt: 'Sacrament meeting chapel interior',
      },
    ],
  },
};

export const dynamic = 'force-dynamic';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Sacrament Meetings
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          All Meetings
        </h1>

        <p className="mt-3 text-slate-600">
          View and review scheduled sacrament meeting programs.
        </p>
      </div>

      <div className="mb-6">
        <MeetingSearch />
      </div>

      <div className="grid gap-6">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </section>
  );
}