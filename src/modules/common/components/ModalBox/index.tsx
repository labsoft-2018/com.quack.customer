import * as React from 'react'
import { View } from 'react-native-ui-lib'
import Modal from 'react-native-modal'
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import { Colors } from '../../../../resources/colors'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export interface IQRCodeModalProps {
  isVisible: boolean;
  bodyStyle: ViewStyle;
  onRequestClose: () => void;
}

const ModalBox: React.SFC<IQRCodeModalProps> = ({
  children,
  isVisible,
  onRequestClose,
  bodyStyle,
}) => (
  <Modal isVisible={isVisible} useNativeDriver onBackdropPress={onRequestClose}>
    <View style={styles.modalBox}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onRequestClose}>
          <EvilIcons name='close' size={32} />
        </TouchableOpacity>
      </View>
      <View style={[ styles.body, bodyStyle]}>
        {children}
      </View>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    overflow: 'hidden',
  } as ViewStyle,
  header: {
    padding: 10,
    alignItems: 'flex-end',
  } as ViewStyle,
  body: {
    padding: 20,
  } as ViewStyle,
})

export default ModalBox
