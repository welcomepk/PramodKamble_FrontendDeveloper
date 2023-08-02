import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = []

const capsulesSlice = createSlice({
    name: 'capsules',
    initialState,
    reducers: {
        setCapsules: (state, action) => {
            return action.payload;
        },
    },

});

export const { setCapsules } = capsulesSlice.actions;
export default capsulesSlice.reducer;