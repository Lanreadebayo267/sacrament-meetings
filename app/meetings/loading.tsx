export default function Loading() {
  return (
    <div
      className="flex min-h-[300px] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />
        <p className="mt-4 text-sm text-slate-600">
          Loading meetings...
        </p>
      </div>
    </div>
  );
}