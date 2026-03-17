import { createSlice } from "@reduxjs/toolkit";
import { Group, initialStateType } from "../../types/global";
import groupThunk from "../thunks/groupsThunk";





const initialState: initialStateType<Group> = {
    data: [],
    loading: false,
    error: false
}

const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup: (state, action) => {
            const group = action.payload.group
            state.data.push(group);
        }, 
        updateGroup: (state, action) => {
            const groupId = action.payload.groupId;
            const newGroup = action.payload.group;
            state.data.map(grp => {
                if(grp._id == groupId) {
                    grp = {...grp, ...newGroup}; 
                    return grp;
                }
                return grp;
            })
        },
        deleteGroup: (state, action) => {
            const groupId = action.payload.groupId;
            state.data = state.data.filter(grp => grp._id != groupId);
        }
    },
    extraReducers: (buildder) => {
        buildder
            .addCase(groupThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(groupThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(groupThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            })
    }
});

export default groupSlice.reducer;
export const {addGroup, deleteGroup, updateGroup} = groupSlice.actions;