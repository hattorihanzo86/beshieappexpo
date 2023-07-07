import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const convertText = () => {
    const converted = inputText.replace(/ /g, '🤸');
    setConvertedText(converted);
  };

  const clearText = () => {
    setInputText('');
    setConvertedText('');
  };

  const copyToClipboard = () => {
    Clipboard.setString(convertedText);
    Alert.alert('Besh ok na 🫰','Nakopya ko na paste mo na dali ... ');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Generate Beshies</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          value={inputText}
          onChangeText={setInputText}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.button} onPress={convertText}>
            <Text style={styles.buttonText}>Generate</Text>
          </TouchableOpacity>
          <View style={{ margin: 5 }} />
          <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
            <Text style={styles.buttonText}>Copy</Text>
          </TouchableOpacity>
          <View style={{ margin: 5 }} />
          <TouchableOpacity style={styles.button} onPress={clearText}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.convertedText}>{convertedText}</Text>
      </View>

      <View style={styles.footer}>
      <Text style={styles.footerText}>Created by Andrian R. https://areyes.me</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  convertedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    margin:40,
  },

  footerText: {
    textAlign:'center'

  },
});

export default App;
