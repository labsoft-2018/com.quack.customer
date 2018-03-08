import * as React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

const ScreenWrapper: React.SFC<any> = ({
  children,
}) => (
  <View style={styles.wrapper}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // paddingTop: 22,
  } as ViewStyle,
})

export default ScreenWrapper
