import {
    loginActions,
    loginReducer,
} from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin'),
        ))
            .toStrictEqual({ username: 'admin' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        ))
            .toStrictEqual({ password: '123' });
    });
    test('test set loading', () => {
        const state: DeepPartial<LoginSchema> = {
            loading: true,
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setLoading(true),
        ))
            .toStrictEqual({ loading: true });
    });
});
