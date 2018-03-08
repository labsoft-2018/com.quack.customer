import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { Text, Button, View } from 'react-native-ui-lib'
import { Colors } from '../../../resources/colors';
import { NavigationComponentProps } from 'react-native-navigation'
import { SearchingCarrier } from '../components/SearchingCarrier'
import { SearchingCarrierContainer } from '../containers/SearchingCarrier'
import { defaultNavigatorStyle } from '../../../resources/app-theme'

export class SearchingCarrierScreen extends React.Component<NavigationComponentProps> {
  public static navigatorStyle = {
    ...defaultNavigatorStyle,
    title: 'Teste'
  }
  
  private handleCancel = () => {
    alert('cancel')
  }
  public render() {
    return (
      <ScreenWrapper>
        <SearchingCarrierContainer
          navigator={this.props.navigator}
        />
      </ScreenWrapper>
    )
  }
}