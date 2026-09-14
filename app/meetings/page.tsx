import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/api/meetings`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch meetings.');
  }

  return response.json() as Promise<SacramentMeeting[]>;
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

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

      <div className="grid gap-6">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </section>
  );
}