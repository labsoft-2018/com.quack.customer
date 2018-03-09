import * as React from 'react'
import { View, Text } from 'react-native-ui-lib'
import { StyleSheet, Image, NativeSyntheticEvent, NativeSegmentedControlIOSChangeEvent, SegmentedControlIOS, ImageStyle } from 'react-native'
import { TrackOrderStatus } from './TrackOrderStatus'
import { TrackOrderMap } from './TrackOrderMap'
import { Colors } from '../../../resources/colors'

export interface TrackOrderState {
  selectedTab: number
}

export class TrackOrder extends React.Component<any, TrackOrderState> {
  public state = {
    selectedTab: 0
  }
  private handleSegmentedControlChange = (e: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    this.setState({
      selectedTab: e.nativeEvent.selectedSegmentIndex
    });
  }
  public render() {
    return (
      <View flex padding-20>
        <View row centerV marginB-20>
          <Image
            resizeMode="contain"
            source={{uri: `https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE1ODA0OTcxMzI4Mzc0Mjg1/pele-39221-1-402.jpg`}}
            style={styles.carrierImage}
          />
          <View>
            <Text h5 marginB-10>Rafael Ribeiro Correia</Text>
            <Text marginB-5>(11) 94343-3330</Text>
            <Text>Tempo estimado: 15:52</Text>
          </View>
        </View>
        <SegmentedControlIOS
          tintColor={Colors.PRIMARY_COLOR}
          values={['Mapa', 'Status']}
          selectedIndex={this.state.selectedTab}
          onChange={this.handleSegmentedControlChange}
          style={{marginBottom: 20}}
        />
        {this.state.selectedTab === 0 && (
          <TrackOrderMap />
        )}
        {this.state.selectedTab === 1 && (
          <TrackOrderStatus />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  carrierImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 4,
  } as ImageStyle
})