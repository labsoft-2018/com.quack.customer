import * as React from 'react'
import { ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../../resources/colors';

export const CarrierFound: React.SFC<{
  name: string,
  onTrackOrderPress: () => void,
}> = ({
  name,
  onTrackOrderPress,
}) => (
  <View flex>
    <View flex center>
      <Feather name="check-circle" size={32} />
      <Text h5 center marginT-40>Motoboy encontrado: {name}</Text>
    </View>
    <Button
      backgroundColor={Colors.PRIMARY_COLOR}
      label='Acompanhar entrega'
      size='large'
      fullWidth
      borderRadius={0}
      onPress={onTrackOrderPress}
    />
  </View>
)