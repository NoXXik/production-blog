import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
    loginByUsername,
} from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    loading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        // When our request is pending:
        // - store the 'pending' state as the status for the corresponding pokemon name
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.error = undefined;
            state.loading = true;
        });
        // When our request is fulfilled:
        // - store the 'fulfilled' state as the status for the corresponding pokemon name
        // - and store the received payload as the data for the corresponding pokemon name
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.loading = false;
        });
        // When our request is rejected:
        // - store the 'rejected' state as the status for the corresponding pokemon name
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

// export default userSlice.reducer;
