import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MyAccount = ({ navigation }) => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [modalVisible, setModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState('');
  const [isWithdraw, setIsWithdraw] = useState(true);

  const handleBackToMain = () => {
    navigation.goBack();
  };

  const handleWithdraw = () => {
    setModalVisible(true);
    setIsWithdraw(true);
  };

  const handleReplenish = () => {
    setModalVisible(true);
    setIsWithdraw(false);
  };

  const handleModalSubmit = () => {
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount)) {
      if (isWithdraw) {
        setBalance(balance - amount);
      } else {
        setBalance(balance + amount);
      }
    }
    setModalVisible(false);
    setInputAmount('');
  };

  return (
    <View>
      <Text style={{ fontSize: 20 }}>My Account</Text>
      <Text style={{ fontSize: 16 }}>Current Balance: {balance}</Text>
      <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReplenish}>
        <Text style={styles.buttonText}>Replenish</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleBackToMain}>
        <Text style={styles.linkText}>Back to Main</Text>
      </TouchableOpacity>

      {/* Withdraw/Replenish Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            value={inputAmount}
            onChangeText={setInputAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.modalButton} onPress={handleModalSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  linkText: {
    marginTop: 20
  }
});

export default MyAccount;
