import 'haul/hot/patch'
import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import registerScreens from './navigation/register-screens';
import configReactNativeUiLibTheme from './config/react-native-ui-lib-theme'
import { loadWaypoint } from './navigation/actions'
import { newApolloClient } from './system/apollo-client'
import { newSocketClient } from './system/socket-client'
import { newConfig, Env } from './system/config'
import { Screens } from './navigation/screen-names';
import { StatusBar } from 'react-native';
import { AppTheme } from './resources/app-theme';


const boot = (env) => {
  const config = newConfig(env)
  const apolloClient = newApolloClient(config)
  const socketClient = newSocketClient(config)
  StatusBar.setBarStyle(AppTheme.statusBarColor)
  configReactNativeUiLibTheme()
  registerScreens(apolloClient, socketClient)
  loadWaypoint()
}

const env = __DEV__ ? Env.DEV : Env.PROD

boot(env)

if (module.hot) {
  module.hot.accept(() => {})
  const waypointScreenPath = './modules/base/screens/Waypoint/index.tsx'
  module.hot.accept(waypointScreenPath, () => {
    clearCacheFor(require.resolve(waypointScreenPath));
    redraw(() => require(waypointScreenPath).default, Screens.Waypoint);
  });

  const signInScreenPath = './modules/auth/screens/SignIn/index.tsx'
  module.hot.accept(signInScreenPath, () => {
    clearCacheFor(require.resolve(signInScreenPath));
    redraw(() => require(signInScreenPath).default, Screens.SignIn);
  });

  const pickOrderTypeScreenPath = './modules/order/screens/PickOrderType.tsx'
  module.hot.accept(pickOrderTypeScreenPath, () => {
    clearCacheFor(require.resolve(pickOrderTypeScreenPath));
    redraw(() => require(pickOrderTypeScreenPath).default, Screens.PickOrderType);
  });

  const customerPositionScreenPath = './modules/order/screens/CustomerPosition.tsx'
  module.hot.accept(customerPositionScreenPath, () => {
    clearCacheFor(require.resolve(customerPositionScreenPath));
    redraw(() => require(customerPositionScreenPath).default, Screens.CustomerPosition);
  });

  const myOrdersScreenPath = './modules/order/screens/MyOrders.tsx'
  module.hot.accept(myOrdersScreenPath, () => {
    clearCacheFor(require.resolve(myOrdersScreenPath));
    redraw(() => require(myOrdersScreenPath).MyOrdersScreen, Screens.MyOrders);
  });

  const trackOrderScreenPath = './modules/order/screens/TrackOrder.tsx'
  module.hot.accept(trackOrderScreenPath, () => {
    clearCacheFor(require.resolve(trackOrderScreenPath));
    redraw(() => require(trackOrderScreenPath).TrackOrderScreen, Screens.TrackOrder);
  });
}