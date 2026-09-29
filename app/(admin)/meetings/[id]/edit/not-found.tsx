import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h1>Meeting not found</h1>
      <p>We couldn&apos;t find a meeting with that ID. It may have been deleted.</p>
      <Link href="/meetings">Back to meetings</Link>
    </main>
  );
}