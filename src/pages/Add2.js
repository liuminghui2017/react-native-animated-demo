/**
 * 动画值与动画值相加
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Add2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y1: new Animated.Value(0),
      y2: new Animated.Value(50),
    };
    this.state.y3 = Animated.add(this.state.y1, this.state.y2);
  }

  reset = () => {
    this.setState(
      {
        y1: new Animated.Value(0),
        y2: new Animated.Value(50),
      },
      () => {
        this.setState({
          y3: Animated.add(this.state.y1, this.state.y2),
        });
      },
    );
  };

  down1 = () => {
    Animated.timing(this.state.y1, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };

  down2 = () => {
    Animated.timing(this.state.y2, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };

  down3 = () => {
    Animated.parallel([
      Animated.timing(this.state.y1, {toValue: 100, useNativeDriver: true}),
      Animated.timing(this.state.y2, {toValue: 100, useNativeDriver: true}),
    ]).start();
  };

  render() {
    return (
      <View>
        <Text>add</Text>
        <Text>方块3的动画值，是由方块1和方块2的动画值相加得来</Text>

        <TouchableOpacity style={styles.button} onPress={this.reset}>
          <Text>重置</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down1}>
          <Text>驱动方块1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down2}>
          <Text>驱动方块2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.down3}>
          <Text>同时驱动方块1和2</Text>
        </TouchableOpacity>

        <View style={styles.boxRow}>
          <Animated.View style={{transform: [{translateY: this.state.y1}]}}>
            <View style={styles.box}>
              <Text>1</Text>
            </View>
          </Animated.View>

          <Animated.View style={{transform: [{translateY: this.state.y2}]}}>
            <View style={styles.box2}>
              <Text>2</Text>
            </View>
          </Animated.View>

          <Animated.View style={{transform: [{translateY: this.state.y3}]}}>
            <View style={styles.box3}>
              <Text>3</Text>
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
    width: 340,
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
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,0,255,0.3)',
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
