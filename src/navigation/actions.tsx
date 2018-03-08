import { Navigation, Navigator } from 'react-native-navigation'
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
        label: 'Pedir',
        screen: Screens.PickOrderType,
        title: 'Pedir',
      },
      {
        label: 'Meus Pedido',
        screen: Screens.MyOrders,
        title: 'Meus Pedido',
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

export const startReceiveFlow = (navigator: Navigator) => {
  Navigation.showModal({
    screen: Screens.CustomerPosition,
    title: 'Receber pacote', // title of the screen as appears in the nav bar (optional)
    passProps: {}, // simple serializable object that will pass as props to the modal (optional)
    // navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    // navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
  });
}
