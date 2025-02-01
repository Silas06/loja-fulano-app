import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Product } from "../../types/product";
import * as ProductServices from '../../services/product';
import Button from "../../components/button";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();

  async function getProductById() {
    const res = await ProductServices.getProductById(+id);
    if(!res) return router.back()
    setProduct(res);
  }

  function handleBuy() {
    alert('Comprando produto '+ product?.title);
  }

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Stack.Screen options={{ title: '', headerShown: true }} />
        <ScrollView style={styles.area}>
          <Image source={{ uri: product?.image }} style={styles.image} resizeMode="cover" />
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.price}> {product?.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
        </ScrollView>
        <View style={styles.buttonArea}><Button title="Comprar Agora" onPress={handleBuy} /></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  area: {
    flex: 1,
    padding: 10
  },
  buttonArea:{
    padding: 10
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});