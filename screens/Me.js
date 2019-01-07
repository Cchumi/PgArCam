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
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet,FlatList,Alert, ActivityIndicator, Platform, Button, ImageBackground } from 'react-native'

class Me extends Component {
render () {
    return (
<View style={styles.flatview}  onPress={() => this.props.navigation.navigate('Me')}>
            <Text style={styles.name} /*onPress={this.GetFlatListItem.bind(this, item.name)}*/ > test</Text>
            <Text style={styles.email} /*onPress={this.GetFlatListItem.bind(this, item.email)}*/ > test2 </Text>
            <Text style={styles.email} /*onPress={this.submithandler.bind( this, item.launch )}*/> test3 </Text>
            
          </View>
    );
  }


}

export default Me;

const styles = StyleSheet.create({
  
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