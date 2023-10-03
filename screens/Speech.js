import * as React from 'react';
import { View, StyleSheet, Button, ScrollView, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = () => {
    const thingToSay =
      'React Native is an open-source framework for building mobile applications using JavaScript and React. It was developed by Facebook and is widely used for creating cross-platform mobile apps that can run on both iOS and Android devices with a single codebase';
    Speech.speak(thingToSay);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ScrollView And Speech Example</Text>
      <View style={styles.content}>
      <Button title="Press to hear some words" onPress={speak} />
        <Text style={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
          id ante ut malesuada. Vestibulum nec venenatis orci. Sed at consequat
          erat. Morbi id bibendum metus. Fusce luctus, tortor at lacinia
          ultricies, mi dui vehicula metus, nec fermentum lectus leo a arcu.
          Nullam egestas, neque quis egestas tincidunt, urna velit cursus
          libero, nec tincidunt elit arcu nec libero. Vivamus non iaculis dui.
          Nullam tincidunt neque ac elit tristique, eget lacinia metus
          fermentum.
        </Text>
        <Text style={styles.caption}>
          React Native is an open-source framework for building mobile
          applications using JavaScript and React. It was developed by Facebook
          and is widely used for creating cross-platform mobile apps that can
          run on both iOS and Android devices with a single codebase.
        </Text>
        {/* Add more content to make the ScrollView scrollable */}
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text>
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text> 
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text> 
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text>
         <Text style={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
          id ante ut malesuada. Vestibulum nec venenatis orci. Sed at consequat
          erat. Morbi id bibendum metus. Fusce luctus, tortor at lacinia
          ultricies, mi dui vehicula metus, nec fermentum lectus leo a arcu.
          Nullam egestas, neque quis egestas tincidunt, urna velit cursus
          libero, nec tincidunt elit arcu nec libero. Vivamus non iaculis dui.
          Nullam tincidunt neque ac elit tristique, eget lacinia metus
          fermentum.
        </Text>
  
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    paddingBottom: 20, // Add padding to the bottom of the content to allow scrolling
  },
  caption: {
    fontSize: 16,
    marginBottom: 16,
  },
});
