import * as React from 'react'
import { ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib'
import { Colors } from '../../../resources/colors';

export const SearchingCarrier: React.SFC<{
  onCancelPress: () => void
}> = ({
  onCancelPress,
}) => (
  <View flex>
    <View flex center>
      <ActivityIndicator />
      <Text h5 center marginT-40>
        Aguarde enquanto{`\n`}
        encontramos um motoboy{`\n`}
        para realizar sua entrega
      </Text>
    </View>
    <Button
      backgroundColor={Colors.DANGER}
      label='Cancelar'
      size='large'
      fullWidth
      borderRadius={0}
      onPress={onCancelPress}
    />
  </View>
)