/**
 * 取余数
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Modulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(1),
    };
    this.state.y2 = Animated.modulo(this.state.y, 180);
  }

  reset = () => {
    this.setState(
      {
        y: new Animated.Value(1),
      },
      () => {
        this.setState({
          y2: Animated.modulo(this.state.y, 180),
        });
      },
    );
  };

  down = () => {
    Animated.timing(this.state.y, {
      toValue: 200,
      useNativeDriver: true,
    }).start();
  };

  up = () => {
    Animated.timing(this.state.y, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View>
        <Text>diffClamp</Text>
        <Text>方块滑动距离：0 -> 200</Text>
        <Text>模值: 180, 对180进行求余数操作</Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down}>
          <Text>下滑方块1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.up}>
          <Text>上滑方块1</Text>
        </TouchableOpacity>

        <View style={styles.boxRow}>
          <Animated.View style={{transform: [{translateY: this.state.y}]}}>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
          </Animated.View>

          <Animated.View style={{transform: [{translateY: this.state.y2}]}}>
            <View style={styles.box2}>
              <Text>2</Text>
            </View>
          </Animated.View>
        </View>
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
  boxRow: {
    flexDirection: 'row',
    width: 220,
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,255,0.3)',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
