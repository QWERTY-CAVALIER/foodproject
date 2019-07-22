import React, { Component } from 'react';
import { ScrollView, 
  StyleSheet, 
  AppRegistry,
  Dimensions,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Camera from 'react-native-camera'

export default function LinksScreen() {
  return (
    <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={Camera.constants.Type.back}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
  );
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
