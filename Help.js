import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Help = ({ navigation }) => {
  const handleBackToMain = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.description}>
        Welcome to the Help section of My Bank app! Here, you can find useful tips and guidelines on
        how to use the app effectively and manage your finances efficiently.
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToMain}>
        <Text style={styles.backButtonText}>Back to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Help;
