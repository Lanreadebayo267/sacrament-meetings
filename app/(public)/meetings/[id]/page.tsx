import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeetingById(id: number): Promise<SacramentMeeting | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch meeting');
  }

  return res.json();
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}