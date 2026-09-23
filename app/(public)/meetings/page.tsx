import MeetingCard from '@/components/MeetingCard';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';
import type { SacramentMeeting } from '@/lib/types';

async function getMeetings(
  query: string,
  page: number,
): Promise<SacramentMeeting[]> {
  const params = new URLSearchParams({ query, page: String(page) });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings?${params.toString()}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch meetings');
  }

  return res.json();
}

async function getMeetingsTotalPages(query: string): Promise<number> {
  const params = new URLSearchParams({ query, totalPages: 'true' });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings?${params.toString()}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch total pages');
  }

  const data = await res.json();
  return data.totalPages as number;
}

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