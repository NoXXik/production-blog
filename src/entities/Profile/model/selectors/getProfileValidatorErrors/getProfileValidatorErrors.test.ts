import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateError } from 'entities/Profile/model/types/profile';
import { getProfileValidatorErrors } from './getProfileValidatorErrors';

describe('getProfileValidatorErrors test', () => {
    test('return validate errors', () => {
        const validatErrors = [
            ValidateError.INCORRECT_SECOND_NAME,
            ValidateError.INCORRECT_FIRST_NAME,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validatErrors,
            },
        };
        expect(getProfileValidatorErrors(state as StateSchema)).toEqual(validatErrors);
    });
    test('return validate undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validatErrors: undefined,
            },
        };
        expect(getProfileValidatorErrors(state as StateSchema)).toEqual(undefined);
    });
});
