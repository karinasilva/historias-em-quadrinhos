import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'ir!',
      'ler a história!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.destaque}> tela principal </Text>
     
        <Text style={styles.paragraph}>
          Histórias em quadrinhos
        
        </Text>
           <Button
            title="História1:
            sonhos com Et's"
            onPress={this._handleButtonPress}
          />
          
          
          <Button
            title="História2: viagens astrais"
            onPress={this._handleButtonPress}
          />
    
        
          <Button
            title="História3: reações inesperadas"
            onPress={this._handleButtonPress}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  destaque:{
    fontSize: 35
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#999966',
  },
  paragraph: {
    margin: 35,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
});
       
 
   

