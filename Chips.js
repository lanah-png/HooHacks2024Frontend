import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function Chips() {
  const [chips, setChips] = useState(['X Egg', 'X Milk', 'Other +']);

  const handlePress = (chip) => {
    if (chip === 'Other +') {
      Alert.prompt(
        'Enter chip name',
        '',
        [
          { text: 'Cancel' },
          { text: 'OK', onPress: (name) => setChips([...chips, name]) },
        ],
        'plain-text',
      );
    } else {
      setChips(chips.filter((c) => c !== chip));
    }
  };

  return (
    <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20 }}>
      {chips.map((chip, index) => (
        <TouchableOpacity key={index} style={{ padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 20, marginHorizontal: 10, backgroundColor: '#FB6A09' }}>
          <Text>{chip}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
