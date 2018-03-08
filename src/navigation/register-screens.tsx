import { makeHot } from 'haul/hot';
import { Navigation } from 'react-native-navigation'

import SignIn from '../modules/auth/screens/SignIn'
import WaypointScreen from '../modules/base/screens/Waypoint/index'

import { Screens } from './screen-names'
import { apolloProviderHOC } from '../modules/base/hocs/apollo'

const registerScreen = (name, ScreenComponent, apolloClient, socketClient) => {
  Navigation.registerComponent(name, makeHot(() => apolloProviderHOC(ScreenComponent, apolloClient, socketClient), name))
}

export default (apolloClient, socketClient) => {
  registerScreen(Screens.SignIn, SignIn, apolloClient, socketClient)
  registerScreen(Screens.Waypoint, WaypointScreen, apolloClient, socketClient)
}
