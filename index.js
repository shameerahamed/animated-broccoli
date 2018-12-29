const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('./src/config/mongoose');
const schema = require('./src/graphql');

const db = mongoose();
const app = express();

app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true
}));
// Up and Running at Port 4000
/*app.listen(process.env.PORT || 8080, () => {
  console.log('A GraphQL API running at port 4000');
});*/

app.use('/', (req, res) => res.send("Welcome LMS User"));
app.listen(process.env.PORT, () => console.log('LMS Server is ready on localhost:' + process.env.GRAPHQLPORT));