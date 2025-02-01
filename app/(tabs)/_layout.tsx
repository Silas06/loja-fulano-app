import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function TabsLayout() {
  return (
  <Tabs screenOptions={{ tabBarActiveTintColor: '#0000ff', tabBarInactiveTintColor: '#ccc' }}> 
    <Tabs.Screen 
      name="home"
      options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> }}
    />
    <Tabs.Screen 
      name="category"
      options={{ headerShown: false, title: 'Categorias', tabBarIcon: ({ color }) => <FontAwesome name="archive" size={24} color={color} /> }}
    />
    <Tabs.Screen 
      name="about"
      options={{ title: 'Sobre mim', tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
    />
  </Tabs>
  )
}