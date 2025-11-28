import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'light' ? '#007bff' : '#fff',
        headerShown: false, // O Drawer já mostra o header
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="assessment"
        options={{
          title: 'Autoavaliação',
          tabBarIcon: ({ color }) => <Ionicons name="create" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="trilhas"
        options={{
          title: 'Trilhas',
          tabBarIcon: ({ color }) => <Ionicons name="school" color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progresso',
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
