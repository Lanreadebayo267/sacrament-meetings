export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Authentication scaffolded in Week 05 */}
      {children}
    </div>
  );
}