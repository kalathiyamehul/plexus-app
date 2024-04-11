/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    Link,
    Text,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    VStack,
    Box,
} from 'native-base';
import { theme } from '../../style/theme';

// Color Switch Component
function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === 'light'}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
const Group = () => {
    return (
        <Center bg={theme.colors.bgcolor[400]} flex={1}>
            <VStack space={5} alignItems="center">
                <Text>Group</Text>
            </VStack>
        </Center>
    );
};
export default Group;
