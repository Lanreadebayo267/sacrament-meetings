import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditForm from './edit-form';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);
  if (!Number.isInteger(meetingId)) notFound();

  const meeting = await getMeetingById(meetingId);
  if (!meeting) notFound();

  const defaults = Object.fromEntries(
    Object.entries(meeting).map(([key, value]) => [
      key,
      Array.isArray(value) ? value.join('\n') : String(value ?? ''),
    ]),
  );

  return (
    <main>
      <h1>Edit meeting</h1>
      <EditForm id={meetingId} defaults={defaults} />
    </main>
  );
}