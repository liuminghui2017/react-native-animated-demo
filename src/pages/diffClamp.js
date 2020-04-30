import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class diffClamp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>diffClamp(a, min, max)</Text>
        <Text>a为Animated.Value</Text>
        <Text>min, max为区间</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('diffClamp1')}>
          <Text>基础应用</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('diffClamp2')}>
          <Text>高级应用，监听页面滚动，显示/隐藏导航条</Text>
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
