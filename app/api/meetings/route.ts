import { NextResponse } from 'next/server';
import { getMeetings, getMeetingByDate } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  // Backward-compatible path: exact-date lookup used by the
  // "current meeting" redirect and nav active-state logic.
  if (date) {
    const meeting = await getMeetingByDate(date);
    return NextResponse.json(meeting ? [meeting] : []);
  }

  const query = searchParams.get('query') ?? '';
  const page = Number(searchParams.get('page')) || 1;

  const meetings = await getMeetings(query, page);
  return NextResponse.json(meetings);
}