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
import { Box, Text, VStack, HStack, Divider, Button, View, useColorModeValue } from 'native-base';
var { height, width } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import StorageService from '../../services/StorageService';
import { blockchaincrypto, rupeeinvestment, stone, wallet_money_added } from '../../../assets/json';
import { theme } from '../../style/theme';

const slides = [
    {
        key: 1,
        title: 'Be an active participant in your favorite Content and Creators',
        text: 'Unlock opportunity to partake in Content IP revenues across assets such as Films, Music, Books & more',
        image: rupeeinvestment,
        backgroundColor: '#86888F',
    },
    {
        key: 2,
        title: 'Purchase Tokens of the various projects and benefit from IP cycle.',
        text: `Embrace the earning potential with project Tokens and Content IP.`,
        image: stone,
        backgroundColor: '#86888F',
    },
    {
        key: 2,
        title: 'Be an active participant in your favorite Content and Creators',
        text: 'Unlock opportunity to partake in Content IP revenues across assets such as Films, Music, Books & more',
        image: blockchaincrypto,
        backgroundColor: '#86888F',
    },
    {
        key: 4,
        title: 'Benefit from over 25 Content IP Rights and partake in their revenues',
        text: 'Watch your project grow in value over time and be part of unlocking great returns.',
        image: wallet_money_added,
        backgroundColor: '#86888F',
    },
];

const IntroSteps = ({ navigation, route }) => {
    const _renderItem = ({ item, i }) => {
        return (
            <VStack justifycontent="center" alignItems="center" key={item.key}>
                <LottieView
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
                    }} />
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
                            width={130} onPress={() => {
                                this.slider && this.slider.goToSlide(props + 1, true);
                            }}>
                            Next
                        </Button>
                    ) : (

                        <Button
                            bg="primary.500"
                            width={200} onPress={() => skipIntro()}>
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

