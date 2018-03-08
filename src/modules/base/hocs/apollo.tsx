import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import hoistNonReactStatic from 'hoist-non-react-statics'
import SocketProvider from '../../socket/providers/socket-provider'

export const apolloProviderHOC = (WrappedComponent, client, socket) => {
  class Enhance extends React.Component {
    public render() {
      return (
        <ApolloProvider client={client}>
          <SocketProvider socket={socket}>
            <WrappedComponent {...this.props} />
          </SocketProvider>
        </ApolloProvider>
      )
    }
  }
  hoistNonReactStatic(Enhance, WrappedComponent)
  return Enhance
}
