// Login.js
import React, { useState } from 'react';
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Box, Text, VStack, Button, Center, HStack } from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { auth } from '../../../assets/images';
import { theme } from '../../style/theme';

const Login = ({ navigation }) => {
    const [otp, setOtp] = useState('');

    const handleChange = code => {
        setOtp(code);
    };

    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        // <View style={{ flex: 1 }}>
        <Box flex={1} width="100%" bg="white" position="relative">
            <Image
                source={auth} // Replace with your image URL
                style={styles.topImage}
            />
            <Center>
                <VStack space={4} mt={4} w="90%" maxW="400px">
                    <Text fontSize="2xl" fontWeight="bold">Welcome back</Text>
                    <Text fontSize="md" color="gray.500">Login with MPIN</Text>
                    <OTPInputView
                        style={{
                            width: '100%',
                            height: 100,
                        }}
                        pinCount={4}
                        code={otp}
                        keyboardType="number-pad"
                        onCodeChanged={handleChange}
                        codeInputFieldStyle={[
                            styles.inputStyles,
                            {
                                backgroundColor: "white",
                            },
                        ]}
                        codeInputHighlightStyle={styles.isHighlighted}
                        onCodeFilled={code => {
                            console.log(`Code is ${code}, you are good to go!`);
                        }}
                    />

                    <Text mt={4} fontSize="sm" color="gray.500" textAlign="left">
                        Don’t have an account? <Text color="blue.500" onPress={() => {
                            navigation.navigate('Signup');
                        }}>Signup now</Text>
                    </Text>

                </VStack>
            </Center>
            <HStack position="absolute" bottom={25} left={25}>
                <Button w="95%" onPress={() => { }}>
                    Submit
                </Button>
            </HStack>
        </Box>
        // </View>
        // </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    topImage: {
        width: '100%',
        height: '30%',
    },
    otpInput: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderColor: '#00000030',
        borderRadius: 5,
        color: '#000',
    },
    otpInputHighlight: {
        borderColor: "#03DAC6",
    },
    inputStyles: {
        textAlign: 'center',
        width: 64,
        height: 64,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        borderColor: theme.colors.neutral[300],
    },
    isHighlighted: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.primary[500],
    },
});

export default Login;
