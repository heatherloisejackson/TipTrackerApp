// MD Created queries.js file

import { gql } from '@apollo/client';

export const QUERY_TRANSACTIONS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query allAccount {
    accounts {
      transactions {
        amount
        date
      }
    }
  }
`;