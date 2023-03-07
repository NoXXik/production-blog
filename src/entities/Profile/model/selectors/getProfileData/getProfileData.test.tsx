import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData test', () => {
    test('return data', () => {
        const data = {
            first: 'first name',
            second: 'second name',
            age: 20,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('return undefined data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: undefined,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
