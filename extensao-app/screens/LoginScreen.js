import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Admin');
    } else if (username === 'prof' && password === 'prof') {
      navigation.navigate('Professor');
    } else if (username === 'cnsg' && password === 'cnsg') {
      navigation.navigate('Responsaveis');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginVertical: 10, borderBottomWidth: 1 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
