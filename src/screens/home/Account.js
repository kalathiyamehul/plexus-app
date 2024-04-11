import React from 'react';
import {
    Text,
    Center,
} from 'native-base';
import { theme } from '../../style/theme';
const AccountScreen = () => {
    return (
        <Center bg={theme.colors.bgcolor[400]} flex={1}>
            <Text>Account</Text>
        </Center>
    );
};

export default AccountScreen;
