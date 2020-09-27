import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import cookie from 'cookie';

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = localStorage.getItem('token');
    const cookies = cookie.parse(document.cookie);

    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : "",
            'X-CSRF-Token': cookies['CSRF-TOKEN'],
        },
        fetchOptions: {
            credentials: 'include',
        }
    });

    return forward(operation);
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});


