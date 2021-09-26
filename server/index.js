const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

async function startApolloServer() {
  const typeDefs = require('./schema');
  const resolvers = require('./resolvers');
  const server = new ApolloServer({ typeDefs, resolvers });
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

function connectToDB() {
  mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  );
  mongoose.connection.on('error', console.error.bind(console, 'Connection Error: '));
  mongoose.connection.once('open', () => {
    console.log('🚀 Connected to Database 🚀\n');
  });
}

startApolloServer();
connectToDB();
