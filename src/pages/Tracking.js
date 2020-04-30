import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: new Animated.Value(0),
      b: new Animated.Value(0),
    };
  }

  driveBox1Down = () => {
    Animated.timing(this.state.a, {
      toValue: 200,
      useNativeDriver: false,
    }).start();
  };

  driveBox1Up = () => {
    Animated.timing(this.state.a, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  enableBox2Tracking = () => {
    Animated.timing(this.state.b, {
      toValue: this.state.a,
      duration: 500, // 可设置为0，立刻跟随
      useNativeDriver: false,
    }).start();
  };

  disableBox2Tracking = () => {
    this.state.b.stopAnimation();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Tracking </Text>
        <TouchableOpacity style={styles.button} onPress={this.driveBox1Down}>
          <Text>驱动方块1 下降</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.driveBox1Up}>
          <Text>驱动方块1 上升</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.enableBox2Tracking}>
          <Text>驱动方块2 跟随</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.disableBox2Tracking}>
          <Text>驱动方块2 取消跟随</Text>
        </TouchableOpacity>

        <View style={styles.boxWrap}>
          <Animated.View
            style={[
              styles.box1,
              {
                transform: [{translateY: this.state.a}],
              },
            ]}>
            <Text>1</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.box2,
              {
                transform: [{translateY: this.state.b}],
              },
            ]}>
            <Text>2</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
  },
  box1: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,0,0.3)',
  },
  box2: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,255,0.3)',
  },
  button: {
    backgroundColor: 'rgba(0,0,255,0.3)',
    paddingVertical: 10,
    marginTop: 10,
  },
});
