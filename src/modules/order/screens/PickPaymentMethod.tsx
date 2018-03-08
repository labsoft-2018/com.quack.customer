import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { Text, Button, View } from 'react-native-ui-lib'
import { Colors } from '../../../resources/colors';
import { NavigationComponentProps } from 'react-native-navigation'
import { Screens } from '../../../navigation/screen-names'

export class PickPaymentMethodScreen extends React.Component<NavigationComponentProps> {
  private handleNext = () => {
    this.props.navigator.showModal({
      screen: Screens.SearchingCarrier,
      title: 'Aguarde',
    })
  }
  public render() {
    return (
      <ScreenWrapper>
        <View flex>
          <Text>PAYMENT METHOD SCREEN</Text>
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