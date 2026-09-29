import type { State } from '@/lib/actions';

type FieldConfig = {
  name: string;
  label: string;
  type?: 'text' | 'date' | 'textarea';
  required?: boolean;
  hint?: string;
};

const FIELDS: FieldConfig[] = [
  { name: 'date', label: 'Meeting date', type: 'date', required: true },
  { name: 'meetingType', label: 'Meeting type', required: true },
  { name: 'presiding', label: 'Presiding', required: true },
  { name: 'conducting', label: 'Conducting', required: true },
  { name: 'announcements', label: 'Announcements', type: 'textarea' },
  { name: 'openingHymn', label: 'Opening hymn', required: true },
  { name: 'openingPrayer', label: 'Opening prayer' },
  { name: 'wardBusiness', label: 'Ward business', type: 'textarea' },
  { name: 'stakeBusiness', label: 'Stake business', type: 'textarea' },
  { name: 'sacramentHymn', label: 'Sacrament hymn', required: true },
  { name: 'speakers', label: 'Speakers', type: 'textarea', hint: 'One speaker per line.' },
  { name: 'closingHymn', label: 'Closing hymn', required: true },
  { name: 'closingPrayer', label: 'Closing prayer' },
];

export default function MeetingFields({
  state,
  defaults,
}: {
  state: State;
  defaults?: Record<string, string>;
}) {
  return (
    <>
      {FIELDS.map((f) => {
        const value = state.values?.[f.name] ?? defaults?.[f.name] ?? '';
        const errors = state.errors[f.name];
        const errorId = `${f.name}-error`;
        const hintId = `${f.name}-hint`;
        const describedBy = [f.hint ? hintId : null, errorId].filter(Boolean).join(' ');

        return (
          <div key={f.name}>
            <label htmlFor={f.name}>
              {f.label}
              {f.required && <span aria-hidden="true"> *</span>}
            </label>
            {f.hint && <p id={hintId}>{f.hint}</p>}
            {f.type === 'textarea' ? (
              <textarea
                id={f.name}
                name={f.name}
                defaultValue={value}
                rows={3}
                aria-describedby={describedBy}
                aria-invalid={errors ? true : undefined}
              />
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? 'text'}
                defaultValue={value}
                aria-required={f.required}
                aria-describedby={describedBy}
                aria-invalid={errors ? true : undefined}
              />
            )}
            <div id={errorId} aria-live="polite">
              {errors?.map((e) => (
                <p key={e} className="text-red-700">
                  {e}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}