import React, { Component } from 'react';
import { ScrollView, 
  StyleSheet, 
  AppRegistry,
  Dimensions,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import RNCamera from 'react-native-camera'

export default function LinksScreen() {
  return (
    <CameraScreen/>
  );
}

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

LinksScreen.navigationOptions = {
  title: 'Links',
};

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
