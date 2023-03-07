import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
    test('return form', () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('return undefined form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: undefined,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
