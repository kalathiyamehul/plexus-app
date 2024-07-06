// OnboardingScreen.js
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image, TouchableOpacity, Keyboard } from 'react-native';
import { Box, Text, VStack, Button, Center, Input, HStack } from 'native-base';
import { theme } from '../../style/theme';  // Adjust the path to your theme file

const OnboardingScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');

    const occupations = [
        { label: 'Clinician', image: require('../../../assets/images/clinician.png') },
        { label: 'Consultant', image: require('../../../assets/images/consultant.png') },
        { label: 'Freelancer', image: require('../../../assets/images/freelancer.png') },
        { label: 'Lab Tech', image: require('../../../assets/images/labtech.png') },
        { label: 'Other', image: require('../../../assets/images/other.png') },
    ];

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                <Box flex={1} width="100%" bg="white" position="relative" p={4}>
                    <Center>
                        <VStack space={4} mt={4} w="90%" maxW="400px">
                            <Text fontSize="2xl" fontWeight="bold">Let’s get started</Text>
                            <Text fontSize="md" color="gray.500">We want to know who you are</Text>
                            <Text fontSize="md" mt={4}>What do we call you?</Text>
                            <Input
                                mt={2}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                                style={styles.inputStyles}
                            />
                            <Text fontSize="md" mt={4}>What is your occupation?</Text>
                            <HStack space={3} mt={2}>
                                {occupations.slice(0, 3).map((occ, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.occupationCard,
                                            occupation === occ.label && styles.selectedOccupation,
                                        ]}
                                        onPress={() => setOccupation(occ.label)}
                                    >
                                        <Image source={occ.image} style={styles.occupationImage} />
                                        <Text mt={2} fontSize="sm" textAlign="center">{occ.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </HStack>
                            <HStack>
                                {occupations.slice(3).map((occ, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[
                                            styles.occupationCard,
                                            occupation === occ.label && styles.selectedOccupation,
                                        ]}
                                        onPress={() => setOccupation(occ.label)}
                                    >
                                        <Image source={occ.image} style={styles.occupationImage} />
                                        <Text mt={2} fontSize="sm" textAlign="center">{occ.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </HStack>
                        </VStack>
                    </Center>
                    <HStack position="absolute" bottom={25} left={25} right={25}>
                        <Button w="100%" onPress={() => {
                            navigation.navigate('Home');
                        }
                        }>
                            Continue
                        </Button>
                    </HStack>
                </Box>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    inputStyles: {
        height: 45,
        borderColor: theme.colors.neutral[300],
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    occupationCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.neutral[400],
        width: '30%',
        margin: '1.5%',
    },
    selectedOccupation: {
        borderColor: theme.colors.primary[500],
    },
    occupationImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});

export default OnboardingScreen;
