import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper'
import { View, Text, TextInput, Button } from 'react-native-ui-lib'
import { StyleSheet, ViewStyle, TouchableOpacity, TextStyle, ScrollView, Dimensions, ScrollViewStatic, ScrollViewProps, ActivityIndicator } from 'react-native'
import { Colors } from '../../../resources/colors'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationComponentProps } from 'react-native-navigation';
import { TrackOrder } from '../components/TrackOrder'
import { Screens } from '../../../navigation/screen-names'


export interface ICustomerPositionScreenState {
  page: number
}
export default class CustomerPositionScreen extends React.Component<NavigationComponentProps, ICustomerPositionScreenState> {
  public state = {
    page: 0
  }
  private scrollView: ScrollViewStatic

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'X',
        id: 'close',
        buttonColor: 'blue',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      }
    ],
  };

  public static navigatorStyle = {
    navBarHidden: false,
    title: 'Teste'
  }
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  private handleClose = () => {
    this.props.navigator.dismissModal()
  }
  private onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.handleClose()
      }
    }
  }
  private handleNext = () => {
    this.props.navigator.push({
      screen: Screens.PickPaymentMethod
    })
  }
  public render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <View padding-20>
            <Text h3 center marginB-10>Retirada</Text>
            <Text h5 grey180 center marginB-20>Como a gente faz pra pegar o pacote</Text>
            <Button
              size="small"
              label="Buscar endereço"
              marginB-20
            />

            <Text h5>Instruções</Text>
            <TextInput
              multiline
            />

            <Text>Qual o número da pessoa que está com os pacote?</Text>
            <TextInput
              marginT-10
              placeholder="(xx) xxxxx-xxxx"
            />
          </View>

          <View style={styles.divisor} />

          <View padding-20>
            <Text h3 center marginB-10>Entrega</Text>
            <Text h5 grey180 center marginB-20>Como a gente faz pra te encontrar?</Text>
            <Button
              size="small"
              label="Buscar endereço"
              marginB-20
            />

            <Text h5>Instruções para te encontrar</Text>
            <TextInput
              multiline
            />
          </View>

          <Button
            backgroundColor={Colors.PRIMARY_COLOR}
            label='Próximo'
            size='large'
            fullWidth
            borderRadius={0}
            onPress={this.handleNext}
          />
        </ScrollView>
      </ScreenWrapper>
    )
  }
}

const styles = StyleSheet.create({
  divisor: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.GRAY_180
  },
})
