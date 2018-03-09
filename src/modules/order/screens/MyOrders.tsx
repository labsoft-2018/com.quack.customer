import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { NavigationComponentProps, PushedScreen } from 'react-native-navigation'
import { TrackOrder } from '../components/TrackOrder'
import { Screens } from '../../../navigation/screen-names'
import { Button } from 'react-native-ui-lib'
import { eventEmitter } from '../containers/SearchingCarrier';
import { defaultNavigatorStyle } from '../../../resources/app-theme'

export default class MyOrdersScreen extends React.Component<NavigationComponentProps> {
  public static navigatorStyle = {
    ...defaultNavigatorStyle,
    title: 'Teste'
  }
  
  componentDidMount() {
    eventEmitter.on('push', (params: PushedScreen) => {
      this.props.navigator.push(params)
    })
  }
  public render() {
    return (
      <ScreenWrapper>
        <Button
          label="SHOW TRACK ORDER"
          onPress={() => {
            this.props.navigator.push({
              screen: Screens.TrackOrder
            })
          }}
        />
      </ScreenWrapper>
    )
  }
}