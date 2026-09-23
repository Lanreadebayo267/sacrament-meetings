import NavLinks from '@/components/NavLinks';
import { getMeetingByDate } from '@/lib/meetings-db';

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split('T')[0];
}

async function getCurrentMeetingId(): Promise<number | null> {
  const sunday = getMostRecentSunday();
  const meeting = await getMeetingByDate(sunday);
  return meeting?.id ?? null;
}

export default async function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentMeetingId = await getCurrentMeetingId();

  return (
    <div>
      <NavLinks currentMeetingId={currentMeetingId} />
      <div className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </div>
    </div>
  );
}