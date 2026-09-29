'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createMeeting, type State } from '@/lib/actions';
import MeetingFields from '@/app/(admin)/meetings/meeting-fields';

const initialState: State = { message: null, errors: {} };

export default function CreateForm() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <form action={formAction} noValidate>
      <MeetingFields state={state} />
      <div aria-live="polite">{state.message && <p>{state.message}</p>}</div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving…' : 'Create meeting'}
      </button>
      <Link href="/meetings">Cancel</Link>
    </form>
  );
}