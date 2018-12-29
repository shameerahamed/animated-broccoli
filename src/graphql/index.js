import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';
import mutations from './mutations';
import queries from './queries';

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
	})
});