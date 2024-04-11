// slices/groupSlice.js

import { createSlice } from '@reduxjs/toolkit';
import {
    getAllGroups,
    addGroup,
    updateGroup,
    deleteGroup,
} from './../actions/group';

const initialState = {
    loading: false,
    groups: [],
};

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllGroups.fulfilled, (state, action) => {
                console.log("action", action)
                state.loading = false;
                state.groups = action.payload;
            })
            .addCase(addGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.groups.push(action.payload);
            })
            .addCase(updateGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.groups = state.groups.map((group) =>
                    group.id === action.payload.id ? action.payload : group
                );
            })
            .addCase(deleteGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.groups = state.groups.filter((group) => group.id !== action.payload);
            });
    },
});

export default groupSlice.reducer;
