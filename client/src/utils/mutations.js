import { gql } from "@apollo/client";

// * `mutations.js`:

// 	* `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

// 	* `ADD_USER` will execute the `addUser` mutation.

// 	* `SAVE_BOOK` will execute the `saveBook` mutation.

// 	* `REMOVE_BOOK` will execute the `removeBook` mutation.

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// 	* `ADD_USER` will execute the `addUser` mutation.
export const ADD_USER = gql`
  mutation addSingleUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

// 	* `SAVE_BOOK` will execute the `saveBook` mutation.
export const SAVE_BOOK = gql`
  mutation saveSingleBook($bookData: saveBookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

// 	* `REMOVE_BOOK` will execute the `removeBook` mutation.
export const REMOVE_BOOK = gql`
  mutation removeSingleBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        title
        link
      }
    }
  }
`;
