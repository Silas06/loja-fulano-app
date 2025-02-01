import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";
import { Link } from "expo-router";

interface Props {
  category: Category;
}

export default function itemProduct({ category }: Props) {
  return (
    <Link href={`category/categoryProducts/${category.id}`} asChild>
      <Pressable style={ styles.container}>
        <Image style={styles.img} source={{uri: category.cover}} resizeMode="cover" />
        <View style={styles.info}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  info: {
    flex: 1,
    paddingLeft: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: 13
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  },
});