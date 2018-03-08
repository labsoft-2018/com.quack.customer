import 'haul/hot/patch'
import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import registerScreens from './navigation/register-screens';
import configReactNativeUiLibTheme from './config/react-native-ui-lib-theme'
import { loadWaypoint } from './navigation/actions'
import { newApolloClient } from './system/apollo-client'
import { newSocketClient } from './system/socket-client'
import { newConfig, Env } from './system/config'
import { Screens } from './navigation/screen-names';


const boot = (env) => {
  const config = newConfig(env)
  const apolloClient = newApolloClient(config)
  const socketClient = newSocketClient(config)
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
}