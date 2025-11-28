import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/favicon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-vindo ao SkillUpPlus 2030+</Text>
        <Text style={styles.subtitle}>Seu caminho para a requalificação digital.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trilhas em Destaque</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseList}>
          {['Inteligência Artificial', 'Sustentabilidade', 'Soft Skills'].map((course, index) => (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <Image
                source={require('../../../assets/jason-leung-wmyE5IBiOmo-unsplash.jpg')}
                style={styles.courseImage}
              />
              <Text style={styles.courseTitle}>{course}</Text>
              <Text style={styles.courseInfo}>4 módulos | Iniciante</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.quickActions}>
          <Link href="/assessment" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Autoavaliação</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/trilhas" asChild>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Ver Trilhas</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 10,
    color: '#007bff',
  },
  courseList: {
    paddingLeft: 10,
  },
  courseCard: {
    width: 160,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  courseImage: {
    width: '100%',
    height: 100,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    color: '#333',
  },
  courseInfo: {
    fontSize: 12,
    color: '#666',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
