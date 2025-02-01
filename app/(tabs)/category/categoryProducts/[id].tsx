import { Text, View, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import * as ProductServices from '../../../../services/product';
import * as CategoryServices from '../../../../services/category';
import { Product } from "../../../../types/product";
import ItemProduct from "../../../../components/itemProduct";
import { Stack, Tabs, useLocalSearchParams } from "expo-router";
import { Category } from "../../../../types/category";
export default function Screen() {
  const [items, setitems] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>();
  
  const { id } = useLocalSearchParams();

  async function getCategory() {
    const categoryItem = await CategoryServices.getCategoryById(+id);
    setCategory(categoryItem);
  }
  async function getItems() {
    const res = await ProductServices.getProductsByCategory(+id);
    setitems(res);
  }

  useEffect(() => {
    getItems();
    getCategory();
  }, []);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category?.title }} />
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