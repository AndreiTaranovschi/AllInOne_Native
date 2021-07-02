/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.text} >
      <View style={styles.text}>
        <Text style={{ fontSize: 50 }}>{count}</Text>
      </View>
      <View style={styles.button}  >
        <Button
          title="+"
          onPress={() => setCount(count + 1)}
        />
        <Button
          title="-"
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );


};


export default Counter;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    ,
  },
  all: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 250,
  },
  button: {
    height: 200,
    width: 200,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 130,
  },
});