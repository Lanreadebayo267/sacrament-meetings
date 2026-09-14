import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavLinks />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </div>
    </div>
  );
}