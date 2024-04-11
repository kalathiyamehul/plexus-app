// AddGroup.js

import React, { useState } from 'react';
import { Center, VStack, FormControl, Input, Button } from 'native-base';
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
        };

        existingGroups.push(newGroup);
        await StorageService.saveData('groups', existingGroups);
        navigation.goBack();
    };

    return (
        <Center flex={1}>
            <VStack space={4} width="90%">
                <FormControl>
                    <Input
                        placeholder="Group Name"
                        value={groupName}
                        onChangeText={setGroupName}
                    />
                </FormControl>
                <Button onPress={handleAddGroup}>Add Group</Button>
            </VStack>
        </Center>
    );
};

export default AddGroup;
