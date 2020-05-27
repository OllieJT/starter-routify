import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new createHttpLink({
	uri: 'https://ant-venom.myshopify.com/api/graphql',
	fetch,
});

const middlewareLink = setContext(() => ({
	headers: {
		'X-Shopify-Storefront-Access-Token': 'f2daa4c4d566a62a58c7121e3e2265b4',
	},
}));

const link = middlewareLink.concat(httpLink);
const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

export default client;
