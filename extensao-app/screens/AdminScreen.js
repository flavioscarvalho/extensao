import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AdminScreen() {
  const [turma, setTurma] = useState('');
  const [professor, setProfessor] = useState('');
  const [disciplina, setDisciplina] = useState('');

  const handleCadastrar = () => {
    // Aqui podemos salvar em AsyncStorage
    alert('Dados cadastrados com sucesso!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Cadastro de Turmas, Professores e Disciplinas</Text>
      <TextInput
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Professor"
        value={professor}
        onChangeText={setProfessor}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}
