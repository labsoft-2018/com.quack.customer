import { Typography, Colors as RNULColors} from 'react-native-ui-lib';
import { Colors } from '../resources/colors'

export default () => {
  RNULColors.loadColors({
    light: Colors.WHITE,
    dark: Colors.DARK,
    primary: Colors.PRIMARY_COLOR,
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
