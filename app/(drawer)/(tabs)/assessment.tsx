import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert, TextInput, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

// Instalar o Picker se necessário
// pnpm install @react-native-picker/picker

const AssessmentScreen = () => {
  const [area, setArea] = useState('ia');
  const [competence, setCompetence] = useState('');
  const [experience, setExperience] = useState('');

  const handleAssessment = () => {
    if (!competence || !experience) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    // Simulação de envio de dados
    Alert.alert(
      'Autoavaliação Enviada',
      `Área: ${area}\nCompetência: ${competence}\nExperiência: ${experience}\n\nSeu resultado será processado para gerar trilhas personalizadas.`
    );
    // Limpar formulário
    setCompetence('');
    setExperience('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="create-outline" size={40} color="#007bff" />
        <Text style={styles.title}>Autoavaliação de Competências</Text>
        <Text style={styles.subtitle}>Descubra seu nível e receba recomendações personalizadas.</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Área de Interesse</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={area}
            onValueChange={(itemValue) => setArea(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Inteligência Artificial (IA)" value="ia" />
            <Picker.Item label="Sustentabilidade" value="sustentabilidade" />
            <Picker.Item label="Gestão de Projetos" value="gestao" />
            <Picker.Item label="Soft Skills" value="softskills" />
          </Picker>
        </View>

        <Text style={styles.label}>Competência Específica (Ex: Python, Liderança)</Text>
        <TextInput
          style={styles.input}
          value={competence}
          onChangeText={setCompetence}
          placeholder="Digite a competência"
        />

        <Text style={styles.label}>Nível de Experiência (0 a 10)</Text>
        <TextInput
          style={styles.input}
          value={experience}
          onChangeText={setExperience}
          placeholder="Ex: 7"
          keyboardType="numeric"
        />

        <Button title="Avaliar e Gerar Recomendações" onPress={handleAssessment} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  form: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    // Ajuste para Android e iOS
    ...(Platform.OS === 'ios' && {
      padding: 10,
    }),
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default AssessmentScreen;
