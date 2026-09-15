import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: [
      'Ward temple night: May 10',
      'Youth activity: May 13',
    ],
    openingHymn: {
      number: 2,
      title: 'The Spirit of God',
    },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      {
        description: 'Sustaining of new Primary president',
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'In Remembrance of Thy Suffering',
    },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Youth Choir',
        topic: 'I Am a Child of God',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 31,
      title: 'O God, Our Help in Ages Past',
    },
    closingPrayer: 'Brother Davis',
  },

  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Sister Johnson',
    announcements: [
      'Stake youth conference registration is open.',
    ],
    openingHymn: {
      number: 81,
      title: 'Press Forward, Saints',
    },
    openingPrayer: 'Brother Carter',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now',
    },
    speakers: [],
    closingHymn: {
      number: 270,
      title: 'I’ll Go Where You Want Me to Go',
    },
    closingPrayer: 'Sister Adams',
  },

  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'President Wilson',
    conducting: 'Brother Thomas',
    announcements: [
      'Relief Society activity this Thursday.',
    ],
    openingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    openingPrayer: 'Sister Taylor',
    wardBusiness: [
      {
        description: 'Sustaining of new Young Women leaders',
      },
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 193,
      title: 'I Stand All Amazed',
    },
    speakers: [
      {
        name: 'Brother Anderson',
        topic: 'Following the Savior',
        type: 'speaker',
      },
      {
        name: 'Sister Clark',
        topic: 'Serving Others',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 219,
      title: 'Because I Have Been Given Much',
    },
    closingPrayer: 'Brother Miller',
  },

  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Davis',
    conducting: 'Brother Wilson',
    announcements: [
      'Stake conference will be held next month.',
    ],
    openingHymn: {
      number: 27,
      title: 'Praise to the Man',
    },
    openingPrayer: 'Sister Martin',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now',
    },
    speakers: [
      {
        name: 'President Davis',
        topic: 'Strengthening Families',
        type: 'speaker',
      },
    ],
    closingHymn: {
      number: 227,
      title: 'There Is Sunshine in My Soul Today',
    },
    closingPrayer: 'Brother Roberts',
  },

  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Sister Johnson',
    announcements: [
      'General meeting schedule available online.',
    ],
    openingHymn: {
      number: 3,
      title: 'Now We Sing with One Accord',
    },
    openingPrayer: 'Brother Harris',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: 'In Humility, Our Savior',
    },
    speakers: [
      {
        name: 'Sister Lewis',
        topic: 'The Savior’s Example',
        type: 'speaker',
      },
      {
        name: 'Ward Choir',
        topic: 'Come, Follow Me',
        type: 'musical-number',
      },
    ],
    closingHymn: {
      number: 85,
      title: 'How Firm a Foundation',
    },
    closingPrayer: 'Sister Young',
  },
];

export function getMeetings(
  date?: string | null,
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number,
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}