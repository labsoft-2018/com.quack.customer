import SignInForm from '../../components/SignInForm'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Alert, AsyncStorage } from 'react-native';
import { loadMainScreen } from '../../../../navigation/actions'

const CARRIER_SIGN_IN_WITH_EMAIL = gql`
mutation ($email: String, $password: String){
  customerSignInWithFacebook(facebookToken: $facebookToken) {
    user {
      id
      type
      email
    }
    token
  }
}
`

const storeToken = (token: string) => {
  return AsyncStorage.setItem('token', token);
}

export interface IResponse {
  customerSignInWithFacebook: {
    token: string
  }
}

export interface IProps {
  customerSignInWithFacebook: (facebookToken: string) => void
}

export default graphql<IResponse, {}, IProps>(CARRIER_SIGN_IN_WITH_EMAIL, {
  props: ({ mutate }) => ({
    customerSignInWithFacebook: async (facebookToken: string) => {
      try {
        const response = await mutate({
          variables: {
            facebookToken
          },
        })
        await storeToken(response.data.customerSignInWithFacebook.token)
        loadMainScreen()
      } catch (err) {
        Alert.alert('Error', err.toString())
      }
    },
  }),
})(SignInForm)
