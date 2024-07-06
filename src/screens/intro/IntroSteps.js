import React, { useEffect } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Box, Text, VStack, HStack, Divider, Button, View, useColorModeValue, Image } from 'native-base';
var { height, width } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import StorageService from '../../services/StorageService';
import { blockchaincrypto, rupeeinvestment, stone, wallet_money_added } from '../../../assets/json';
import { theme } from '../../style/theme';
import { step1, step2, step3 } from '../../../assets/images';

const slides = [
    {
        key: 1,
        title: 'Connect with Dentists across India',
        text: 'Transform your dental practice with our app! Connect with consultants, freelancers, technicians and streamline your workflow—all in one place.',
        image: step1,
        backgroundColor: '#86888F',
    },
    {
        key: 2,
        title: 'Effortless Appointment Booking',
        text: `Book appointments with consultants, laboratories and freelancers easily. Post cases of the day and track patient data seamlessly.`,
        image: step2,
        backgroundColor: '#86888F',
    },
    {
        key: 3,
        title: 'Collaborate and Succeed',
        text: 'Showcase your expertise, provide consultations and collaborate on complex cases. Boost efficiency and stay at the cutting edge of dental innovation.',
        image: step3,
        backgroundColor: '#86888F',
    }
];

const IntroSteps = ({ navigation, route }) => {
    const _renderItem = ({ item, i }) => {
        return (
            <VStack justifycontent="center" alignItems="center" key={item.key}>
                {/* <LottieView
                    source={item.image}
                    autoPlay={true}
                    loop={true}
                    resizeMode="contain"
                    style={{
                        height: height / 3,
                        marginBottom: "10%",
                        marginTop: "10%",
                        width: width,
                        alignItems: 'center',
                    }} /> */}
                <Image
                    source={item?.image}
                    resizeMode="contain"
                    alt='Logo'
                    style={{
                        height: "50%",
                        width: "50%",
                        alignSelf: 'center'
                    }}
                />
                <Box
                    px={4}
                    w="100%"
                    mt={8}
                    h={height / 2}
                    justifycontent="center"
                    alignItems="center">
                    <Text
                        fontSize={24}
                        fontWeight={600}
                        lineHeight="28.13px"
                        color={theme.colors.neutral[800]}
                        textAlign="center">
                        {item.title}
                    </Text>
                    <Text
                        mt={3}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight="24px"
                        color="neutral.500"
                        textAlign="center">
                        {item.text}
                    </Text>
                </Box>
            </VStack>
        );
    };
    async function skipIntro() {
        await StorageService.saveData('isIntroSkip', 'yes');
        navigation.replace('Home');
    }
    const _renderPagination = props => {
        return (
            <View>
                <Box
                    justifycontent="center"
                    alignItems="center"
                    mb={10}>
                    <HStack>
                        {slides.map((item, index) => (
                            <View
                                key={index}
                                w={props == index ? 25 : 15}
                                h={1}
                                borderRadius={10}
                                bg={props == index ? '#6A7381' : '#EEF1F6'}
                                mr={2}
                            />
                        ))}
                    </HStack>
                </Box>
                <Box
                    justifycontent="center"
                    alignItems="center"
                    mb={10}>
                    {props != 2 ? (
                        <Button
                            bg="primary.500"
                            width={"90%"}
                            onPress={() => {
                                this.slider && this.slider.goToSlide(props + 1, true);
                            }}>
                            Next
                        </Button>
                    ) : (

                        <Button
                            bg="primary.500"
                                width={"90%"}
                                onPress={() => skipIntro()}>
                            Get started
                        </Button>
                    )}
                </Box>
            </View>
        );
    };
    return (
        <>
            <SafeAreaView />
            <StatusBar barStyle="dark-content" />
            <Box flex={1} style={{ backgroundColor: '#ffffff' }}>
                <TouchableOpacity
                    onPress={() => skipIntro()}
                    style={{
                        backgroundColor: 'transparent',
                        marginTop: '6%',
                        marginLeft: '5%',
                        width: '15%',
                        padding: 5,
                        borderColor: '#E6E8EC',
                        borderWidth: 2.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                    }}>
                    <Text
                        fontSize={14}
                        color={theme.colors.neutral[800]}
                        fontWeight={600}
                    >
                        Skip
                    </Text>
                </TouchableOpacity>
                <AppIntroSlider
                    renderPagination={_renderPagination}
                    ref={ref => (this.slider = ref)}
                    renderItem={_renderItem}
                    data={slides}
                    onDone={false}
                />
            </Box>
        </>
    );
}
export default IntroSteps

