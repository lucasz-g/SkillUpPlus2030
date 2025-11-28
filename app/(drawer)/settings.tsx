import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const router = useRouter();

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    Alert.alert('Logout', 'Você foi desconectado com sucesso.');
    router.replace('/'); // Volta para a tela de Login
  };

  const renderSettingItem = (title, icon, action, isSwitch = false, switchValue = false) => (
    <TouchableOpacity style={styles.settingItem} onPress={isSwitch ? action : () => Alert.alert('Ação', `Ação de ${title} executada.`)}>
      <Ionicons name={icon} size={24} color="#007bff" style={styles.icon} />
      <Text style={styles.settingText}>{title}</Text>
      {isSwitch ? (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switchValue ? "#007bff" : "#f4f3f4"}
          onValueChange={action}
          value={switchValue}
        />
      ) : (
        <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geral</Text>
        {renderSettingItem('Notificações', 'notifications-outline', toggleNotifications, true, notificationsEnabled)}
        {renderSettingItem('Modo Escuro', 'moon-outline', toggleDarkMode, true, darkModeEnabled)}
        {renderSettingItem('Idioma', 'language-outline', () => {})}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conta</Text>
        {renderSettingItem('Alterar Senha', 'lock-closed-outline', () => {})}
        {renderSettingItem('Política de Privacidade', 'document-text-outline', () => {})}
        <TouchableOpacity style={[styles.settingItem, styles.logoutButton]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#dc3545" style={styles.icon} />
          <Text style={[styles.settingText, { color: '#dc3545' }]}>Sair (Logout)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 5,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    borderBottomWidth: 0,
  },
});

export default SettingsScreen;
