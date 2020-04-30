/**
 * 计算得来的动画值，只在给定区间内生效
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';

export default class diffClamp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(0),
    };
    this.state.top = Animated.multiply(
      Animated.diffClamp(this.state.y, 0, 50),
      -1,
    );
  }

  listener = ({nativeEvent}) => {
    console.info(nativeEvent);
  };

  renderItems = (num = 100) => {
    let views = [];
    for (let i = 0; i < num; i += 1) {
      views.push(<Text key={i}>{i}</Text>);
    }
    return views;
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.nav, {top: this.state.top}]}>
          <Text>导航条</Text>
        </Animated.View>

        <ScrollView
          contentContainerStyle={{paddingTop: 50}}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.y,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
              listener: this.listener,
            },
          )}>
          {this.renderItems()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    height: 50,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(255,0,255,1)',
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
