import * as React from 'react'
import { View, TextStyle, ViewStyle } from 'react-native'
import { Form, Field } from 'react-final-form'
import { Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import TextInputWidget from '../../../widgets/TextInput'

export interface ISignInFormProps {
  customerSignInWithFacebook: (facebookToken: string) => void
}

export class SignInForm extends React.Component<ISignInFormProps> {
  private handleFacebook = () => {
    // TODO
    const token = 'blablabla'
    this.props.customerSignInWithFacebook(token)
  }
  public render() {
    const {
      customerSignInWithFacebook
    } = this.props
    return (
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
        </View>
        <Button
          backgroundColor={Colors.FACEBOOK}
          label='Login com Facebook'
          size='large'
          fullWidth
          borderRadius={0}
          style={styles.button}
          onPress={this.handleFacebook}
        />
      </View>
    )
    
  }
}
const styles = {
  button: {
    marginTop: 50,
  } as TextStyle,
  formWrapper: {
    flex: 1,
  } as ViewStyle,
  inputWrapper: {
    marginHorizontal: 20,
    flex: 1,
  } as TextStyle,
}
export default SignInForm
