import { BUNDLE_IDENTIFIER } from '../resources/constants'
const getScreenName = (bundleIdentifier, screenName) => `${bundleIdentifier}.${screenName}`

export const Screens = {
  SignIn: getScreenName(BUNDLE_IDENTIFIER, 'SignIn'),
  Waypoint: getScreenName(BUNDLE_IDENTIFIER, 'Waypoint'),
  PickOrderType: getScreenName(BUNDLE_IDENTIFIER, 'PickOrderType'),
  CustomerPosition: getScreenName(BUNDLE_IDENTIFIER, 'CustomerPosition'),
  PickPaymentMethod: getScreenName(BUNDLE_IDENTIFIER, 'PickPaymentMethod'),
  SearchingCarrier: getScreenName(BUNDLE_IDENTIFIER, 'SearchingCarrier'),
  TrackOrder: getScreenName(BUNDLE_IDENTIFIER, 'TrackOrder'),
  MyOrders: getScreenName(BUNDLE_IDENTIFIER, 'MyOrders'),
}
