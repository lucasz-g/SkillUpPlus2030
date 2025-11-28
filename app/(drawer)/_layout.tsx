import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (  
    <Drawer>
      <Drawer.Screen
        name="(tabs)" // Este será o grupo de navegação Tab
        options={{
          headerTitle: 'SkillUpPlus 2030+',
          drawerLabel: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile" // Tela de Perfil (Stack dentro do Drawer)
        options={{
          headerTitle: 'Meu Perfil',
          drawerLabel: 'Perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings" // Tela de Configurações (Stack dentro do Drawer)
        options={{
          headerTitle: 'Configurações',
          drawerLabel: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
export default DrawerLayout;