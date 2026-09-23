import { redirect } from 'next/navigation';
import { getMeetingByDate } from '@/lib/meetings-db';

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);
  return sunday.toISOString().split('T')[0];
}

export default async function CurrentMeetingPage() {
  const sunday = getMostRecentSunday();
  const meeting = await getMeetingByDate(sunday);

  if (!meeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meeting.id}`);
}