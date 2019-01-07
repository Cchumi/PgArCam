/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity,TouchableWithoutFeedback, StyleSheet, Platform, Button, Picker, Switch, ScrollView } from 'react-native'
import {  Icon } from "react-native-elements";

//import Icon from 'react-native-vector-icons/FontAwesome';
class Settings extends Component {

static navigationOptions = ({ navigation }) => {
        return {
            title: "Settings",
            headerRight: (
            <TouchableWithoutFeedback onPress={ () => navigation.navigate('Infos') } >
                <Icon
        		name="info"
        		color="white"
        		iconStyle={{ paddingRight: 10 }}
      			/>
            </TouchableWithoutFeedback>
            ),
        	headerMode: 'screen',
        	mode: "card",
        	//header: null,
    		headerStyle: {
      			backgroundColor: '#f4511e',
    		},
    		headerTintColor: '#fff',
    		headerTitleStyle: {
      			fontWeight: 'bold',
   			},
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0 
            }
        }
};
constructor(props) {
    super(props);

    this.state = {
      switch1Value: false,
      username: "",
      allowPushNotifications: false,
      gender: "",
    };
  }
render () {
    return (
		<ScrollView>

      
    </ScrollView>
    );
  }


}

export default Settings;


const styles = StyleSheet.create({
    container: {
    flex: 1,
    //marginTop: 50,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 0,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'white'
  },
  email: {
    color: 'red'
  },
  backgroundImage: {
  paddingTop: 30,
  flex: 1,
    alignSelf: 'stretch',
    width: null,
   // flex: 1,
    //resizeMode: 'cover', // or 'stretch'
  }
  
});