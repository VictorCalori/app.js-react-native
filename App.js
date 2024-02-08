import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style={styles.container}><h1>Explorando o React no Universo Ubuntu</h1></Text>
      <View><Text style={styles.abc}>No vasto universo da programação, o React emerge como uma constelação brilhante, proporcionando interatividade e eficiência ao desenvolver interfaces de usuário dinâmicas. Quando esse poderoso framework encontra o sistema operacional Ubuntu, uma sinergia inovadora se desenha.

O Ubuntu, com sua base sólida e amigável, serve como o solo fértil para cultivar aplicações React. A simplicidade e robustez do Ubuntu facilitam a configuração do ambiente de desenvolvimento, enquanto o React, com sua abordagem declarativa, oferece uma experiência de codificação intuitiva.

Ao explorar o React no Ubuntu, percebemos que a comunidade open source encontra um terreno propício para colaboração e crescimento. As bibliotecas e ferramentas disponíveis no ecossistema Ubuntu complementam as capacidades do React, resultando em aplicações mais eficientes e escaláveis.

A jornada de desenvolvimento torna-se uma viagem fluida, com a capacidade de criar componentes reutilizáveis e construir interfaces interativas de forma elegante. O React no Ubuntu não é apenas uma união de tecnologias, mas uma convergência que simplifica a criação de aplicações modernas e responsivas.

Nesse ecossistema dinâmico, a dualidade entre React e Ubuntu se transforma em uma dança harmoniosa, onde cada atualização, cada componente, contribui para uma experiência de usuário excepcional. A união entre essa biblioteca JavaScript e o sistema operacional Linux revela um horizonte de possibilidades para desenvolvedores, inspirando uma nova era de inovação tecnológica.</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    textAlign: 'center',
    color: 'blue',
  },

  abc: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    maxWidth: 1200,
    fontSize: 30,
    marginLeft: 328,
  }
});
