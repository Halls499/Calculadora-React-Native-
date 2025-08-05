import { Text, ScrollView, StyleSheet, TextInput, Button, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [PrimeiroNumero, setPrimeiroNumero] = useState('');
  const [SegundoNumero, setSegundoNumero] = useState('');
  const [PrimeiroNumero2, setPrimeiroNumero2] = useState('');
  const [SegundoNumero2, setSegundoNumero2] = useState('');
  const [PrimeiroNumero3, setPrimeiroNumero3] = useState('');
  const [SegundoNumero3, setSegundoNumero3] = useState('');
  const [PrimeiroNumero4, setPrimeiroNumero4] = useState('');
  const [SegundoNumero4, setSegundoNumero4] = useState('');

  // Resultados separados
  const [resultadoSoma, setResultadoSoma] = useState(null);
  const [resultadoSubtracao, setResultadoSubtracao] = useState(null);
  const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState(null);
  const [resultadoDivisao, setResultadoDivisao] = useState(null);

  const funcaoSoma = () => {
    const soma = parseFloat(PrimeiroNumero2) + parseFloat(SegundoNumero2);
    setResultadoSoma(soma);
  };

  const funcaoSubtracao = () => {
    const subtracao = parseFloat(PrimeiroNumero3) - parseFloat(SegundoNumero3);
    setResultadoSubtracao(subtracao);
  };

  const funcaoMultiplicacao = () => {
    const multiplicacao = parseFloat(PrimeiroNumero4) * parseFloat(SegundoNumero4);
    setResultadoMultiplicacao(multiplicacao);
  };

  const funcaodivisao = () => {
    const divisao = parseFloat(PrimeiroNumero) / parseFloat(SegundoNumero);
    setResultadoDivisao(divisao);
  };

  return (
    <ScrollView>
      <Text style={styles.titulo}>Calculadora</Text>

      {/* Bloco de SOMA */}
      <View style={styles.bloco}>
        <Text style={styles.operacao}>Soma</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o primeiro número"
          value={PrimeiroNumero2}
          onChangeText={setPrimeiroNumero2}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o segundo número"
          value={SegundoNumero2}
          onChangeText={setSegundoNumero2}
        />
        <Button title="Somar" onPress={funcaoSoma} />
        {resultadoSoma !== null && (
          <Text style={styles.resultado}>Resultado: {resultadoSoma}</Text>
        )}
      </View>

      {/* Bloco de SUBTRAÇÃO */}
      <View style={styles.bloco}>
        <Text style={styles.operacao}>Subtração</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o primeiro número"
          value={PrimeiroNumero3}
          onChangeText={setPrimeiroNumero3}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o segundo número"
          value={SegundoNumero3}
          onChangeText={setSegundoNumero3}
        />
        <Button title="Subtrair" onPress={funcaoSubtracao} />
        {resultadoSubtracao !== null && (
          <Text style={styles.resultado}>Resultado: {resultadoSubtracao}</Text>
        )}
      </View>

      {/* Bloco de MULTIPLICAÇÃO */}
      <View style={styles.bloco}>
        <Text style={styles.operacao}>Multiplicação</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o primeiro número"
          value={PrimeiroNumero4}
          onChangeText={setPrimeiroNumero4}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o segundo número"
          value={SegundoNumero4}
          onChangeText={setSegundoNumero4}
        />
        <Button title="Multiplicar" onPress={funcaoMultiplicacao} />
        {resultadoMultiplicacao !== null && (
          <Text style={styles.resultado}>Resultado: {resultadoMultiplicacao}</Text>
        )}
      </View>

      {/* Bloco de DIVISÃO */}
      <View style={styles.bloco}>
        <Text style={styles.operacao}>Divisão</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o primeiro número"
          value={PrimeiroNumero}
          onChangeText={setPrimeiroNumero}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Insira o segundo número"
          value={SegundoNumero}
          onChangeText={setSegundoNumero}
        />
        <Button title="Dividir" onPress={funcaodivisao} />
        {resultadoDivisao !== null && (
          <Text style={styles.resultado}>Resultado: {resultadoDivisao}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  bloco: {
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 10,
    padding: 15,
    margin: 15,
    backgroundColor: '#f5f5f5',
  },
  operacao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
});
