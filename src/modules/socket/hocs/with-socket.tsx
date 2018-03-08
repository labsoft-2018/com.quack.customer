import * as React from 'react'
import PropTypes from 'prop-types'

export const withSocket = () => (WrappedComponent) => class extends React.Component {
  public static contextTypes = {
    socket: PropTypes.object,
  }
  public render() {
    return (
      <WrappedComponent
        socket={this.context.socket}
        {...this.props}
      />
    )
  }
}
