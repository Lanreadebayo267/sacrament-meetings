import MeetingCard from '@/components/MeetingCard';
import { getMeetings } from '@/lib/meetings-db';

export default function MeetingsPage() {
  const meetings = getMeetings();

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