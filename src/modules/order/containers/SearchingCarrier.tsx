import * as React from 'react'
import { SearchingCarrier } from '../components/SearchingCarrier'
import { CarrierFound } from '../components/CarrierFound'
import { Text } from 'react-native-ui-lib'
import { NavigationComponentProps } from 'react-native-navigation'
import { Screens } from '../../../navigation/screen-names'
const EventEmitter = require('events').EventEmitter

export const eventEmitter = new EventEmitter()

enum SearchingState {
  SEARCHING,
  FOUND,
  ERROR,
}
export interface ISearchingCarrierContainerState {
  searchingState: SearchingState
}
export class SearchingCarrierContainer extends React.Component<NavigationComponentProps, ISearchingCarrierContainerState> {
  private timeout: NodeJS.Timer

  public state = {
    searchingState: SearchingState.SEARCHING
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        searchingState: SearchingState.FOUND
      })
    }, 10000)
  }

  private handleCancel = () => {
    clearTimeout(this.timeout)
    this.props.navigator.dismissModal()
  }

  private handleTrackOrderPress = () => {
    this.props.navigator.dismissAllModals()
    eventEmitter.emit('switchToTab', 1)
    setTimeout(() => {
      eventEmitter.emit('push', {
        screen: Screens.TrackOrder
      })
    }, 50)
    
  }

  public render() {
    switch (this.state.searchingState) {
      case SearchingState.SEARCHING:
      return (
        <SearchingCarrier onCancelPress={this.handleCancel} />
      )
      case SearchingState.FOUND:
      return (
        <CarrierFound
          name="Teste"
          onTrackOrderPress={this.handleTrackOrderPress} 
        />
      )
      case SearchingState.ERROR:
      return (
        <Text>Error!</Text>
      )
    }
  }
}