'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main role="alert">
      <h1>Something went wrong</h1>
      <p>We hit a problem with that request. Please try again.</p>
      <button onClick={() => reset()}>Try Again</button>
      <Link href="/meetings">Back to meetings</Link>
    </main>
  );
}