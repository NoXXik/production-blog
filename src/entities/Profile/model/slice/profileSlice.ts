import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

// export default userSlice.reducer;