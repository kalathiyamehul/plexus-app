// StorageService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
    saveData: async (key, data) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.log('Error saving data:', error);
        }
    },

    getData: async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.log('Error getting data:', error);
            return null;
        }
    },
};

export default StorageService;
