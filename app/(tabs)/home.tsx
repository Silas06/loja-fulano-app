import { Text, View, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as ProductServices from '../../services/product';
import { Product } from "../../types/product";
import ItemProduct from "../../components/itemProduct";
export default function Screen() {
  const [items, setitems] = useState<Product[]>([]);
  
  async function getItems() {
    const res = await ProductServices.getAllProducts();
    setitems(res);
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}:{item: Product}) => (
          <ItemProduct product={item} />
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
  },
});