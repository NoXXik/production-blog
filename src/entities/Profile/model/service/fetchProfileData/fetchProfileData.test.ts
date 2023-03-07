import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
} from './fetchProfileData';

describe('fetchProfileData', () => {
    test('success fetch data', async () => {
        const data = {
            first: 'first name',
            second: 'second name',
            age: 20,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data,
        }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toBeCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
