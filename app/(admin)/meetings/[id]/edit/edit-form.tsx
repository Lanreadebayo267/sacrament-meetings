'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { updateMeeting, type State } from '@/lib/actions';
import MeetingFields from '@/app/(admin)/meetings/meeting-fields';

const initialState: State = { message: null, errors: {} };

export default function EditForm({
  id,
  defaults,
}: {
  id: number;
  defaults: Record<string, string>;
}) {
  const [state, formAction, isPending] = useActionState(
    updateMeeting.bind(null, id),
    initialState,
  );

  return (
    <form action={formAction} noValidate>
      <MeetingFields state={state} defaults={defaults} />
      <div aria-live="polite">{state.message && <p>{state.message}</p>}</div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving…' : 'Save changes'}
      </button>
      <Link href="/meetings">Cancel</Link>
    </form>
  );
}