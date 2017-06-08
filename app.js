import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'

class HistoriaReaçõesInesperadas extends Component {
  render(){
    return(
      <View>
      <Image style={{width:300, height: 200}} source={{uri:"http://www.frasesparaoface.com/wp-content/uploads/2013/11/mantenha-o-equilibrio.jpg"}} />
      <Text>
   Achamos que conhecemos Quem vive a nossa volta ou,As pessoas que mas amamos. Mas cada ser se conhece?  Sabemos sempre como vamos reagir? Sabemos sempre que respostas dar ou, sabemos que decisão tomar sempre que aparece alguma? Exatamente não sabemos, As vezes acaba virando uma obrigação sobre Oque falamos Oque pensamos e Oque fazemos,tem aquela pressão toda. A ansiedade insaciável de fazer falar ou saber. Pessoas caladas,solitárias que já passaram por algo nessa vida ou na outra,sempre estão sufocadas com suas práprias palavras á comunicão é rara quando seus sentimentos estão em jogo. Isto é insegurança,baixa autoestima . O jeito solúvel para essas situaçoẽs é se reafirma da um tchau para o ego,e confiar no seu taco e confiar na sua mente sortuda.
   </Text>
      <Text>ReaçõesInesperadas</Text>
    </View>
    )
  }
}
      
class HistoriaViagensAstrais extends Component {
  render(){
    return(
      <View>
       <Image style={{width:300, height: 200}} source={{uri:"https://4.bp.blogspot.com/-nVvA9yD2ZPo/VV-wCmBA0GI/AAAAAAAAc9k/cSatx8rwwxM/s640/astralndgae5yehrreduzida.jpg"}} />
       <Text>
      Dormimos relaxamos e pensamos que ficamos inconcientes. O motivo de pensarem assim é o fato de sonhar, assim tudo parece abstrato,surreal e lucído. Mas ai é que se enganam. Estamos mais acordados "dormindo",porque viajamos para outras dimensões... Vivemos tudo que na terceira dimensão não vivemos, quase nunca lembramos do que sonhamos. Um sonho significado sua vida,seus amigos,sua familia, E também contato com  outras dimensões. Se vive na dúvida, indeciso com que decisões tomar, lembre-se de seus sonhos. Se necessário anote todos assim que acorda,Para não esquece-los.
      </Text>
      <Text>ViagensAstrais</Text>
      </View>
   );
  }
}
class HistoriaSonhosComEt extends Component {
  render(){
    return(
      <View>
       <Image style={{width:300, height: 200}} source={{uri:"https://abrilcosmopolitan.files.wordpress.com/2016/10/aplicativo-tecnologia-namoro-humano-et.jpg"}} />
      <Text>
        Sonhos Místicos nos faz duvidar de toda "realidade" em que acreditamos, EU tenho sonhado muito com Ets.Em alguns me peguei com muito medo,em outros eu gostei porque tive um contato harmonico... porém desconhecido de tudo que eu acreditava. Não tenho mais aquele medo   maligno e o Entreconhecimento pessoal.
        Acredite ets existem, sempre estão nos vigiando e sempre estiveram Assim também foi em outras civilizações.
      </Text>
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
      <Image style={styles.container} source={{uri: "https://68.media.tumblr.com/34c56c0fa7f6ffbd90f0a00748899342/tumblr_n1trgggcIT1ttfj7uo1_500.jpg"}} >
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
            onPress={() => navigate("HistoriaAstrais")}
          
          />
    
        
          <Button
            title="História 3: reações inesperadas"
            onPress={() => navigate("ReaçõesInesperadas")}
          
          />
      </Image>
    );
  }
}

const HistoriasEmQuadrinhos = StackNavigator({
  Main: {screen: TelaPrincipal},
  HistoriaEt: {screen: HistoriaSonhosComEt},
  HistoriaAstrais: {screen: HistoriaViagensAstrais}
});


export default HistoriasEmQuadrinhos

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
       
 
   
