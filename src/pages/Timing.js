import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default class Timing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: new Animated.Value(0),
    };
  }

  left = () => {
    Animated.timing(this.state.x, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  right = () => {
    Animated.timing(this.state.x, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> timing </Text>
        <Text>按速度曲线运动, 默认easing</Text>
        <Animated.View style={{transform: [{translateX: this.state.x}]}}>
          <View style={styles.box} />
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={this.left}>
          <Text>点击向左滑动</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.right}>
          <Text>点击向右滑动</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,0,0.3)',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,255,0.3)',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
