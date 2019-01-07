'use strict';

import React, { Component } from 'react'
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet,FlatList,Alert, ActivityIndicator, Platform, Button } from 'react-native'


//import ajax from './service/FetchData'; 
//import ArScene from './ArScene.js'
import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';


var apiKey = "381814B3-73D4-4B04-B481-FB85528A89BE";
var createReactClass = require('create-react-class');
/*var arScenes = {
  'BusinessCard' : require('../js/ARBusinessCard/BusinessCard.js'),
}*/

class List extends Component {
 static navigationOptions =
    {
        title: "List Items"
    };

constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showArScene: false
    };

    //this.rowCallback = this.rowCallback.bind(this);
  }

  
  componentDidMount() {

  console.log(this.state.showArScene);
       return fetch('http://pierregagliardi.com/reactapp/test.json')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
renderArScene = () => {
  if (!this.state.showArScene) return '';

return (
/*[*/<Button
 /*icon={{
    name: 'arrow-right',
    size: 15,
    color: 'white'
  }}*/
  onPress={this.submithandler.bind( this )} 
  title='BUTTON WITH ICON OBJECT'
/>/*,
   <ArScene  testt={this.state.showArScene} />]*/
 );
 }
 
 

// ES6 priavte method syntax
handleButtonClick = () => {


 this.setState({showArScene: true});
}

   FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
   GetFlatListItem (name) {
   
  Alert.alert(name);

  }
  
 GetFlatListItemLaunch (name) {
 //Alert.alert(name);
this.setState({
	showArScene: true
	});
	//Alert.alert(this.state.show);
//module.exports = ViroSceneNav;
  }
  
   submithandler (name) {
    console.log('Inside placesubmithandler ' + name);
    var jsFile = name;
    console.log(this.state.showArScene);
    this.setState(state => ({ showArScene: !state.showArScene }));
   // this.setState({showArScene: true})
    console.log(jsFile);
  }
  /* render() {
      return (
        <View style={styles.container} >
        <Text style={styles.h2text}>
          Black Order
        </Text>
          <FlatList
          data={this.state.names}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
          }
          keyExtractor={item => item.email}
        />
      </View>
      )
   }*/
   
render() {
 
    if (this.state.isLoading) {
      return (
         <View style={styles.container} >
        <Text style={styles.h2text}>
          Black Order
        </Text>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (

<View style={styles.MainContainer}>

//{this.renderArScene()}
console.log(this.state.showArScene);

       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
 
          renderItem={({item}) => <View style={styles.flatview}>
            <Text style={styles.name} onPress={this.GetFlatListItem.bind(this, item.name)} > {item.name} </Text>
            <Text style={styles.email} onPress={this.GetFlatListItem.bind(this, item.email)} > {item.email} </Text>
            <Text style={styles.email} onPress={this.submithandler.bind( this, item.launch )}> {item.launch} </Text>
            
          </View>

        }
 		keyExtractor={(item, index) => index.toString()}
          
         />
    
    
</View>
            
    );
  }
}

class ClickedItem extends Component
{
    static navigationOptions = 
    {
        title: "Selected Item"
    };

    render()
    {
        return(
            <View style = { styles.container2 }>
                <Text style = { styles.text }>You Selected: { this.props.navigation.state.params.item.name.toUpperCase() }</Text>
            </View>
        );
    }
}




export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});