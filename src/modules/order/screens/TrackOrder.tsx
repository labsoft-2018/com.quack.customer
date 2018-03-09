import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { NavigationComponentProps } from 'react-native-navigation'
import { TrackOrder } from '../components/TrackOrder'
import { defaultNavigatorStyle } from '../../../resources/app-theme'

export default class TrackOrderScreen extends React.Component<NavigationComponentProps> {
  public static navigatorStyle = {
    ...defaultNavigatorStyle,
    title: 'Teste'
  }
  
  public render() {
    return (
      <ScreenWrapper>
        <TrackOrder />
      </ScreenWrapper>
    )
  }
}