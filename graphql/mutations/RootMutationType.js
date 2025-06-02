const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');
const { authors, books } = require('../../data/mockData')
const AuthorType = require('../types/AuthorType')
const BookType = require('../types/BookType')

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({ // Les différentes opérations que voulons réaliser pour nos différentes mutations
      addBook: {
        type: BookType,
        description: 'Add a book',
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
          authorId: { type: GraphQLNonNull(GraphQLInt) }
        },
        resolve: (parent, args) => {
          const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
          books.push(book)
          return book
        }
      },
      addAuthor: {
        type: AuthorType,
        description: 'Add an author',
        args: {
          name: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, args) => {
          const author = { id: authors.length + 1, name: args.name }
          authors.push(author)
          return author
        }
      }
    })
  })

module.exports = RootMutationType