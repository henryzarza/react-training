import { gql } from 'graphql-request';

export const QUERY = gql`
  query {
    Timezone {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE = gql`
  query Timezone($id: String!) {
    Timezone(_id: $id) {
      name
      countries(orderBy: name_asc) {
        _id
        name
        nativeName
        alpha3Code
        flag {
          emoji
        }
      }
    }
  }
`;
