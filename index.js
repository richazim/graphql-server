const express = require('express'); // require('express') charge le module express installé via npm.
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'JeSuisLeNomDuQueryPrincipal',
        fields: () => ({ // fields permet de créer les champs de requêtes GraphQL.
            message: { // Je suis le champ message qui retourne un message.
                type: GraphQLString,
                resolve: () => 'Je suis la réponse du serveur GraphQL à tous les requêtes GraphQL coté client !'
            },
            message2: {
                type: GraphQLString,
                resolve: () => 'Je suis la deuxième réponse du serveur GraphQL à tous les requêtes GraphQL coté client !'
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({ // Middleware
    schema: schema,
    graphiql: true // Permet d'afficher un interface graphique de requête GraphQL dans le navigateur sur http://localhost:3000/graphql
}))


app.listen(3000, () => console.log('Server started on port 3000'));