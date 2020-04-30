import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.button}>
          <Button
            title="decay"
            onPress={() => this.props.navigation.navigate('Decay')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="timing"
            onPress={() => this.props.navigation.navigate('Timing')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="spring"
            onPress={() => this.props.navigation.navigate('Spring')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="add"
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Modulo"
            onPress={() => this.props.navigation.navigate('Modulo')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="diffClamp"
            onPress={() => this.props.navigation.navigate('diffClamp')}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="event"
            onPress={() => this.props.navigation.navigate('Event')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  button: {
    marginBottom: 15,
  },
});
