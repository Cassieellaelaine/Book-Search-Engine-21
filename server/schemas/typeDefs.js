const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email:String!
    savedBooks:[Book]
  }

  type Book {
    bookId: String!
    authors: [String!]
    description: String!
    image:String!
    title: String!
    link: String!
  }

  type Auth{
    token:ID!
    user:User
  }

  type Query {
    users: [User]
    user(_id:String, username:String):User,
    me:User
  }

  type Mutation {
    removeBook(bookId:String!) : User
    addUser(username:String!, email:String!, password:String!) : Auth
    saveBook(bookId:String!, authors:[String!], description:String!, image:String!, title:String!, link:String!) : User
    login(email:String!, password:String!) : Auth
  }
`;

module.exports = typeDefs;