import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Spring1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      bounciness: 10,
      y: new Animated.Value(0),
    };
  }

  reset = () => {
    this.setState({
      y: new Animated.Value(0),
    });
  };

  speedAdd = () => {
    this.setState((presState) => {
      return {
        speed: presState.speed + 0.5,
        y: new Animated.Value(0),
      };
    });
  };

  speedMinus = () => {
    this.setState((presState) => {
      return {
        speed: presState.speed - 0.5,
        y: new Animated.Value(0),
      };
    });
  };

  bouncinessAdd = () => {
    this.setState((presState) => {
      return {
        bounciness: presState.bounciness + 1,
        y: new Animated.Value(0),
      };
    });
  };

  bouncinessMinus = () => {
    this.setState((presState) => {
      return {
        bounciness: presState.bounciness - 1,
        y: new Animated.Value(0),
      };
    });
  };

  down = () => {
    Animated.spring(this.state.y, {
      toValue: 100,
      speed: this.state.speed, // 弹跳速度
      bounciness: this.state.bounciness, // 弹性，值越大，跳动幅度越大
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View>
        <Text>speed: {this.state.speed} 弹跳速度</Text>
        <Text>
          bounciness: {this.state.bounciness} 弹性，值越大，跳动幅度越大
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.speedAdd}>
          <Text>speed +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.speedMinus}>
          <Text>speed -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.bouncinessAdd}>
          <Text>bounciness +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.bouncinessMinus}>
          <Text>bounciness -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down}>
          <Text>speed 和 bounciness 组合</Text>
        </TouchableOpacity>

        <Animated.View style={{transform: [{translateY: this.state.y}]}}>
          <View style={styles.box} />
        </Animated.View>
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
