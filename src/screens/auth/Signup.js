// SignupScreen.js
import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Box, Text, VStack, Button, Center, HStack, Input } from 'native-base';
import { auth } from '../../../assets/images';
import { theme } from '../../style/theme';

const Signup = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('+91');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const handlePhoneChange = (text) => {
        const phoneWithoutPrefix = text.replace('+91', '');
        if (/^\d{0,10}$/.test(phoneWithoutPrefix)) {
            setPhoneNumber('+91' + phoneWithoutPrefix);
            setIsPhoneValid(phoneWithoutPrefix.length === 10);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                <Box flex={1} width="100%" bg="white" position="relative">
                    <Image
                        source={auth} // Replace with your image URL
                        style={styles.topImage}
                    />
                    <Center>
                        <VStack space={4} mt={4} w="90%" maxW="400px">
                            <Text fontSize="2xl" fontWeight="bold">Hey there,</Text>
                            <Text fontSize="md" color="gray.500">Enter your phone number</Text>
                            <Input
                                mt={4}
                                py={2}
                                size="lg"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChangeText={handlePhoneChange}
                                keyboardType="phone-pad"
                                maxLength={15}
                                style={styles.inputStyles}
                            />

                            <Text mt={4} fontSize="sm" color="gray.500" textAlign="left">
                                Already have an account? <Text color="blue.500" onPress={() => {
                                    navigation.navigate('Login');
                                }}>Login here</Text>
                            </Text>
                        </VStack>
                    </Center>
                    <HStack position="absolute" bottom={25} left={25}>
                        <Button w="95%"
                            onPress={() => {
                                navigation.navigate("SetMpin");
                            }}
                            isDisabled={!isPhoneValid}>
                            Submit
                        </Button>
                    </HStack>
                </Box>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        height: '30%',
    },
    inputStyles: {
        height: 45,
        borderColor: theme.colors.neutral[300],
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default Signup;
