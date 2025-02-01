import { Text, Image, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { router, Stack } from "expo-router";
import Button from "../components/button";

function handleComprar() {
  router.replace("home");
}
export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="cover" />
      <Text style={styles.h1}>Loja do Fulano</Text>
      <Text style={styles.h2}>Aqui tem tudo que vocÊ procura.</Text>
      <Button title="Começar as compras" onPress={handleComprar}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
});