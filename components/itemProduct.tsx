import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";
import { Link } from "expo-router";

interface Props {
  product: Product;
}

export default function itemProduct({ product }: Props) {
  return (
    <Link href={`product/${product.id}`} asChild>
      <Pressable style={ styles.container}>
        <Image style={styles.img} source={{uri: product.image}} resizeMode="cover" />
        <View style={styles.info}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  info: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#888',
    fontSize: 13
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  },
});