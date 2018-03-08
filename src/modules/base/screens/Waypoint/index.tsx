import * as React from 'react'
import Waypoint from '../../containers/Waypoint'
import { loadMainScreen, loadSignInScreen } from '../../../../navigation/actions'

export default class WaypointScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  private handleDecideNextScreen = (authenticated: boolean) => {
    if (authenticated) {
      loadMainScreen()
    } else {
      loadSignInScreen()
    }
  }

  public render() {
    return (
      <Waypoint
        allowGuest={false}
        onDecideNextScreen={this.handleDecideNextScreen}
      />
    )
  }
}
