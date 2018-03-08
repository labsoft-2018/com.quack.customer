import * as React from 'react'
import Waypoint from '../../components/Waypoint/index'
import { AsyncStorage } from 'react-native'

// TODO
export interface IWaypointContainerProps {
  allowGuest: boolean;
  onDecideNextScreen: (authenticated: boolean) => void
}

export interface IWaypointContainerState {
  shouldGoToMain: boolean;
  authenticated: boolean;
  loading: boolean;
}

class WaypointContainer extends React.Component<IWaypointContainerProps> {
  public state = {
    authenticated: false,
    loading: true,
    shouldGoToMain: null,
  }

  public async componentDidMount() {
    const token = await AsyncStorage.getItem('token')
    const authenticated = !!token

    this.props.onDecideNextScreen(authenticated)
  }

  public render() {
    return (
      <Waypoint
        loading={this.state.loading}
      />
    )
  }
}

export default WaypointContainer
