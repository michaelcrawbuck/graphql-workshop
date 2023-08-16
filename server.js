const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    createdAt: Int!
  }
  type Settings {
    user: User!
    theme: String!
  }
  input NewSettinsgInput {
    user: ID!
    theme: String!
  }
  type Query {
    me: User!
    settings(user: ID!): Settings!
  }
  type Mutation {
    settings(input: NewSettinsgInput!): Settings!
  }
`;

const resolvers = {
  Query: {
    me() {
      return {
        id: '2837',
        userName: 'michael',
        createdAt: 371298731
      }
    },
    settings(_, {user}) {
      return {
        user,
        theme: 'light'
      }
    }
  },
  Mutation: {
    settings(_, {input}) {
      return input
    }
  },
  Settings: {
    user(settings) {
      return {
        id: '2837',
        userName: 'michael',
        createdAt: 371298731
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => console.log(`server on ${url}`));
