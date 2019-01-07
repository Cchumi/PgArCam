'use strict';

import React, { Component } from 'react';
import List from './List.js'
import {
  AppRegistry,
  View,
  ListView,
  StyleSheet,
  Text 
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "381814B3-73D4-4B04-B481-FB85528A89BE";

var vrScenes = {
    '360PhotoTour': require('../js/360PhotoTour/MainScene'),
}

var arScenes = {
  'BusinessCard' : require('../js/ARBusinessCard/BusinessCard.js'),
}
/*var tesssttt = this.props.testt*/
//console.log(this.props.testt)

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
     <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['BusinessCard'],
          }}
          apiKey={apiKey} />

        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['360PhotoTour'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});

module.exports = ViroCodeSamplesSceneNavigator;
