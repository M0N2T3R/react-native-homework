import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';

export default () => {
  const [name, setName] = useState('');

  function onInputChange(value) {
    setName(value);
  }

  function onClick() {
    // eslint-disable-next-line no-alert
    alert('Hello' + ' ' + name + ' ' + 'Its exercise 2!!!');
  }

  return (
    <View>
      <Text style={styles.title}>Exercise 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your name"
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
