// SetMpinScreen.js
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Modal, TouchableOpacity, Keyboard } from 'react-native';
import { Box, Text, VStack, Button, Center, HStack, Checkbox } from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { theme } from '../../style/theme';

const SetMpin = ({ navigation }) => {
    const [mpin, setMpin] = useState('');
    const [confirmMpin, setConfirmMpin] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleMpinChange = code => setMpin(code);
    const handleConfirmMpinChange = code => setConfirmMpin(code);

    const handleProceed = () => {
        if (
            mpin.length === 4
            // && confirmMpin.length === 4
            && isAgreed
        ) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => setShowModal(false);

    const handleYes = () => {
        setShowModal(false);
        navigation.navigate('Home');
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                <Box flex={1} width="100%" bg="white" position="relative">
                    <Center>
                        <VStack space={4} mt={4} w="90%" maxW="400px">
                            <Text fontSize="2xl" fontWeight="bold">Set MPIN</Text>
                            <Text fontSize="md" color="gray.500">Enter a 4 digit MPIN</Text>
                            <Center>
                                <OTPInputView
                                    style={styles.otpContainer}
                                    pinCount={4}
                                    code={mpin}
                                    keyboardType="number-pad"
                                    onCodeChanged={handleMpinChange}
                                    codeInputFieldStyle={styles.inputStyles}
                                    codeInputHighlightStyle={styles.isHighlighted}
                                />
                            </Center>
                            <Text fontSize="md" color="gray.500">Confirm MPIN</Text>
                            <Center>
                                <OTPInputView
                                    style={styles.otpContainer}
                                    pinCount={4}
                                    code={confirmMpin}
                                    keyboardType="number-pad"
                                    onCodeChanged={handleConfirmMpinChange}
                                    codeInputFieldStyle={styles.inputStyles}
                                    codeInputHighlightStyle={styles.isHighlighted}
                                />
                            </Center>
                            <HStack alignItems="center">
                                <Checkbox
                                    isChecked={isAgreed}
                                    onChange={setIsAgreed}
                                    colorScheme="primary"
                                />
                                <Text ml={2} color="primary.500">I agree to <Text onPress={() => { /* Handle T&C Press */ }} color="primary.500" underline>terms and conditions</Text></Text>
                            </HStack>
                        </VStack>
                    </Center>
                    <HStack position="absolute" bottom={25} left={25} right={25}>
                        <Button w="100%" onPress={handleProceed}
                            isDisabled={!(
                                mpin.length === 4 &&
                                // confirmMpin.length === 4 &&
                                isAgreed)}>
                            Confirm and proceed
                        </Button>
                    </HStack>
                </Box>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Confirmation</Text>
                            <Text fontSize="lg" textAlign="center" mb={4}>
                                Do you wish to confirm that you would like to proceed with the phone number which would be used for all marketing communications?
                            </Text>
                            <HStack justifyContent="space-between" w="100%">
                                <Button w="45%" onPress={handleCloseModal}>
                                    No
                                </Button>
                                <Button w="45%" onPress={handleYes}>
                                    Yes
                                </Button>
                            </HStack>
                        </View>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
    },
    inputStyles: {
        width: 64,
        height: 64,
        borderWidth: 1,
        borderRadius: 5,
        color: '#000',
        textAlign: 'center',
        borderColor: theme.colors.neutral[300],
    },
    isHighlighted: {
        borderColor: theme.colors.primary[500],
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
});

export default SetMpin;
