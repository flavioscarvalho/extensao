import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfessorScreen() {
  const [turma, setTurma] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataExercicio, setDataExercicio] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');

  const handleSalvar = async () => {
    // Aqui podemos salvar em AsyncStorage para acessar depois
    try {
      const exercicio = {
        turma,
        disciplina,
        descricao,
        dataExercicio,
        dataEntrega,
      };
      await AsyncStorage.setItem('@exercicio', JSON.stringify(exercicio));
      alert('Exercício salvo com sucesso!');
    } catch (e) {
      alert('Erro ao salvar o exercício.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro de Exercício</Text>
      <Picker
        selectedValue={turma}
        onValueChange={(itemValue) => setTurma(itemValue)}
        style={{ marginVertical: 10 }}
      >
        <Picker.Item label="Selecione a Turma" value="" />
        <Picker.Item label="Turma A" value="Turma A" />
        <Picker.Item label="Turma B" value="Turma B" />
        {/* Podemos adicionar mais turmas dinamicamente */}
      </Picker>
      <Picker
        selectedValue={disciplina}
        onValueChange={(itemValue) => setDisciplina(itemValue)}
        style={{ marginVertical: 10 }}
      >
        <Picker.Item label="Selecione a Disciplina" value="" />
        <Picker.Item label="Matemática" value="Matemática" />
        <Picker.Item label="História" value="História" />
        {/* Podemos adicionar mais disciplinas dinamicamente */}
      </Picker>
      <TextInput
        placeholder="Descrição do Exercício (até 250 caracteres)"
        value={descricao}
        onChangeText={setDescricao}
        maxLength={250}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Data do Exercício (dd/mm/yyyy)"
        value={dataExercicio}
        onChangeText={setDataExercicio}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Data de Entrega (dd/mm/yyyy)"
        value={dataEntrega}
        onChangeText={setDataEntrega}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <Button title="Salvar Exercício" onPress={handleSalvar} />
    </View>
  );
}
