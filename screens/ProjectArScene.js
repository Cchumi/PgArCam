'use strict';

import React, { Component } from 'react';
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
//import jsFile from 'http://pierregagliardi.com/reactapp/js/ARBusinessCard/BusinessCard.js'; 

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "381814B3-73D4-4B04-B481-FB85528A89BE";


var vrScenes = {
    '360PhotoTour': require('../js/360PhotoTour/MainScene'),
}

var arScenes = {
  //'BusinessCard' : require('://pierregagliardi.com/reactapp/js/ARBusinessCard/BusinessCard.js'),
  'BusinessCard' : require('../js/ARBusinessCard/BusinessCard.js'),
  'Test' : require('../js/Test/NewSceneContent.js'),
  
}


var showARScene = true;

export default class ProjectArScene extends Component {


static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });
constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      isLoading: false,
      showArScene: false
    };
  }


render() {

const { navigation } = this.props;
const id = navigation.getParam('itemId') || '';
const sceneJsonConfigs = navigation.getParam('sceneJsonConfig') || '';
 const { params } = this.props.navigation.state;
const itemId = params ? params.itemId : null;
const name = params ? params.itemName : null;
const imageMarker = params ? params.imageMarker : null;
const jsonRender = params ? params.jsonRender : null;
const sceneJsonConfig = params ? params.sceneJsonConfig : null;
//alert(jsonRender);
    if (showARScene) {
   return (
     <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['Test'],passProps:{sceneJsonConfig:sceneJsonConfig, name:name,itemId:itemId, imageMarker: imageMarker, jsonRender: jsonRender}}}
          apiKey={apiKey} 

          />

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
  

  }
//});

//module.exports = ViroCodeSamplesSceneNavigator;
