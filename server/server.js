// * `server.js`: Implement the Apollo Server and apply it to the Express server as middleware.

const express = require("express");

//implementing apollo server
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//creating an instance of an Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//applying apollo server to the Express server as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
