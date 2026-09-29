import { deleteMeeting } from '@/lib/actions';

export default function DeleteButton({ id, date }: { id: number; date: string }) {
  return (
    <form action={deleteMeeting.bind(null, id)}>
      <button type="submit" aria-label={`Delete meeting on ${date}`}>
        Delete
      </button>
    </form>
  );
}