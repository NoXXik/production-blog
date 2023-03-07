import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
    profileActions,
    profileReducer,
} from './profileSlice';
import { ProfileSchema } from '../types/profile';

const data = {
    first: 'first name',
    second: 'second name',
    age: 20,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Almetevsk',
    username: 'admin',
};

describe('profileSlice', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { ...data, first: '' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        ))
            .toEqual({
                readonly: true, validationErrors: undefined, form: data, data,
            });
    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                first: '123',
            },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ first: '12345' }),
        ))
            .toEqual({
                form: { first: '12345' },
            });
    });
});
