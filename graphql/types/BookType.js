const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql")
const {authors} = require("../../data/mockData")

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => {
      const AuthorType = require("./AuthorType")  
      return {
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        author: {
          type: AuthorType,
          resolve: (book) => {
            return authors.find(author => author.id === book.authorId)
          }
        }
      }
    }
  })

module.exports = BookType