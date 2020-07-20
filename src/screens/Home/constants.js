import { gql } from '@apollo/client';

export const VIEW_CONTENT_TYPE = [
  {
    id: 'card',
    iconClass: 'icofont-ui-v-card',
  },
  {
    id: 'map',
    iconClass: 'icofont-ui-map',
  },
];

export const COUNTRIES_QUERY = gql`
  query {
    Country(orderBy: name_asc) {
      _id
      name
      nativeName
      alpha3Code
      alpha2Code
      capital
      population
      numericCode
      currencies(first: 1) {
        name
        symbol
      }
      flag {
        svgFile
        emoji
      }
    }
  }
`;
