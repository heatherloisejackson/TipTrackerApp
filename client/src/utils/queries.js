// MD Created queries.js file

import { gql } from '@apollo/client';

export const QUERY_TRANSACTIONS = gql`
query oneAccount($_id: ID!) {
  account(_id: $_id) {
    _id
    transactions {
      amount
      date
    }
  }
}
`;