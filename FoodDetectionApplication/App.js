/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import RNCamera from 'react-native-camera';

const App = () => {
  return (
    <CameraScreen/>
  );
};

class CameraScreen extends Component{
  //构造函数
  constructor(props) {
      super(props);
      this.state = {
            cameraType: RNCamera.constants.Type.back
      };
  }
  render(){
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          aspect={RNCamera.constants.Aspect.fill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  }
});

export default App;
