/**
 * 动画值与常量值相加
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Add1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(0),
    };
    this.state.y2 = Animated.add(this.state.y, 100);
  }

  reset = () => {
    this.setState(
      {
        y: new Animated.Value(0),
      },
      () => {
        this.setState({
          y2: Animated.add(this.state.y, 100),
        });
      },
    );
  };

  down1 = () => {
    Animated.timing(this.state.y, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };

  down2 = () => {
    Animated.timing(this.state.y2, {
      toValue: 200,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View>
        <Text>add</Text>
        <Text>方块2的动画值，是由方块1的动画值+100计算得来，不能直接驱动</Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down1}>
          <Text>驱动方块1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down2}>
          <Text>驱动方块2（会报错）</Text>
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
