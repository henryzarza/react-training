export const TABS_CONFIG = [
  {
    id: 'currencies',
    iconClass: 'icofont-money',
    text: 'INTERESTING:TAB_CURRENCY',
  },
  {
    id: 'languages',
    iconClass: 'icofont-ui-text-chat',
    text: 'INTERESTING:TAB_LANGUAGES',
  },
  {
    id: 'distance',
    iconClass: 'icofont-map-pins',
    text: 'INTERESTING:TAB_DISTANCE',
  },
];

export const MOCK_CURRENCY_DATA = [
  {
    _id: '25',
    name: 'Afghan afghani',
    code: 'AFN',
    symbol: '؋',
  },
  {
    _id: '49',
    name: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  {
    _id: '72',
    name: 'Albanian lek',
    code: 'ALL',
    symbol: 'L',
  },
  {
    _id: '94',
    name: 'Algerian dinar',
    code: 'DZD',
    symbol: 'د.ج',
  },
  {
    _id: '128',
    name: 'United State Dollar',
    code: 'USD',
    symbol: '$',
  },
];

export const MOCK_LANGUAGES_DATA = [
  {
    _id: '22',
    iso639_2: 'pus',
    name: 'Pashto',
    nativeName: 'پښتو',
    countries: [
      {
        name: 'Afghanistan',
        flag: {
          emoji: '🇦🇫',
        },
      },
    ],
  },
  {
    _id: '23',
    iso639_2: 'uzb',
    name: 'Uzbek',
    nativeName: 'Oʻzbek',
    countries: [
      {
        name: 'Uzbekistan',
        flag: {
          emoji: '🇺🇿',
        },
      },
      {
        name: 'Afghanistan',
        flag: {
          emoji: '🇦🇫',
        },
      },
    ],
  },
  {
    _id: '24',
    iso639_2: 'tuk',
    name: 'Turkmen',
    nativeName: 'Türkmen',
    countries: [
      {
        name: 'Turkmenistan',
        flag: {
          emoji: '🇹🇲',
        },
      },
      {
        name: 'Afghanistan',
        flag: {
          emoji: '🇦🇫',
        },
      },
    ],
  },
  {
    _id: '48',
    iso639_2: 'swe',
    name: 'Swedish',
    nativeName: 'svenska',
    countries: [
      {
        name: 'Sweden',
        flag: {
          emoji: '🇸🇪',
        },
      },
      {
        name: 'Finland',
        flag: {
          emoji: '🇫🇮',
        },
      },
      {
        name: 'Åland Islands',
        flag: {
          emoji: '🇦🇽',
        },
      },
    ],
  },
];
