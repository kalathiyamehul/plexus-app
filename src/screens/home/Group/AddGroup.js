// AddGroup.js

import React, { useState } from 'react';
import { Center, VStack, FormControl, Input, Button, HStack, Box } from 'native-base';
import StorageService from '../../../services/StorageService';

const AddGroup = ({ navigation }) => {
    const [groupName, setGroupName] = useState('');

    const handleAddGroup = async () => {
        // Validate group name
        if (!groupName.trim()) {
            return;
        }

        // Get existing groups from AsyncStorage
        let existingGroups = await StorageService.getData('groups');
        existingGroups = existingGroups ? existingGroups : [];

        // Create new group object
        const newGroup = {
            id: Math.random().toString(),
            name: groupName.trim(),
            description: '',
            totalExpense: 0,
            activities: []
        };

        existingGroups.push(newGroup);
        await StorageService.saveData('groups', existingGroups);
        navigation.goBack();
    };

    return (
        <VStack flex={1}
            alignItems={"center"}
        >
            <VStack space={4} width="90%">
                <FormControl w="100%" >
                    <FormControl.Label>Group Name</FormControl.Label>
                    <Input
                        py={5}
                        size="lg"
                        placeholder="Enter Group Name"
                        value={groupName}
                        onChangeText={setGroupName}
                    />
                </FormControl>
            </VStack>
            <Box bg="bgcolor.400" position="absolute" bottom={0} w="100%">
                <VStack>
                    <HStack px={6} py={3} justifyContent="space-between">
                        <Button
                            w="100%"
                            onPress={handleAddGroup}>Add Group</Button>
                    </HStack>
                </VStack>
            </Box>
        </VStack>
    );
};

export default AddGroup;
