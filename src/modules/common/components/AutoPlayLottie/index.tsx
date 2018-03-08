import * as React from 'react'
import LottieView, { AnimationProps } from 'lottie-react-native'

export default class AutoPlayLottie extends React.Component<AnimationProps, {}> {
  animation: any
  componentDidMount() {
    this.animation.play()
  }
  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        {...this.props}
      />
    )
  }
}