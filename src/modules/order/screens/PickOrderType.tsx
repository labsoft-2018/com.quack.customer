import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper'
import { View, Text } from 'react-native-ui-lib'
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import { Colors } from '../../../resources/colors'
import { NavigationComponentProps, PushedScreen } from 'react-native-navigation'
import { startReceiveFlow } from '../../../navigation/actions'
import { eventEmitter } from '../containers/SearchingCarrier';
import { defaultNavigatorStyle } from '../../../resources/app-theme'

export default class PickOrderTypeScreen extends React.Component<NavigationComponentProps> {
  public static navigatorStyle = {
    ...defaultNavigatorStyle,
    title: 'Teste',
  }
  private handleReceivePackage = () => {
    startReceiveFlow(this.props.navigator)
  }
  componentDidMount() {
    eventEmitter.on('switchToTab', (tabIndex) => {
      this.props.navigator.switchToTab({
        tabIndex
      })
    })
  }
  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.button} onPress={this.handleReceivePackage}>
            <Text h3 center>
              Quero receber{`\n`}um pacote
            </Text>
          </TouchableOpacity>
          <View style={styles.divisor} />
          <TouchableOpacity style={styles.button}>
            <Text h3 center>
              Quero entregar{`\n`}um pacote
            </Text>
          </TouchableOpacity>
        </View>
        
      </ScreenWrapper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

  } as ViewStyle,
  divisor: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.GRAY_180
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle
})
