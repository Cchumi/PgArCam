'use strict';

/**
 * Pull in all imports required for the controls within this scene.
 */
import React, { Component} from 'react';
import {AppRegistry, View} from 'react-native';

import {
    ViroScene,
    Viro360Image,
    ViroAnimations,
    ViroSceneNavigator,
    ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroVideo,
  ViroQuad
} from 'react-viro';

/**
 * Set all the images and assets required in this scene.
 */

var images360Array = [{uri: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2006/11/360-panorama-matador-seo.jpg"},
                      {uri: "https://www.eposts.co/wp-content/uploads/2016/09/SonyCenter_360panorama.jpg"},
                      {uri: "https://www.amanda-justin.in/wp-content/uploads/2013/09/Twin-Falls-Rainbow-360.jpg"}]
var apiKey = "381814B3-73D4-4B04-B481-FB85528A89BE";
export default class NewSceneContent extends Component {

  constructor(props) {
      super(props);

      this.showSceneById = this.showSceneById.bind(this);
      this.renderNewScene = this.renderNewScene.bind(this);
      this.renderImagen = this.renderImagen.bind(this);
      this._setNavigator = this._setNavigator.bind(this);
      this.sceneNavigator = null;
  }

  _setNavigator(ref) {
    this.sceneNavigator = ref;
  }

  showSceneById(sceneId) {
      var returnScene = null;
      this.sceneNavigator.push({scene: this.renderNewScene});
  }

  renderNewScene() {
      return (
          <ViroScene>
              <ViroNode>
                  <Viro360Image
                      source={images360Array[Math.floor((Math.random() * 3))]}
                    />
                  <ViroText text="Click to Next Scene!"
                        onClick={() => this.showSceneById("salida-campo")}
                         position={[0,0, -3]} />
              </ViroNode>
          </ViroScene>
      );
  }

  renderImagen() {
      return (
          <ViroScene>
                  <Viro360Image
                      rotation={[0, 0, 0]}
                      source={images360Array[0]} />

                  <ViroText text="Click to Next Scene!"
                      onClick={() => this.showSceneById("salida-campo")}
                       position={[0,0, -3]} />
          </ViroScene>
      );
  }

  render() {
      return (
          <View style={{flex: 1}}>
            <ViroSceneNavigator ref={this._setNavigator}
                apiKey={apiKey}
                vrModeEnabled={false}
                initialScene={{ scene: this.renderImagen}} >
            </ViroSceneNavigator>
          </View>
      );
  }
}

AppRegistry.registerComponent('ViroSample', () => NewSceneContent);
