import { Navigation } from 'react-native-navigation'
import { Screens } from './screen-names'
import { AppTheme } from '../resources/app-theme'

export const loadSignInScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.SignIn,
    },
    animationType: 'fade',
  });
}

export const loadMainScreen = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Fazer Pedido',
        screen: Screens.PickOrderType,
        title: 'Fazer Pedido',
      },
    ],
    animationType: 'fade',
    tabsStyle: {
      tabBarButtonColor: AppTheme.tabBarButtonColor,
      tabBarSelectedButtonColor: AppTheme.tabBarSelectedButtonColor,
      tabBarBackgroundColor: AppTheme.tabBarBackgroundColor,
    },
  });
}

export const loadWaypoint = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.Waypoint,
    },
    animationType: 'fade',
  });
}
