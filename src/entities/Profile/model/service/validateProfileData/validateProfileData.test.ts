import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData', () => {
    test('without errors validateProfileData', async () => {
        const data = {
            first: 'first name',
            second: 'second name',
            age: 20,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const errors = validateProfileData(data);
        expect(errors).toEqual([]);
    });
    test('without first and second name', async () => {
        const data = {
            first: '',
            second: '',
            age: 2,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const errors = validateProfileData(data);
        expect(errors)
            .toEqual([ValidateError.INCORRECT_FIRST_NAME, ValidateError.INCORRECT_SECOND_NAME]);
    });
    test('with age <= 0', async () => {
        const data = {
            first: 'sdf',
            second: 'sdf',
            age: -5,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const errors = validateProfileData(data);
        expect(errors)
            .toEqual([ValidateError.INCORRECT_AGE]);
    });
    test('without country', async () => {
        const data = {
            first: 'sdf',
            second: 'sdf',
            age: 20,
            country: undefined,
            currency: Currency.RUB,
            city: 'Almetevsk',
            username: 'admin',
        };
        const errors = validateProfileData(data);
        expect(errors)
            .toEqual([ValidateError.INCORRECT_COUNTRY]);
    });
    test('without currency', async () => {
        const data = {
            first: 'sdf',
            second: 'sdf',
            age: 20,
            country: Country.Russia,
            currency: undefined,
            city: 'Almetevsk',
            username: 'admin',
        };
        const errors = validateProfileData(data);
        expect(errors)
            .toEqual([ValidateError.INCORRECT_CURRENCY]);
    });
});
