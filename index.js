const express = require('express'); // require('express') charge le module express installé via npm.
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use('/graphql', graphqlHTTP({ // Middleware
    schema: schema, // Le schema GraphQL
    graphiql: true // Permet d'afficher une interface graphique de requête GraphQL dans le navigateur sur http://localhost:3000/graphql
}))


app.listen(3000, () => console.log('Server started on port 3000'));