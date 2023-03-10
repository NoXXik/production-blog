import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginIsLoading,
} from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                loading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
