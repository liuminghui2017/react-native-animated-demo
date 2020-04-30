import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Spring3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      x: new Animated.Value(0),
    };
  }

  reset = () => {
    this.setState({
      x: new Animated.Value(0),
    });
  };

  stiffnessAdd = () => {
    this.setState((presState) => {
      return {
        stiffness: presState.stiffness + 10,
        x: new Animated.Value(0),
      };
    });
  };

  stiffnessMinus = () => {
    this.setState((presState) => {
      return {
        stiffness: presState.stiffness - 10,
        x: new Animated.Value(0),
      };
    });
  };

  dampingAdd = () => {
    this.setState((presState) => {
      return {
        damping: presState.damping + 1,
        x: new Animated.Value(0),
      };
    });
  };

  dampingMinus = () => {
    this.setState((presState) => {
      return {
        damping: presState.damping - 1,
        x: new Animated.Value(0),
      };
    });
  };

  massAdd = () => {
    this.setState((presState) => {
      return {
        mass: presState.mass + 1,
        x: new Animated.Value(0),
      };
    });
  };

  massMinus = () => {
    this.setState((presState) => {
      return {
        mass: presState.mass - 1,
        x: new Animated.Value(0),
      };
    });
  };

  down = () => {
    Animated.spring(this.state.x, {
      toValue: 100,
      stiffness: this.state.stiffness,
      damping: this.state.damping,
      mass: this.state.mass,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View>
        <Text>stiffness: {this.state.stiffness} 僵硬，值越大，速度越快</Text>
        <Text>
          damping: {this.state.damping} 摩擦衰减，值越大，减速越快，弹跳次数越少
        </Text>
        <Text>
          mass: {this.state.mass} 物体质量, 值越大速度越慢，停下时间越久
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.stiffnessAdd}>
          <Text>stiffness +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.stiffnessMinus}>
          <Text>stiffness -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.dampingAdd}>
          <Text>damping +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.dampingMinus}>
          <Text>damping -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.massAdd}>
          <Text>mass +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.massMinus}>
          <Text>mass -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down}>
          <Text>stiffness,damping 和 mass 组合</Text>
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
