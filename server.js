const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

var app = express();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(5000, () => console.log('Now browse to localhost:5000/graphql'));