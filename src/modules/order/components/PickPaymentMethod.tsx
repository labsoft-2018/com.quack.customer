import * as React from 'react'
import { View, Text } from 'react-native-ui-lib'
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const PaymentMethod: React.SFC<{
  showBack: boolean,
  onBack?: () => void
}> = ({
  showBack,
  onBack
}) => (
  <View flex>
    <Text h3 center marginB-20>Forma de pagamento</Text>
    <Text>TODO: Forma de pagamento</Text>
  </View>
)
