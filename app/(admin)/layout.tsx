import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignOutButton from '@/components/SignOutButton';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-sm text-slate-500">
            Signed in as
          </p>

          <p className="font-semibold text-slate-900">
            {session.user?.email}
          </p>
        </div>

        <SignOutButton />
      </div>

      {children}
    </div>
  );
}