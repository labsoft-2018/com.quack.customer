import * as React from 'react'
import { View, Text } from 'react-native-ui-lib'
import { StyleSheet, Image, NativeSyntheticEvent, NativeSegmentedControlIOSChangeEvent, SegmentedControlIOS } from 'react-native'
import { TrackOrderStatus } from './TrackOrderStatus'
import { TrackOrderMap } from './TrackOrderMap'

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
      <View flex>
        <View row centerV marginB-20>
          <Image
            resizeMode="contain"
            source={{uri: `https://placehold.it/400x400`}}
            style={styles.carrierImage}
          />
          <View>
            <Text>Rafael Ribeiro Correia</Text>
            <Text>(11) 94343-3330</Text>
            <Text>Tempo estimado: 15:52</Text>
          </View>
        </View>
        <SegmentedControlIOS
          values={['Mapa', 'Status']}
          selectedIndex={this.state.selectedTab}
          onChange={this.handleSegmentedControlChange}
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
    marginRight: 20
  }
})