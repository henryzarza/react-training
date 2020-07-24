import { gql } from '@apollo/client';

export const TABS_CONFIG = [
  {
    id: 'currencies',
    iconClass: 'icofont-money-bag',
    text: 'INTERESTING:TAB_CURRENCY',
  },
  {
    id: 'languages',
    iconClass: 'icofont-globe-alt',
    text: 'INTERESTING:TAB_LANGUAGES',
  },
  {
    id: 'distance',
    iconClass: 'icofont-map-pins',
    text: 'INTERESTING:TAB_DISTANCE',
  },
];

export const CURRENCY_REGISTERS_PER_PAGE = 30;

export const QUERY_CURRENCY = gql`
  query Currency($first: Int, $offset: Int) {
    Currency(offset: $offset, first: $first, orderBy: name_asc) {
      _id
      name
      code
      symbol
      countries(orderBy: name_asc) {
        name
        flag {
          emoji
        }
      }
    }
  }
`;

export const LNG_REGISTERS_PER_PAGE = 20;

export const LNG_QUERY = gql`
  query Language($first: Int, $offset: Int) {
    Language(first: $first, offset: $offset, orderBy: name_asc) {
      _id
      iso639_2
      name
      nativeName
      countries(orderBy: name_asc) {
        _id
        name
        flag {
          emoji
        }
      }
    }
  }
`;
