import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { Text, Button, View, TextInput } from 'react-native-ui-lib'
import { Colors } from '../../../resources/colors';
import { NavigationComponentProps } from 'react-native-navigation'
import { Screens } from '../../../navigation/screen-names'
import { defaultNavigatorStyle } from '../../../resources/app-theme'
import { ILocation } from './CustomerPosition';
import { graphql } from 'react-apollo'
import { CREATE_ORDER } from '../mutations/create-order'
import { Alert } from 'react-native';

export interface IPaymentInfo {
  cardId: string
}
export interface IOrder {
  sourceLocation: ILocation,
  destLocation: ILocation,
  withdrawalInstructions: string,
  deliveryInstructions: string,
  contactNumber: string,
}

export interface IPickPaymentMethodScreenState {
  cardId: string
}

export interface IPickPaymentMethodScreenProps {
  order: IOrder,
  createOrder: (order: IOrder, paymdentInfo: IPaymentInfo) => Promise<any>
}

class PickPaymentMethod extends React.Component<NavigationComponentProps & IPickPaymentMethodScreenProps, IPickPaymentMethodScreenState> {
  public state = {
    cardId: '1234-1234-1234-1234'
  }
  public static navigatorStyle = {
    ...defaultNavigatorStyle,
    title: 'Teste'
  }
  
  public componentDidMount() {
    console.log(this.props)
  }

  private handleNext = async () => {
    try {
      // Transform because react-native-navigation is fuckin up on passProps
      const order = {
        sourceLocation: {
          lat: this.props.order.sourceLocation.lat,
          lng:  this.props.order.sourceLocation.lng,
          address:  this.props.order.sourceLocation.address,
        },
        destLocation: {
          lat: this.props.order.destLocation.lat,
          lng: this.props.order.destLocation.lng,
          address: this.props.order.destLocation.address,
        },
        withdrawalInstructions: this.props.order.withdrawalInstructions,
        deliveryInstructions: this.props.order.deliveryInstructions,
        contactNumber: this.props.order.contactNumber,
      }
      const paymentInfo = {
        cardId: this.state.cardId,
      }
      const response = await this.props.createOrder(order, paymentInfo)

      const orderId = response.data.createOrder.id
      Alert.alert(`Order created: ${orderId}`)
      
    } catch (err) {
      console.log(err)
    }
    

    // this.props.navigator.showModal({
    //   screen: Screens.SearchingCarrier,
    //   title: 'Aguarde',
    // })
  }

  private handleChangeCardId = (cardId: string) => {
    this.setState({
      cardId
    })
  }

  public render() {
    return (
      <ScreenWrapper>
        <View flex>
          <Text>PAYMENT METHOD SCREEN</Text>
          <TextInput
            value={this.state.cardId}
            onChangeText={this.handleChangeCardId}
          >

          </TextInput>
        </View>
        <Button
          backgroundColor={Colors.PRIMARY_COLOR}
          label='Próximo'
          size='large'
          fullWidth
          borderRadius={0}
          onPress={this.handleNext}
        />
      </ScreenWrapper>
    )
  }
}

export interface IChildProps {
  createOrder: (order: IOrder, paymdentInfo: IPaymentInfo) => Promise<any>
}
export const PickPaymentMethodScreen = graphql<{}, {}, IChildProps>(CREATE_ORDER, {
  props: ({ mutate }) => ({
    createOrder: ({ order, paymentInfo }) => mutate({ variables: { order, paymentInfo } }),
  }),
})(PickPaymentMethod)