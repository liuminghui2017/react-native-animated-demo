import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default class Decay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: new Animated.Value(0),
      velocity: 1,
      deceleration: 0.997,
    };
  }

  velocityAdd = () => {
    this.setState((presState) => {
      return {
        velocity: presState.velocity + 0.1,
        x: new Animated.Value(0),
      };
    });
  };

  velocityMinus = () => {
    this.setState((presState) => {
      return {
        velocity: presState.velocity - 0.1,
        x: new Animated.Value(0),
      };
    });
  };

  decelerationAdd = () => {
    this.setState((presState) => {
      return {
        deceleration: presState.deceleration + 0.001,
        x: new Animated.Value(0),
      };
    });
  };

  decelerationMinus = () => {
    this.setState((presState) => {
      return {
        deceleration: presState.deceleration - 0.001,
        x: new Animated.Value(0),
      };
    });
  };

  reset = () => {
    this.setState({
      x: new Animated.Value(0),
    });
  };

  run = () => {
    Animated.decay(this.state.x, {
      toValue: 100,
      velocity: this.state.velocity,
      deceleration: this.state.deceleration,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>以给定的初始速度，逐渐减速到0停下</Text>
        <Text>velocity: {this.state.velocity} 初始速度</Text>
        <Text>
          deceleration: {this.state.deceleration} 衰减系数，(0, 1)
          值越小，速度越快降到0
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.velocityAdd}>
          <Text>velocity +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.velocityMinus}>
          <Text>velocity -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.decelerationAdd}>
          <Text>deceleration +</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.decelerationMinus}>
          <Text>deceleration -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.run}>
          <Text>启动</Text>
        </TouchableOpacity>

        <Animated.View style={{transform: [{translateX: this.state.x}]}}>
          <View style={styles.box} />
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
