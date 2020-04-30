/**
 * 将某一事件的参数，映射到动画值上，从而让动画值跟随事件参数变化，达成动画效果;
 * 比方说ScrollView的onScroll事件，该事件接受的事件参数如下：
 * {
 *    nativeEvent: {
 *      contentInset: {bottom, left, right, top},
 *      contentOffset: {x, y},
 *      contentSize: {height, width},
 *      layoutMeasurement: {height, width},
 *      zoomScale
 *    }
 *  }
 * 如果我们要将页面偏移contentOffset中的y，来驱动某一个动画（该动画的驱动值为top），做法如下
 * onScroll={
 *  Animated.event(
 *    [
 *      { nativeEvent: { contentOffset: { y: top } } }
 *    ]
 *  )
 * }
 *
 * static event(argMapping, config?)
 * argMapping是一个数组，用来映射原生事件函数的参数列表，映射的参数的位置必须一一对应，不关心的参数可以传null忽略.
 * 比如onSroll(event)事件只有一个event参数，映射如上例；
 * 比如onPanResponderMove(event, gestureState)事件有2个参数，如果只想映射第二个参数的内容，可以如下操作：
 * onPanResponderMove={
 *  Animated.event(
 *    [
 *      null,
 *      {dx: this._panX} // this._panX为动画值
 *    ]
 *  )
 * }
 *
 * config, 共2个参数，
 * {
 *  listener, // 用来监听原生的事件，比如onScroll
 *  useNativeDriver,
 * }
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.init();
  }

  init = () => {
    this.position = new Animated.ValueXY({x: 0, y: 0});

    this.responders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this.onStart,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.position.x,
            dy: this.position.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: this.onEnd,
      onPanResponderTerminate: this.onEnd,
    });
  };

  onStart = (event, gestureState) => {
    this.position.stopAnimation(({x, y}) => {
      this.position.flattenOffset();
      this.position.setOffset({
        x,
        y,
      });
    });
    // this.position.setOffset({
    //   x: this.position.x._value,
    //   y: this.position.y._value,
    // });
  };

  onEnd = (event, gestureState) => {
    Animated.decay(this.position, {
      velocity: {
        x: gestureState.vx,
        y: gestureState.vy,
      },
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.responders.panHandlers}
          style={[
            styles.box,
            {
              top: this.position.y,
              left: this.position.x,
            },
          ]}>
          <Text>1</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
