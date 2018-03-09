import { Typography, Colors as RNULColors} from 'react-native-ui-lib';
import { Colors } from '../resources/colors'

export default () => {
  RNULColors.loadColors({
    primary: Colors.PRIMARY_COLOR,
    secondary: Colors.SECONDARY_COLOR,
    light: Colors.WHITE,
    dark: Colors.DARK,
    white: Colors.WHITE,
    grey180: Colors.GRAY_180,
    success: Colors.SUCCESS,
  });
  Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300'},
    h2: {fontSize: 46, fontWeight: '300'},
    h3: {fontSize: 36, fontWeight: '300'},
    h4: {fontSize: 28, fontWeight: '300'},
    h5: {fontSize: 20, fontWeight: '300'},
    h6: {fontSize: 14, fontWeight: '300'},
    h1Bold: {fontSize: 20, fontWeight: '700'},
  });
}
