/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet,FlatList,Alert, ActivityIndicator, Platform, Button, ImageBackground, StatusBar } from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation";
import { Item, List, ListItem, SearchBar } from "react-native-elements";
import ProjectList from './screens/ProjectList';
import ProjectArScene from './screens/ProjectArScene';
import Settings from './screens/Settings';
import Infos from './screens/Infos';
import NewSceneContent from './js/Test/NewSceneContent';

console.disableYellowBox = true;
const AppStackNavigator = createStackNavigator({
	ProjectList: {
	  screen: ProjectList
	},
	ProjectArScene: {
	  screen: ProjectArScene
	},
	Settings: {
	  screen: Settings
	}
	,
	Infos: {
	  screen: Infos
	}
})
export default createAppContainer(AppStackNavigator);