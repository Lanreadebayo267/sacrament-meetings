import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(
  id: string,
): Promise<SacramentMeeting> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/api/meetings/${id}`,
    {
      cache: 'no-store',
    },
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to fetch meeting.');
  }

  return response.json() as Promise<SacramentMeeting>;
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  return <MeetingDetail meeting={meeting} />;
}