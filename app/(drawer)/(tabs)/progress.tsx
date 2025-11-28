import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProgressScreen = () => {
  const totalCourses = 12;
  const completedCourses = 3;
  const progressPercentage = Math.round((completedCourses / totalCourses) * 100);

  const renderMetricCard = (icon, title, value, color) => (
    <View style={styles.metricCard}>
      <Ionicons name={icon} size={30} color={color} />
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seu Progresso</Text>
        <Text style={styles.subtitle}>Monitoramento e recomendações personalizadas.</Text>
      </View>

      <View style={styles.metricsContainer}>
        {renderMetricCard('checkmark-circle-outline', 'Cursos Concluídos', completedCourses, '#28a745')}
        {renderMetricCard('school-outline', 'Trilhas Ativas', 4, '#007bff')}
        {renderMetricCard('time-outline', 'Horas de Estudo', '45h', '#ffc107')}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progresso Geral</Text>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>{progressPercentage}%</Text>
          <Text style={styles.progressLabel}>Concluído</Text>
        </View>
        <Text style={styles.recommendation}>
          Continue assim! Você está no caminho certo para a requalificação digital.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendações</Text>
        <View style={styles.recommendationCard}>
          <Ionicons name="bulb-outline" size={24} color="#007bff" style={{ marginRight: 10 }} />
          <Text style={styles.recommendationText}>
            Sugerimos a trilha de **"Cibersegurança para o Futuro"** para complementar suas habilidades em IA.
          </Text>
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
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  metricCard: {
    alignItems: 'center',
    padding: 10,
    width: width / 3.5,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  metricTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007bff',
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 8,
    borderColor: '#007bff',
    marginBottom: 15,
  },
  progressText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
  },
  recommendation: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  recommendationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default ProgressScreen;
