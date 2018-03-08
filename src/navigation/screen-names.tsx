import { BUNDLE_IDENTIFIER } from '../resources/constants'
const getScreenName = (bundleIdentifier, screenName) => `${bundleIdentifier}.${screenName}`

export const Screens = {
  SignIn: getScreenName(BUNDLE_IDENTIFIER, 'SignIn'),
  Waypoint: getScreenName(BUNDLE_IDENTIFIER, 'Waypoint'),
  PickOrderType: getScreenName(BUNDLE_IDENTIFIER, 'PickOrderType')
}
