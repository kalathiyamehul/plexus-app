// actions/group.action.js
import StorageService from '../../services/StorageService';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllGroups = createAsyncThunk("GET_ALL_GROUPS", async () => {
    try {
        const data = await StorageService.getData('groups');
        return data;
    } catch (error) {
        // Handle error
    }
});
export const deleteGroup = createAsyncThunk(
    "DELETE_GROUP",
    async (groupId, dispatch, getState) => {
        try {
            const { groups } = getState().group;
            const updatedGroups = groups.filter((group) => group.id !== groupId);
            await StorageService.saveData('groups', updatedGroups);
            dispatch(getAllGroups);
            return true;
        } catch (error) {
            // Handle error
        }
    }
);
export const addGroup = createAsyncThunk("ADD_GROUP", async (data, dispatch, getState) => {
    try {
        const { groups } = getState().group;
        await StorageService.saveData('groups', groups?.push(data));
        dispatch(getAllGroups());
        return true;
    } catch (error) {
        // Handle error
    }
});
export const updateGroup = createAsyncThunk("UPDATE_BOQ", async (updatedGroup, dispatch, getState) => {
    try {
        const { groups } = getState().group;
        const updatedGroups = groups.map((group) =>
            group.id === updatedGroup.id ? updatedGroup : group
        );
        await StorageService.saveData('groups', updatedGroups);
        dispatch(getAllGroups());
        return true;
    } catch (error) {
        // Handle error
    }
});