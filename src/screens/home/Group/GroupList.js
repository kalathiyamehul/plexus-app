import React, { useEffect, useState } from 'react';
import { Text, Center, VStack, Button, Box, ScrollView, Divider } from 'native-base';
import * as Iconly from 'react-native-iconly'; // Importing icons from react-native-iconly
import { theme } from '../../../style/theme';
import constant from '../../../config/constant';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGroups } from '../../../redux/actions/group';

const Group = ({ navigation }) => {
    const { groups } = useSelector(state => state.group);
    console.log("groups", groups)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGroups());
    }, [])
    const handleGroupClick = (group) => {
        navigation.navigate('GroupDetail', { group });
    };
    return (
        <Center bg={theme.colors.bgcolor[400]} flex={1}>
            <VStack space={4} mt={6} alignItems="center">
                <Text fontSize="xl" fontWeight="bold">Group List</Text>
            </VStack>
            <Divider my={2} bg={theme.colors.primary[500]} />
            <ScrollView>
                {groups?.map((group) => (
                    <TouchableOpacity key={group.id} onPress={() => handleGroupClick(group)}>
                        <Box
                            key={group.id}
                            bg="white"
                            shadow={2}
                            rounded="lg"
                            p={4}
                            m={2}
                            width="90%"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Box width="30%" alignItems="center">
                                <Iconly.People
                                    primaryColor={theme.colors.primary[500]}
                                    set={'bold'}
                                    size={40}
                                />
                            </Box>
                            <Box width="70%">
                                <VStack space={1} alignItems="flex-start">
                                    <Text fontSize="lg" fontWeight="bold">{group.name}</Text>
                                    <Text fontSize="sm" color="gray.500">{group.description}</Text>
                                    <Text fontSize="md" fontWeight="bold">Total Expense: {constant.currency}{group.totalExpense}</Text>
                                </VStack>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Button
                onPress={() => navigation.navigate('Login')}
                width="50%"
                marginBottom={4}
                shadow={6}
                borderRadius={50}
            >
                Add Group
            </Button>
        </Center>
    );
};

export default Group;
