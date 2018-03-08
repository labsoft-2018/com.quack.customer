import * as React from 'react'
import { Text, View } from 'react-native-ui-lib'
import Timeline from 'react-native-timeline-listview'

const data = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
]
export class TrackOrderStatus extends React.Component {
  render() {
    return (
      <View flex>
        <Timeline
          data={data}
        />
      </View>
    )
  }
}