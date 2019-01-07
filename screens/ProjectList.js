'use strict';

import React, { Component } from 'react'
import { AppRegistry, Text, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, FlatList, Alert, ActivityIndicator, Platform, Button, ImageBackground, RefreshControl, StatusBar, Image, ScrollView, SectionList } from 'react-native'
import {  List, ListItem, SearchBar, Icon } from "react-native-elements";
//import ImageOverlay from "react-native-image-overlay";
//import Icon from "react-native-vector-icons/MaterialIcons";
//import ajax from './service/FetchData'; 
//import ArScene from './ArScene.js'

var createReactClass = require('create-react-class');
/*var arScenes = {
  'BusinessCard' : require('../js/ARBusinessCard/BusinessCard.js'),
}*/
const webUrl = 'http://pierregagliardi.com/reactapp/';
const numColumns = 1;

const dataSource = [
{data: [{name: 'nader'},{name: 'tester'}], key: 'BASKETBALL'},
{data: [{name: 'nadter'},{name: 'grrrr'}], key: 'BASKETBAL'}
]
let userInput = '';


class ProjectList extends Component {
  //Bellow is navigation method and passing JSON as state
  openSettingsss () {

    this.props.navigation.navigate('Settings', {
      title: "Settings",
      
    });
  };
  
openSettings = ()  => { 
     alert("ok"); 
    } 
static navigationOptions = ({ navigation }) => {
        return {
            title: "Projets",
            headerRight: (
            <TouchableWithoutFeedback onPress={ () => navigation.navigate('Settings') } >
                <Icon
        		name="settings"
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
            },
            tabBarIcon: ({ tintColor}) => {
                return <Icon name = "favorite" size={26} color={tintColor} />;
            } 
        }
};

constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      isLoading: true,
      showArScene: false,
      isFetching: false,
      assets: [],
      totalItemNumber: 0,
      filteredItemNumber: 0,
      searchText: "",
      dataToShow: [],
      search: false,
      arrayholder: [],
      check: [],
    };


  }
/*closeActivityIndicator = () => setTimeout(() => this.setState({
   isLoading: true }), 6000)
*/
    componentWillMount() {
    
	this.makeRemoteRequest();
	
	//this.openDetails = this.openDetails.bind(this);
	//this._onRefresh = this._onRefresh.bind(this);
	//this._onfilterSearch = this._onfilterSearch.bind(this);
     }
  componentDidMount() {
	//this.makeRemoteRequest();
	this.openDetails = this.openDetails.bind(this);
	this.openSettings = this.openSettings.bind(this);
	this._onRefresh = this._onRefresh.bind(this);
	//this._onfilterSearch = this._onfilterSearch.bind(this);
     }
     
     makeRemoteRequest = () => {
     //console.log(this.state.showArScene);
    //const { page, seed } = this.state;
    
    const jsonUrl = 'http://pierregagliardi.com/reactapp/test2.json';
    const jsonFile = webUrl + 'test2.json';
    this.setState({ loading: true, isLoading: true, });

    fetch(jsonFile)
      .then(res => res.json())
      .then(res => {
      //alert('success1');
        this.setState({
          isLoading: false,
          isFetching: true,
          refreshing: false,
          data: res,
          arrayholder: res,
          dataToShow: res,
          totalItemNumber: res.length,
        }, function() { 
             // In this block you can do something with new state.
        });
      })
      .catch(error => {
      //alert(error);
      console.error(error);
        this.setState({ error, loading: false });
      });
  };
  
/* REFRESH */  
  
  _onRefresh() {
  this.setState({
    refreshing: true,
    searchText: "",
  })
  this.makeRemoteRequest()
  setTimeout(function() {
    this.setState({
      refreshing: false,
      
    })
  }.bind(this),10000)
}




/* FILTER SEARCH TEXT  */

/* _onfilterSearch(text){
    const newData = this.state.data.filter((item)=>{
      const itemData = item.name
      const textData = text
      return itemData.indexOf(textData)>-1
    }

    );
    this.setState({
      text:text,
      data: this.state.data.cloneWithRows(newData),
      searchText: text,
      //data: newData // after filter we are setting users to new array
    });
  };*/
  
searchFilterFunctionssssssssss(term) {
let matchedItemsArr = [];
//Run a loop to check if the input value match the title.
for(let i = 0; i < this.state.data.length; i++){
  if(this.state.data[i].key.includes(term)){
    matchedItemsArr.push(this.state.data[i]);
  }
 }
 //If the input is empty set the data back to its origin data
/* if(term === ''){
    this.setState({ dataToShow: ClusterData, searchTerm: term });
  }else{*/
 this.setState({ data: matchedItemsArr, searchText: term });
/* }*/
} 
  
  
searchFilterFunctionff = (term) => {
        let search = term.toLowerCase();
        this.setState({
            check: this.state.data.filter(item => item.name.toLowerCase().includes(search))
        });
    }


searchFilterFunctionss = term => {
    let matchedItemsArray = []
    if(term === ''){
      this.setState({isLoading: false})
    }else{
      this.setState({isLoading: true}, function(){
        this.state.data.map((item) => {
          if(item.key.includes(term)){
            matchedItemsArray.push(item)
          }
        })
        this.setState({data:matchedItemsArray, searchText:term,filteredItemNumber: matchedItemsArray.length,isLoading: false,})
      })
    }
  }

searchFilterFunctionututut = text => {
     
     const newData = this.arrayholder.data.filter(function(item){
         const itemData = item.name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         data: newData,
         searchText: text
     })
 }
searchFilterFunctionkkkk = text => {    
this.setState({isLoading: true});
//let searchText = event.nativeEvent.text;
 this.setState({searchText: text});
  const newData = this.arrayholder.filter(item => {  
  const itemData = item.name.toUpperCase();
    /*const itemData = `${item.item.name.toUpperCase()}   
     ${item.item.folderName.toUpperCase()} ${item.item.email.toUpperCase()}`;*/
     const textData = text.toUpperCase();
     //alert(item.item.name.toUpperCase());
      
     return itemData.indexOf(textData) > -1;    
  });    
  this.setState({ data: newData,filteredItemNumber: newData.length,isLoading: false,});  
};

searchFilterFunction = text => {

 var updatedList = this.state.data;
      const textData = text.toUpperCase();
 updatedList = updatedList.filter((item =>{
 return item.name.toLowerCase().search(
 textData.value.toLowerCase()) !== -1;
 }) );
 this.setState({ 
 data: updatedList,
 });
 if (updatedList == 0 ) {
 this.setState({ 
 message: true,
 });
 } else {
 this.setState({ 
 message: false,
 });
 
 
 }
 
 }


searchUpdated = (term) => {
    let matchedItemsArray = []
    if(term === ''){
        this.setState({search: false, dataToShow: this.state.data})
        userInput = ''
    }else{
        this.setState({search:true, dataToShow: this.state.data}, function(){
            this.state.dataToShow.map((item) => {
                 item.map((data) => {
                     if(data.key.includes(term)){
                         matchedItemsArray.push(data)
                     }
                 })
            })
       this.setState({dataToShow:matchedItemsArray})
       userInput = ''
       })
   }
}

filterArray = (text) => {
        let search = text.toLowerCase();
        this.setState({
            check: this.state.data.filter(obj => obj.key.toLowerCase().includes(search))
        });
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
  };
  
   renderHeaderList = () => {
   return ( <View style={styles.searchBarContainer}>
    <SearchBar
		lightTheme
		platform="ios"
  		clearIcon
  		showLoading
  		placeholder="Recherche..."
  		autoCorrect={false}
  		onChangeText={(val) => { this.filterArray(val) }}
  	/>
</View>)

  };

 
    _keyExtractor = (item, index) => item.id;


  //Bellow is navigation method and passing JSON as state
  openDetails = (  text ) => {

    this.props.navigation.navigate('ProjectArScene', {
      title: text.name,
      itemId: this.state.data,
      itemName: text.name,
      imageMarker: webUrl +'js/'+ text.folderName +  text.sceneJsonConfig.imageMarker,
      jsonRender: text.sceneJsonConfig.jsonRender,
      sceneJsonConfig: text.sceneJsonConfig
    });
  };

/* FOOTER */
  renderFooterList = () => {
    if (this.state.isLoading) return <ActivityIndicator animating size="large" />;
//<ActivityIndicator animating size="large" />
let renderInput;
if (this.state.filteredItemNumber == 0) {
    renderInput =

          <View style={styles.footerList}>
      
        <Text>{this.state.totalItemNumber} Projets</Text>

      </View>
} else if (this.state.filteredItemNumber == this.state.totalItemNumber) {
    renderInput =

          <View style={styles.footerList}>
      
        <Text>{this.state.totalItemNumber} Projets</Text>

      </View>
} else {
   renderInput =
      <View style={styles.footerList}>

        <Text>{this.state.filteredItemNumber} / {this.state.totalItemNumber} Projets</Text>
      </View>
   };
   return renderInput
  };
  
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (

       <View style={styles.footerStyle}>
      <TouchableOpacity onPress={() => {}}>

        <Image
          style={styles.virologo}
          source={require('./res/img/viro_logo_dark.png')}
        />
        </TouchableOpacity>
          </View>
        

    );
  };
  
 /* renderProduct = ({ item, index }) => {
    console.log('index je', this.state.index);
    return (
      <Item
        itemTitle={item.title}
        openDetails={this.openDetails}
        itemUrl={item.imageUrl}
        data={this.state.data}
      />
    );
  };*/
  
  renderItemSection = ({item}) => {
  return (
  <TouchableOpacity onPress={()=>{this.openDetails(item)}}>
         <ImageBackground source={{ uri: webUrl +'js/'+ item.folderName + '/res/image.png' }} style={styles.backgroundImage} blurRadius={1} 
           >

          <ListItem containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.6)', height:100}}
            roundAvatar
            //title={`${item.name} ${item.name}`}
            title={
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      }
            subtitle={item.email}
            //avatar={{ uri: item.imageUrl }}
          />
          </ImageBackground>
         </TouchableOpacity>
         );
  }
  
  renderHeaderSection = ({section}) => {
  return <Text style={styles.sectionHeader}>{section.key}</Text>
  }
   
render() {
 
 
    return (

/*this.state.refreshing
?
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 <ActivityIndicator animating size="large" />
</View>
:*/


<View style={{ flex: 1 
}}>
<StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />


      <SectionList
      refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      renderItem={this.renderItemSection}
      renderSectionHeader={this.renderHeaderSection}
      sections={this.state.check}
      ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeaderList}
        ListFooterComponent={this.renderFooterList}
         keyExtractor={ (item, index) => index }
      //keyExtractor={(item) => item.name}
      />


     {this.renderFooter()}
</View>

   
    );
  }
}




export default ProjectList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  virologo: {
//    /flex: 1,
        height: 45,//ratio*25,
        width: 120,//ratio*100,
        resizeMode:'contain',
  },
  h2text: {
    marginTop: 0,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  safeAreaView:{
    backgroundColor:"#ffffff",
    flex: 1
},
footerList: {

 //flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
paddingTop: 20,
},
footerStyle: {
backgroundColor: '#f4511e',
 //flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 height:50,
},
  flatview: {
  //flex: 1,
    //justifyContent: 'center',
    paddingTop: 0,
    marginTop: 0,
    borderRadius: 0,
  },
  flatviews: {
  //flex: 1,
  marginTop: 0,
  marginBottom: 0,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderBottomColor: '#cbd2d9',
  },
  category_detail_scroll: {
    flex: 1,
    backgroundColor: 'rgba(243,229,245, 0.6)',
},
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'white'
  },
  sectionHeader: {
  fontSize: 24,
  },
  email: {
    color: 'red'
  },
  backgroundImage: {
  	paddingTop: 0,
  	flex: 1,
    alignSelf: 'stretch',
    width: null,
    //transform: [{ rotate: '25deg'}]
   // flex: 1,
    //resizeMode: 'cover', // or 'stretch'
  }
  
});