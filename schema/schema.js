const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [{id: 1, name :'Ramya', age : 24},
               {id: 2, name : 'Sowmya', age : 24}]

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt},
    }
})


const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: {type: GraphQLString} },
            resolve(parentValue, args){
                return __dirname.find(users, {id : args.id});
            }
        }
    }   
});

module.export = new GraphQLSchema({
    query: RootQuery
})