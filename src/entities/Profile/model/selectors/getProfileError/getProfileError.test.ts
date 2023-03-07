import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError test', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('return undefined data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: undefined,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
