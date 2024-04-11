// GroupDetail.js

import React from 'react';
import { ImageBackground, Text, Center, VStack, Box, ScrollView } from 'native-base';
import * as Iconly from 'react-native-iconly'; // Import Iconly for setting icons

const GroupDetail = ({ route, navigation }) => {
    const { group } = route.params;

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Generate random background color for the group detail page
    const backgroundColor = getRandomColor();

    return (
        <Box flex={1}>
            {/* Background */}
            <Box height="15%" bg={backgroundColor}></Box>
            {/* Content */}
            <Box flex={1} p={4} position="relative">
                {/* Header */}
                <VStack space={4}>
                    <Box height="15%" justifyContent="center">
                        {/* Back arrow button */}
                        <Iconly.ArrowLeft set="light" size={24} color="white" onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 10, top: 10 }} />
                        {/* Setting icon */}
                        <Iconly.Setting set="bold" size={24} color="white" onPress={() => console.log('Setting icon pressed')} style={{ position: 'absolute', right: 10, top: 10 }} />
                    </Box>
                    {/* Group icon */}
                    <Box height="25%">
                        <Iconly.People set="light" size={100} color="white" style={{ position: 'absolute', left: '7%', top: '20%' }} />
                    </Box>
                    {/* Group name */}
                    <Text fontSize="3xl" fontWeight="bold" color="white">{group.name}</Text>
                    {/* Total expense */}
                    <Text fontSize="lg" fontWeight="bold" color="white">Total Expense: ${group.totalExpense}</Text>
                </VStack>
                {/* Divider */}
                <Box borderBottomWidth={1} borderColor="white" my={4} />
                {/* Activity list */}
                <ScrollView>
                    {group.activities.map((activity, index) => (
                        <Box key={index} flexDirection="row" alignItems="center" justifyContent="space-between" my={2}>
                            {/* Date */}
                            <Text fontSize="lg" color="white">{activity.date}</Text>
                            {/* Icon */}
                            {/* <Iconly name={activity.icon} set="light" size={24} color="white" /> */}
                            {/* Description */}
                            <Text fontSize="lg" color="white">{activity.description}</Text>
                            {/* Amount */}
                            <Text fontSize="lg" color="white">${activity.amount}</Text>
                        </Box>
                    ))}
                </ScrollView>
            </Box>
        </Box>
    );
};

export default GroupDetail;
