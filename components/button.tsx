import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function Button({ title, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#164e85",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});