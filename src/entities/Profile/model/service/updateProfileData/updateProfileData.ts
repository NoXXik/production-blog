import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import {
    validateProfileData,
} from 'entities/Profile/model/service/validateProfileData/validateProfileData';
import { Profile, ValidateError } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateError[]>
>(
    'profile/updateProfileData',
    async (_, {
        extra, rejectWithValue, dispatch, getState,
    }) => {
        try {
            const formData = getProfileForm(getState());
            const errors = validateProfileData(formData);
            if (errors.length) {
                return rejectWithValue(errors);
            }
            const response = await extra.api.put<Profile>('/profile', formData);
            if (!response.data) {
                return rejectWithValue([ValidateError.NO_DATA]);
            }
            return response.data;
        } catch (err) {
            return rejectWithValue([ValidateError.SERVER_ERROR]);
        }
    },
);
