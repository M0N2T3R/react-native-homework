import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ListItem from './components/ListItem';
export default () => {
  const items = ['Item_1', 'Item_2', 'Item_3'];
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <View>
      <ListItem
        items={items}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </View>
  );
};
