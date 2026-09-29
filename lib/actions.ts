'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  addMeeting,
  updateMeeting as updateMeetingRecord,
  deleteMeeting as deleteMeetingRecord,
} from '@/lib/meetings-db';

const required = (label: string) =>
  z.string().trim().min(1, `${label} is required.`);
const optional = z.string().trim().default('');

const MeetingFormSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please choose a valid date.'),
  meetingType: required('Meeting type'),
  presiding: required('Presiding'),
  conducting: required('Conducting'),
  announcements: optional,
  openingHymn: required('Opening hymn'),
  openingPrayer: optional,
  wardBusiness: optional,
  stakeBusiness: optional,
  sacramentHymn: required('Sacrament hymn'),
  speakers: z.string().default(''),
  closingHymn: required('Closing hymn'),
  closingPrayer: optional,
});

export type State = {
  message: string | null;
  errors: Record<string, string[] | undefined>;
  values?: Record<string, string>;
};

function rawValues(formData: FormData) {
  const values: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') values[key] = value;
  }
  return values;
}

function validate(formData: FormData) {
  const values = rawValues(formData);
  const parsed = MeetingFormSchema.safeParse(values);
  if (!parsed.success) {
    return {
      error: {
        message: 'Please fix the errors below.',
        errors: parsed.error.flatten().fieldErrors as State['errors'],
        values,
      } satisfies State,
    };
  }
  const { speakers, ...rest } = parsed.data;
  return {
    data: {
      ...rest,
      speakers: speakers
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
    },
  };
}

export async function createMeeting(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const result = validate(formData);
  if (result.error) return result.error;

  try {
    await addMeeting(result.data);
  } catch (err) {
    console.error('createMeeting failed:', err);
    throw new Error('Could not create the meeting. Please try again.');
  }

  revalidatePath('/meetings');
  redirect('/meetings'); // must stay outside try/catch
}

export async function updateMeeting(
  id: number,
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const result = validate(formData);
  if (result.error) return result.error;

  let updated: boolean;
  try {
    updated = await updateMeetingRecord(id, result.data);
  } catch (err) {
    console.error('updateMeeting failed:', err);
    throw new Error('Could not update the meeting. Please try again.');
  }

  if (!updated) {
    return {
      message: 'That meeting no longer exists.',
      errors: {},
      values: rawValues(formData),
    };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function deleteMeeting(id: number): Promise<void> {
  try {
    await deleteMeetingRecord(id);
  } catch (err) {
    console.error('deleteMeeting failed:', err);
    throw new Error('Could not delete the meeting. Please try again.');
  }
  revalidatePath('/meetings');
}