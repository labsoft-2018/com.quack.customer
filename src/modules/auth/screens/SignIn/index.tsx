import * as React from 'react'
import SignIn from '../../containers/SignIn'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import { NavigationComponentProps } from 'react-native-navigation';

export default class SignInScreen extends React.Component<NavigationComponentProps> {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  public render() {
    return (
      <ScreenWrapper>
        <Image
          source={{uri: 'https://i.pinimg.com/originals/06/68/99/066899986813f160faf1a641c4b429a1.png'}}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.title}>
          Quack Pack - Cliente
        </Text>
        <View style={styles.formWrapper}>
          <SignIn />
        </View>

      </ScreenWrapper>

    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 80,
    marginBottom: 10,
    width: 200,
    height: 200,
    alignSelf: 'center',
  } as ViewStyle,
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  } as TextStyle,
  formWrapper: {
    flex: 1,
    marginTop: 40,
  } as ViewStyle,
})
