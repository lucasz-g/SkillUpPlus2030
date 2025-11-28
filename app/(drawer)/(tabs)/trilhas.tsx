import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockTrilhas = [
  { id: 1, title: 'Trilha IA para Iniciantes', modules: 5, progress: 60, icon: 'hardware-chip-outline' },
  { id: 2, title: 'Sustentabilidade Corporativa', modules: 8, progress: 20, icon: 'leaf-outline' },
  { id: 3, title: 'Liderança e Soft Skills', modules: 4, progress: 100, icon: 'people-outline' },
  { id: 4, title: 'Análise de Dados com Python', modules: 10, progress: 0, icon: 'analytics-outline' },
];

const TrilhasScreen = () => {
  const renderTrilhaCard = (trilha) => (
    <TouchableOpacity key={trilha.id} style={styles.card}>
      <Ionicons name={trilha.icon} size={30} color="#007bff" style={styles.icon} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{trilha.title}</Text>
        <Text style={styles.cardSubtitle}>{trilha.modules} Módulos</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${trilha.progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{trilha.progress}% Concluído</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trilhas de Aprendizado</Text>
        <Text style={styles.subtitle}>Escolha seu caminho para o futuro do trabalho.</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <Text style={styles.searchInput}>Buscar trilhas...</Text>
      </View>

      <View style={styles.listContainer}>
        {mockTrilhas.map(renderTrilhaCard)}
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
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#666',
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  progressBarContainer: {
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 10,
    color: '#28a745',
    fontWeight: 'bold',
  },
});

export default TrilhasScreen;
