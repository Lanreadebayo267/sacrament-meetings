import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

function MeetingSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 py-6">
      <h2 className="mb-3 text-lg font-bold text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  const formattedDate = new Date(
    `${meeting.date}T00:00:00`,
  ).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="bg-slate-900 px-6 py-8 text-white sm:px-8">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-300">
          {meeting.meetingType} meeting
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Sacrament Meeting
        </h1>

        <p className="mt-2 text-slate-300">
          {formattedDate}
        </p>
      </header>

      <div className="px-6 sm:px-8">
        <MeetingSection title="Meeting Leadership">
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-slate-700">
                Presiding
              </dt>
              <dd className="text-slate-600">
                {meeting.presiding}
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-slate-700">
                Conducting
              </dt>
              <dd className="text-slate-600">
                {meeting.conducting}
              </dd>
            </div>
          </dl>
        </MeetingSection>

        <MeetingSection title="Announcements">
          {meeting.announcements &&
          meeting.announcements.length > 0 ? (
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              {meeting.announcements.map((announcement) => (
                <li key={announcement}>{announcement}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">
              No announcements.
            </p>
          )}
        </MeetingSection>

        <MeetingSection title="Opening">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-700">
                Opening Hymn
              </p>
              <p className="text-slate-600">
                #{meeting.openingHymn.number} —{' '}
                {meeting.openingHymn.title}
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-700">
                Opening Prayer
              </p>
              <p className="text-slate-600">
                {meeting.openingPrayer}
              </p>
            </div>
          </div>
        </MeetingSection>

        <MeetingSection title="Ward Business">
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              {meeting.wardBusiness.map((item) => (
                <li key={item.description}>
                  {item.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">
              No ward business.
            </p>
          )}

          <p className="mt-4 text-sm text-slate-600">
            <span className="font-semibold">
              Stake Business:
            </span>{' '}
            {meeting.stakeBusiness ? 'Yes' : 'No'}
          </p>
        </MeetingSection>

        <MeetingSection title="Sacrament">
          <p className="text-slate-600">
            #{meeting.sacramentHymn.number} —{' '}
            {meeting.sacramentHymn.title}
          </p>
        </MeetingSection>

        <MeetingSection title="Speakers and Musical Numbers">
          {meeting.speakers.length > 0 ? (
            <div className="space-y-4">
              {meeting.speakers.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="rounded-lg bg-slate-50 p-4"
                >
                  <p className="font-semibold text-slate-800">
                    {item.type === 'speaker'
                      ? 'Speaker'
                      : 'Musical Number'}
                  </p>

                  <p className="mt-1 text-slate-700">
                    {item.name}
                  </p>

                  {item.topic && (
                    <p className="mt-1 text-sm text-slate-500">
                      {item.topic}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              No speakers or musical numbers listed.
            </p>
          )}
        </MeetingSection>

        <MeetingSection title="Closing">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-slate-700">
                Closing Hymn
              </p>
              <p className="text-slate-600">
                #{meeting.closingHymn.number} —{' '}
                {meeting.closingHymn.title}
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-700">
                Closing Prayer
              </p>
              <p className="text-slate-600">
                {meeting.closingPrayer}
              </p>
            </div>
          </div>
        </MeetingSection>
      </div>
    </article>
  );
}