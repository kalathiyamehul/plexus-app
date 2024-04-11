import React, { useEffect } from 'react';
import { Center, Image } from 'native-base';
import StorageService from '../../services/StorageService';
import { LOGO } from '../../../assets/images';

const Splashscreen = ({ navigation, route }) => {
    useEffect(() => {
        const redirectAfterDelay = async () => {
            let isIntroSkip = await StorageService.getData('isIntroSkip');
            let redirectScreen = "";
            if (isIntroSkip == 'yes')
                redirectScreen = "Home";
            else {
                redirectScreen = "IntroSteps";//IntroScreen
            }
            navigation.replace(redirectScreen);
        };
        const redirectTimeout = setTimeout(redirectAfterDelay, 500); // Replace 5000 with the desired delay in milliseconds
        return () => clearTimeout(redirectTimeout);
    }, []);

    return (
        <Center flex={1}>
            <Image
                source={LOGO}
                resizeMode="contain"
                alt='Logo'
                style={{
                    flex: 1,
                    height: "30%",
                    width: "50%",
                    alignSelf: 'center'
                }}
            />
        </Center>
    )
}
export default Splashscreen