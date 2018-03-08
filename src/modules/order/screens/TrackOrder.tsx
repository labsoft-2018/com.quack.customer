import * as React from 'react'
import ScreenWrapper from '../../common/components/ScreenWrapper/index'
import { NavigationComponentProps } from 'react-native-navigation'
import { TrackOrder } from '../components/TrackOrder'

export class TrackOrderScreen extends React.Component<NavigationComponentProps> {
  public render() {
    return (
      <ScreenWrapper>
        <TrackOrder />
      </ScreenWrapper>
    )
  }
}