import React, { useState, useEffect } from 'react';
import { View, Text, Picker, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResponsaveisScreen() {
  const [turma, setTurma] = useState('');
  const [exercicios, setExercicios] = useState([]);

  const handleFiltrar = async () => {
    try {
      const storedExercicio = await AsyncStorage.getItem('@exercicio');
      if (storedExercicio !== null) {
        const parsedExercicio = JSON.parse(storedExercicio);
        if (parsedExercicio.turma === turma) {
          setExercicios([parsedExercicio]);
        } else {
          alert('Nenhum exercício encontrado para esta turma.');
        }
      }
    } catch (e) {
      alert('Erro ao buscar exercícios.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Filtrar Exercícios</Text>
      <Picker
        selectedValue={turma}
        onValueChange={(itemValue) => setTurma(itemValue)}
        style={{ marginVertical: 10 }}
      >
        <Picker.Item label="Selecione a Turma" value="" />
        <Picker.Item label="Turma A" value="Turma A" />
        <Picker.Item label="Turma B" value="Turma B" />
      </Picker>
      <Button title="Filtrar" onPress={handleFiltrar} />
      <ScrollView style={{ marginTop: 20 }}>
        {exercicios.map((exercicio, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>Disciplina: {exercicio.disciplina}</Text>
            <Text>Descrição: {exercicio.descricao}</Text>
            <Text>Data do Exercício: {exercicio.dataExercicio}</Text>
            <Text>Data de Entrega: {exercicio.dataEntrega}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
