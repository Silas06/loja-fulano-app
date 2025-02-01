import { FlatList, StyleSheet, Text, View } from "react-native";

import * as CategoryServices from '../../../services/category';
import { Category } from "../../../types/category";
import { useEffect, useState } from "react";
import ItemCategory from '../../../components/itemCategory';
export default function Screen() {
  const [items, setitems] = useState<Category[]>([]);
    async function getItems() {
      const res = await CategoryServices.getAllCategories();
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
            renderItem={({item}:{item: Category}) => (
              <ItemCategory category={item} />
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