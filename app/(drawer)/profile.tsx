import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [name, setName] = useState('Usuário SkillUp');
  const [email, setEmail] = useState('usuario@skillup.com');
  const [area, setArea] = useState('Tecnologia');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulação de carregamento de dados do usuário
    const loadUserData = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) setName(storedName);
    };
    loadUserData();
  }, []);

  const handleSave = async () => {
    await AsyncStorage.setItem('userName', name);
    Alert.alert('Sucesso', 'Dados do perfil atualizados!');
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={100} color="#007bff" />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={isEditing}
        />

        <Text style={styles.label}>Área de Atuação</Text>
        <TextInput
          style={styles.input}
          value={area}
          onChangeText={setArea}
          editable={isEditing}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={false} // Email não editável
        />

        <View style={styles.buttonContainer}>
          {isEditing ? (
            <Button title="Salvar Alterações" onPress={handleSave} color="#28a745" />
          ) : (
            <Button title="Editar Perfil" onPress={() => setIsEditing(true)} color="#007bff" />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007bff',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ProfileScreen;
