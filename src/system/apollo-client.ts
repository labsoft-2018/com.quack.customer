import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { IConfig } from './config';

export const newApolloClient = (config: IConfig) => {
  return new ApolloClient({
    link: new HttpLink({ uri: config.graphQLEndpoint }),
    cache: new InMemoryCache().restore({}),
  })
}
