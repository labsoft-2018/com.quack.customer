
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Colors } from '../../../../resources/colors'

const Waypoint: React.SFC<{loading: boolean}> = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.PRIMARY_COLOR }}>
    <ActivityIndicator color={Colors.WHITE} />
  </View>
)

export default Waypoint
