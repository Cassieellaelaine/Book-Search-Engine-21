import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    createMatchup(email: $email, password: $password) {
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username:String!, $email:String!, $password:String!) {
    addUser(username:$username, email: $email, password: $password) {
      username
      email 
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId:String!, $authors:[String!], $description:String!, $image:String!, $title:String!, $link:String!) {
    saveBook(bookId:$bookId, authors:$authors, description:$description, image:$image, title:$title, link:$link) {
      bookId
      authors
      description
      image
      title
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId:String!) {
    saveBook(bookId:$bookId) {
      bookId
    }
  }
`;
