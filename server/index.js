const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');

async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = require('./schema');
  // Provide resolver functions for your schema fields
  const resolvers = require('./resolvers');

  const server = new ApolloServer({typeDefs, resolvers});
  await server.start();

  const app = express();
  app.use(express.static(path.join(__dirname, '../build')))
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 8080 }, resolve));
  console.log(`🚀 GraphQl API ready at http://localhost:8080${server.graphqlPath}`);
  console.log(`🚀 Latest React Build ready at http://localhost:8080`);
  return { server, app };
};

startApolloServer();
