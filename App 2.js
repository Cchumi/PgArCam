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
import ProjectList from './screens/ProjectList'
import ProjectArScene from './screens/ProjectArScene'

console.disableYellowBox = true;
const AppStackNavigator = createStackNavigator({
	ProjectList: {
	  screen: ProjectList
	},
	ProjectArScene: {
	  screen: ProjectArScene
	}
})
export default createAppContainer(AppStackNavigator);