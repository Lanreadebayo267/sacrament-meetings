import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

async function login(formData: FormData) {
  'use server';

  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/meetings/new',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect('/login?error=InvalidCredentials');
    }

    throw error;
  }
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Bishopric Login
        </h1>

        <p className="mt-2 text-slate-600">
          Sign in to manage sacrament meeting programs.
        </p>

        {params.error && (
          <div className="mt-6 rounded-md bg-red-50 p-4 text-sm text-red-700">
            Invalid email or password. Please try again.
          </div>
        )}

        <form action={login} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}