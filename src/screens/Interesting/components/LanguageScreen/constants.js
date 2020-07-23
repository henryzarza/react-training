import { gql } from '@apollo/client';

const REGISTERS_PER_PAGE = 20;

export const QUERY_CURRENCY = gql`
  query {
    Currency(offset: 1, first: ${REGISTERS_PER_PAGE}, orderBy: name_asc) {
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
