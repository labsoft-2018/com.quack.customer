import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper'
import { View, Text, TextInput, Button } from 'react-native-ui-lib'
import { StyleSheet, ViewStyle, TouchableOpacity, TextStyle, ScrollView, Dimensions, ScrollViewStatic, ScrollViewProps, ActivityIndicator, Alert } from 'react-native'
import { Colors } from '../../../resources/colors'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationComponentProps } from 'react-native-navigation';
import { TrackOrder } from '../components/TrackOrder'
import { Screens } from '../../../navigation/screen-names'
import { defaultNavigatorStyle } from '../../../resources/app-theme'
import RNGooglePlaces from 'react-native-google-places';

export interface ICustomerPositionScreenState {
  withdrawalLocation: ILocation,
  deliveryLocation: ILocation,
  withdrawalInstructions: string,
  deliveryInstructions: string,
  contactNumber: string,
}

export interface ILocation {
  lat: number,
  lng: number,
  address: string,
}

const googlePlacesPlaceToLocation = (googlePlaces): ILocation => {
  return {
    lat: googlePlaces.latitude,
    lng: googlePlaces.longitude,
    address: googlePlaces.address,
  }
}

export default class CustomerPositionScreen extends React.Component<NavigationComponentProps, ICustomerPositionScreenState> {
  public state = {
    withdrawalLocation: null,
    deliveryLocation: null,
    withdrawalInstructions: '',
    deliveryInstructions: '',
    contactNumber: '',
  }
  private scrollView: ScrollViewStatic

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'X',
        id: 'close',
        // buttonFontSize: 14,
        // buttonFontWeight: '600',
      }
    ],
  };

  public static navigatorStyle = {
    ...defaultNavigatorStyle,
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

  private handleLocationPickerError = (error) => {
    Alert.alert(error.message)
  }
  private handleWithdrawalLocation = () => {
    RNGooglePlaces.openPlacePickerModal()
      .then((place) => {
        this.setState({
          withdrawalLocation: googlePlacesPlaceToLocation(place)
        })
      })
      .catch(this.handleLocationPickerError)
  }
  private handleDeliveryLocation = () => {
    RNGooglePlaces.openPlacePickerModal()
      .then((place) => {
        this.setState({
          deliveryLocation: googlePlacesPlaceToLocation(place)
        })
      })
      .catch(this.handleLocationPickerError)
  }

  private handleChangeText = (input) => (text: string) => {
    this.setState({
      [input]: text,
    })
  }
  public render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <View padding-20>
            <Text h3 center marginB-10>Retirada</Text>
            <Text h5 grey180 center marginB-20>Como a gente faz pra pegar o pacote?</Text>
            {
              this.state.withdrawalLocation &&
              <Text center marginB-20>
                {this.state.withdrawalLocation.address}
              </Text>
            }
            <Button
              background-secondary
              white
              size="small"
              label={this.state.withdrawalLocation ? 'Mudar endereço' : 'Buscar endereço'}
              onPress={this.handleWithdrawalLocation}
              marginB-20
            />

            <Text h5>Instruções</Text>
            <TextInput
              value={this.state.withdrawalInstructions}
              onChangeText={this.handleChangeText('withdrawalInstructions')}
              multiline
            />

            <Text>Qual o número da pessoa que está com os pacote?</Text>
            <TextInput
              marginT-10
              value={this.state.contactNumber}
              onChangeText={this.handleChangeText('contactNumber')}
              placeholder="(xx) xxxxx-xxxx"
            />
          </View>

          <View style={styles.divisor} />

          <View padding-20>
            <Text h3 center marginB-10>Entrega</Text>
            <Text h5 grey180 center marginB-20>Como a gente faz pra entregar o pacote?</Text>
            {
              this.state.deliveryLocation &&
              <Text center marginB-20>
                {this.state.deliveryLocation.address}
              </Text>
            }
            <Button
              background-secondary
              white
              size="small"
              label={this.state.deliveryLocation ? 'Mudar endereço' : 'Buscar endereço'}
              onPress={this.handleDeliveryLocation}
              marginB-20
            />

            <Text h5>Instruções</Text>
            <TextInput
              value={this.state.deliveryInstructions}
              onChangeText={this.handleChangeText('deliveryInstructions')}
              multiline
            />
          </View>

          <Button
            background-primary
            white
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
