import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Spring2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friction: 7,
      tension: 40,
      y: new Animated.Value(0),
    };
  }

  reset = () => {
    this.setState({
      y: new Animated.Value(0),
    });
  };

  frictionAdd = () => {
    this.setState((presState) => {
      return {
        friction: presState.friction + 1,
        y: new Animated.Value(0),
      };
    });
  };

  frictionMinus = () => {
    this.setState((presState) => {
      return {
        friction: presState.friction - 1,
        y: new Animated.Value(0),
      };
    });
  };

  tensionAdd = () => {
    this.setState((presState) => {
      return {
        tension: presState.tension + 1,
        y: new Animated.Value(0),
      };
    });
  };

  tensionMinus = () => {
    this.setState((presState) => {
      return {
        tension: presState.tension - 1,
        y: new Animated.Value(0),
      };
    });
  };

  down = () => {
    Animated.spring(this.state.y, {
      toValue: 100,
      friction: this.state.friction,
      tension: this.state.tension,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View>
        <Text>
          friction: {this.state.friction} 摩擦力，控制弹性，值越小，弹跳幅度越大
        </Text>
        <Text>
          tension: {this.state.tension} 张力，控制弹跳速度，值越大，弹跳越快
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.frictionAdd}>
          <Text>friction +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.frictionMinus}>
          <Text>friction -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.tensionAdd}>
          <Text>tension +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.tensionMinus}>
          <Text>tension -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down}>
          <Text>friction 和 tension 组合</Text>
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
