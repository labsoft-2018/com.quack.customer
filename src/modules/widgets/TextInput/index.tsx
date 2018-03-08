import * as React from 'react'
import { TextInput } from 'react-native-ui-lib'

const TextInputWidget = ({
  input,
  meta,
  ...props,
}) => (
  <TextInput
    onChangeText={input.onChange}
    value={input.value}
    error={meta.error}
    enableErrors
    {...props}
  />
)

export default TextInputWidget
