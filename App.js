import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';

export default () => {
  const [name, setName] = useState('');

  function onInputChange(value) {
    setName(value);
  }

  function onClick() {
    // eslint-disable-next-line no-alert
    alert('Hello' + ' ' + name + ' ' + 'Reactive Native App!!!');
  }

  return (
    <View>
      <Text style={styles.title}>React Native App</Text>
      <TextInput
        style={styles.input}
        placeholder="Please input your name"
        onChangeText={onInputChange}
      />
      <Button title="Press me" onPress={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    margin: 45,
  },
  input: {
    marginTop: 24,
    marginBottom: 24,
    fontFamily: 'StyreneAWeb-Regular',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
});
