const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
                  name: 'user',
                  fields: () => (
                                    {
                                                      id: { type: GraphQLInt },
                                                      name: { type: GraphQLString },
                                                      email: { type: GraphQLString },
                                                      phone: { type: GraphQLString },
                                                      country: { type: GraphQLString }
                                    }
                  )
});

const RootQuery = new GraphQLObjectType({
                  name: 'api',
                  fields: {
                                    learningGraphQL: {
                                                      type: new GraphQLList(UserType),
                                                      resolve(parent, args) {
                                                                        let data = [{
                                                                                          id: 1, name: 'Ram', email: 'ram@gmail.com', phone: 98000000, country: 'Nepal'
                                                                        }, {
                                                                                          id: 2, name: 'Hari', email: 'hari@gmail.com', phone: 9812000000, country: 'Nepal'
                                                                        }, {
                                                                                          id: 3, name: 'Shyam', email: 'shyam@gmail.com', phone: 9834000000, country: 'Nepal'
                                                                        },]
                                                                        return data;
                                                      }
                                    }
                  }
})

module.exports = new GraphQLSchema({ query: RootQuery });