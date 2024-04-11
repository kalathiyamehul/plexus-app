import React from 'react';
import { Text, Center, VStack, Button, Box, ScrollView, Divider } from 'native-base';
import * as Iconly from 'react-native-iconly'; // Importing icons from react-native-iconly
import { theme } from '../../style/theme';
import constant from '../../config/constant';

// Sample data for groups (replace with actual data fetched from storage)
const groupsData = [
    { id: 1, name: 'Group 1', description: 'Description of Group 1', totalExpense: 100 },
    { id: 2, name: 'Group 2', description: 'Description of Group 2', totalExpense: 200 },
    { id: 3, name: 'Group 3', description: 'Description of Group 3', totalExpense: 300 },
];

const Group = () => {
    return (
        <Center bg={theme.colors.bgcolor[400]} flex={1}>
            <VStack space={4} mt={6} alignItems="center">
                <Text fontSize="xl" fontWeight="bold">Group List</Text>
            </VStack>
            <Divider my={2} bg={theme.colors.primary[500]} />
            <ScrollView>
                {groupsData.map((group) => (
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
                ))}
            </ScrollView>
            <Button
                onPress={() => navigation.navigate('AddGroup')}
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
