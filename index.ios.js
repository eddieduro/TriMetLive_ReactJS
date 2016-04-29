'use strict';

let SearchPage = require('./SearchPage');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
      </View>
    );
  }
}

class TriMetLiveApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
          title: 'TriMetLive',
          component: SearchPage,
        }}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  wrapper: {
    flex: 1,
  },
});

AppRegistry.registerComponent('TriMetLiveApp', () => TriMetLiveApp);
