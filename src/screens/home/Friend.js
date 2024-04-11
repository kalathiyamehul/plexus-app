import React from 'react';
import { theme } from '../../style/theme';
import {
    Text,
    Center,
} from 'native-base';
const Friend = () => {
    return (
        <Center bg={theme.colors.bgcolor[400]} flex={1}>
            <Text>Friend</Text>
        </Center>
    );
};

export default Friend;
