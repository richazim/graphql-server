const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } = require("graphql")
const {books} = require("../../data/mockData")

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => {
        const BookType = require("./BookType")
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            books: {
                type: new GraphQLList(BookType),
                resolve: (author) => {
                    return books.filter(book => book.authorId === author.id)
                }
            }
        }
    }
})

module.exports = AuthorType