import { gql } from '@apollo/client';

export const REGISTERS_PER_PAGE = 20;

export const QUERY_CURRENCY = gql`
  query Currency($first: Int, $offset: Int) {
    Currency(offset: $offset, first: $first, orderBy: name_asc) {
      _id
      name
      code
      symbol
      countries {
        name
        flag {
          emoji
        }
      }
    }
  }
`;
