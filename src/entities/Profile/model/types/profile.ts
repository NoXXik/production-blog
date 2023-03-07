import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateError {
    INCORRECT_FIRST_NAME= 'INCORRECT_FIRST_NAME',
    INCORRECT_SECOND_NAME= 'INCORRECT_SECOND_NAME',
    INCORRECT_AGE= 'INCORRECT_AGE',
    INCORRECT_COUNTRY= 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}
export interface Profile {
    first?: string;
    second?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validatErrors?: ValidateError[];
}
