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

export const ENTER_KEY_CODE = 13;

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

export const COUNTRY_QUERY = gql`
  query Country($id: String!) {
    Country(_id: $id) {
      name
      nativeName
      alpha3Code
      area
      population
      capital
      demonym
      numericCode
      subregion {
        name
        region {
          name
        }
      }
      officialLanguages {
        iso639_2
        name
        nativeName
      }
      currencies {
        name
        symbol
      }
      regionalBlocs {
        _id
        name
        acronym
      }
      flag {
        emoji
        svgFile
      }
      callingCodes {
        _id
        name
      }
    }
  }
`;
