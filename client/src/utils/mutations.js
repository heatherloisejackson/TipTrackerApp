import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_ACCOUNT = gql`
mutation addAccount($thoughtText: String!, $thoughtAuthor: String!) {
  addAccount(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
    _id
    thoughtText
    thoughtAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;
