import { Profile } from 'entities/Profile';
import { ValidateError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateError.NO_DATA];
    }
    const {
        first, second, age, country, currency,
    } = profile;
    const errors: ValidateError[] = [];

    if (!first) {
        errors.push(ValidateError.INCORRECT_FIRST_NAME);
    }
    if (!second) {
        errors.push(ValidateError.INCORRECT_SECOND_NAME);
    }
    if (!age || !Number.isInteger(age) || age <= 0) {
        errors.push(ValidateError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateError.INCORRECT_COUNTRY);
    }
    if (!currency) {
        errors.push(ValidateError.INCORRECT_CURRENCY);
    }
    return errors;
};
