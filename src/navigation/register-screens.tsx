import { makeHot } from 'haul/hot';
import { Navigation } from 'react-native-navigation'

import SignIn from '../modules/auth/screens/SignIn'
import WaypointScreen from '../modules/base/screens/Waypoint/index'

import { Screens } from './screen-names'
import { apolloProviderHOC } from '../modules/base/hocs/apollo'
import PickOrderTypeScreen from '../modules/order/screens/PickOrderType';
import CustomerPositionScreen from '../modules/order/screens/CustomerPosition'
import { PickPaymentMethodScreen } from '../modules/order/screens/PickPaymentMethod'
import { SearchingCarrierScreen } from '../modules/order/screens/SearchingCarrier'
import TrackOrderScreen from '../modules/order/screens/TrackOrder'
import MyOrdersScreen from '../modules/order/screens/MyOrders'

const registerScreen = (name, ScreenComponent, apolloClient, socketClient) => {
  Navigation.registerComponent(name, makeHot(() => apolloProviderHOC(ScreenComponent, apolloClient, socketClient), name))
}

export default (apolloClient, socketClient) => {
  registerScreen(Screens.SignIn, SignIn, apolloClient, socketClient)
  registerScreen(Screens.Waypoint, WaypointScreen, apolloClient, socketClient)
  registerScreen(Screens.PickOrderType, PickOrderTypeScreen, apolloClient, socketClient)
  registerScreen(Screens.CustomerPosition, CustomerPositionScreen, apolloClient, socketClient)
  registerScreen(Screens.PickPaymentMethod, PickPaymentMethodScreen, apolloClient, socketClient)
  registerScreen(Screens.SearchingCarrier, SearchingCarrierScreen, apolloClient, socketClient )
  registerScreen(Screens.TrackOrder, TrackOrderScreen, apolloClient, socketClient )
  registerScreen(Screens.MyOrders, MyOrdersScreen, apolloClient, socketClient )
}
