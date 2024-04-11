// AppNavigator.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Iconly from 'react-native-iconly';
import { View, useColorMode, useColorModeValue, Center, Text } from 'native-base'
import { Keyboard, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

//custom
import { theme } from '../style/theme';

//screen
import Group from '../screens/home/Group';
import AccountScreen from '../screens/home/Account';
import Friend from '../screens/home/Friend';
import Splashscreen from '../screens/intro/SplashScreen';
import IntroSteps from '../screens/intro/IntroSteps';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const screenOptions = {
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: useColorModeValue('#F9FAFF', theme.colors.dark[500]),
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTitleStyle: {
            fontFamily: 'Gilroy-SemiBold',
            color: useColorModeValue('#1F2329', 'white'),
            fontSize: 18,
        },
        headerTintColor: '#000',
        headerLeft: ({ canGoBack, onPress }) =>
            canGoBack && (
                <TouchableOpacity
                    style={{
                        paddingVertical: 20,
                    }}
                    onPress={onPress}>
                    <View ml={5}>
                        <Iconly.ArrowLeft size={22}
                            primaryColor={useColorModeValue('#000', "#fff")}
                            set="bold" />
                    </View>
                </TouchableOpacity>
            ),
        cardStyle: {
            backgroundColor: colorMode === 'light' ? 'white' : theme.colors.bgcolor[500]
        },
    };

    function MyTabBar({ state, descriptors, navigation }) {
        const focusedOptions = descriptors[state.routes[state.index].key].options;
        const [keyboardStatus, setKeyboardStatus] = useState(false);
        useEffect(() => {
            const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
                setKeyboardStatus(true);
            });
            const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
                setKeyboardStatus(false);
            });

            return () => {
                showSubscription.remove();
                hideSubscription.remove();
            };
        }, []);

        if (focusedOptions.tabBarVisible === false || keyboardStatus) {
            return null;
        }

        return (
            <View style={{
                flexDirection: 'row',
                paddingTop: 10,
                backgroundColor: theme.colors.bgcolor[400],
                borderTopColor: theme.colors.neutral[400],
                borderTopWidth: 1,
                alignItems: "center"
            }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <Pressable
                            key={`${options.title}`}
                            opacity={isFocused ? 1 : 0.5}
                            flex={1}
                            onPress={onPress}>
                            <Center>
                                {index === 0 ? (
                                    <Iconly.People
                                        primaryColor={isFocused ? theme.colors.primary[500] : theme.colors.neutral[600]}
                                        set={'bold'}
                                        size={24}
                                    />
                                ) : index === 1 ? (
                                        <Iconly.AddUser
                                            primaryColor={isFocused ? theme.colors.primary[500] : theme.colors.neutral[600]}
                                            set={'bold'}
                                            size={24}
                                    />
                                ) : index === 2 ? (
                                            <Iconly.Home
                                                primaryColor={isFocused ? theme.colors.primary[500] : theme.colors.neutral[600]}
                                                set={'bold'}
                                                size={24}
                                    />
                                ) : (
                                                <></>
                                )}

                                <Text
                                    style={styles.footerTabText}
                                    color={isFocused ? theme.colors.primary[500] : '#6A7381'}
                                    fontSize={14}>
                                    {options.title}
                                </Text>
                            </Center>
                        </Pressable>
                    );
                })}
            </View>
        );
    }
    const BottomTabs = () => {
        return (
            <Tab.Navigator
                screenOptions={{ ...screenOptions, tabBarHideOnKeyboard: true }}
                tabBar={props => <MyTabBar {...props} />}
            >
                <Tab.Screen
                    name="Group"
                    component={Group}
                    options={{ headerShown: false, title: 'Group' }}
                />
                <Tab.Screen
                    name="Friend"
                    component={Friend}
                    options={{ headerShown: false, title: 'Friend' }}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{ headerShown: false, title: 'Account' }}
                />
            </Tab.Navigator>
        );
    };


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen">
                <Stack.Screen name="Home" component={BottomTabs}
                    options={{ headerShown: false }} />

                <Stack.Screen name="SplashScreen" component={Splashscreen}
                    options={{ headerShown: false }} />

                <Stack.Screen name="IntroSteps" component={IntroSteps}
                    options={{ headerShown: false }} />

                <Stack.Screen name="Group" component={Group}
                    options={{ headerShown: false }} />

                <Stack.Screen name="Friend" component={Friend}
                    options={{ headerShown: false }} />

                <Stack.Screen name="Account" component={AccountScreen}
                    options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

const styles = StyleSheet.create({
    footerTabText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 10,
    },
});
