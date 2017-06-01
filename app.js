import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'
class HistóriaSonhosComEt extends Component {
  render(){
    return(
      <View>
      Sonhos Místicos nos faz duvidar de toda "realidade" em que acreditamos. EU tenho sonhado muito com Et's,em alguns me peguei com muito medo,em outros eu gostei porque tive um contato harmonico... porém desconhecido de tudo que eu acreditava. ão tenho medo porque tenho um pouco de conhecimento e a noção de que não existi vida só no planeta terra.
      <Text>SonhosComEt</Text>
      </View>
   );
  }
}

class TelaPrincipal extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'História!',
      'ler a história!',
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image style={styles.container} source={{uri: "https://68.media.tumblr.com/34c56c0fa7f6ffbd90f0a00748899342/tumblr_n1trgggcIT1ttfj7uo1_500.jpg"}}>
      <Text style = {styles.destaque}> Tela Principal </Text>
     
        <Text style={styles.paragraph}>
          Histórias em quadrinhos
        
        </Text>
        
        
           <Button
            title="História 1: sonhos com Et's"
            onPress={() => navigate('HistoriaEt')}
            
          />
          
          
          <Button
            title="História 2: viagens astrais"
            onPress={this._handleButtonPress}
          
          />
    
        
          <Button
            title="História 3: reações inesperadas"
            onPress={this._handleButtonPress}
          
          />
      </Image>
    );
  }
}

const HistóriasEmQuadrinhos = StackNavigator({
  Main: {screen: TelaPrincipal},
  HistoriaEt: {screen: HistóriaSonhosComEt},
});

export default HistóriasEmQuadrinhos

const styles = StyleSheet.create({
  destaque:{
    fontSize: 30
    
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'pink',
  },
  paragraph: {
    margin: 35,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ' #0066ff',
  },
});
       
 
   
