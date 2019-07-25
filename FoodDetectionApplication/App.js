/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const App = () => {
  return (
    <CameraScreen/>
  );
};

class App extends Component{
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
          aspect={RNCamera.constants.Aspect.fill}>
          <Text style={styles.button} onPress={this.switchCamera.bind(this)}>切换</Text>
          <Text style={styles.button} onPress={this.takePicture.bind(this)}>拍照</Text>
        </RNCamera>
      </View>
    );
  }

  switchCamera() {
    var state = this.state;
    if(state.cameraType === RNCamera.constants.Type.back) {
      state.cameraType = RNCamera.constants.Type.front;
    }else{
      state.cameraType = RNCamera.constants.Type.back;
    }
    this.setState(state);
  }
 
  takePicture() {
    this.camera.capture()
      .then(function(data){
        alert("saved in\n"+data.path)
      })
      .catch(err => console.error(err));
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
  },
  button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  }
});

export default App;
