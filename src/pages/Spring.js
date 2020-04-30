import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Spring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View>
        <Text> Spring </Text>
        <Text>
          定义弹簧般的弹性运动，配置时，只能用下面三种组合之一进行配置
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Spring1')}>
          <Text>speed 和 bounciness 组合</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Spring2')}>
          <Text>friction 和 tension 组合</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Spring3')}>
          <Text>stiffness、damping 和 mass 组合</Text>
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
