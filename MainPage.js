import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MainPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName, userDetails);
  };

  const handleSubmit = () => {
    // Validate that all fields are filled
    if (name && email && phone && address) {
      const newUserDetails = { name, email, phone, address };
      setUserDetails(newUserDetails);

      // Clear the input fields after submission
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Bank</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => handleNavigation('MyAccount')}>
        <Text style={styles.linkText}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => handleNavigation('Help')}>
        <Text style={styles.linkText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => handleNavigation('UserInfo')}>
        <Text style={styles.linkText}>User Information</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default MainPage;
