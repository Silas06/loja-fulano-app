import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="categories" options={{ headerShown: true, title: 'Categorias' }} />
      <Stack.Screen name="categoryProducts/[id]" options={{ headerShown: true }} />
    </Stack>
  )
}