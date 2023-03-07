import React, { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading, getProfileReadonly,
    getProfileValidatorErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ValidateError } from 'entities/Profile/model/types/profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const defaultReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const errors = useSelector(getProfileValidatorErrors);
    const readonly = useSelector(getProfileReadonly);
    const {
        className,
    } = props;
    const validateTranslateErrors = {
        [ValidateError.SERVER_ERROR]: t('Возникла ошибка при сохранении'),
        [ValidateError.NO_DATA]: t('Данные отстусвуют'),
        [ValidateError.INCORRECT_FIRST_NAME]: t('Некорректное имя пользователя'),
        [ValidateError.INCORRECT_SECOND_NAME]: t('Некорректная фамлия пользователя'),
        [ValidateError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateError.INCORRECT_COUNTRY]: t('Выберите страну'),
        [ValidateError.INCORRECT_CURRENCY]: t('Выберите валюту'),
    };
    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    const onChangeSecondname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ second: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);
    useDynamicModuleLoad({ reducers: defaultReducers, removeOnUnmount: true });
    return (
        <div
            className={classNames('', {}, [className])}
        >
            <ProfilePageHeader />
            {errors && errors.map((error) => (
                <Text key={error} theme={TextTheme.ERROR} text={validateTranslateErrors[error]} />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeSecondname={onChangeSecondname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
            />
        </div>
    );
};

export default ProfilePage;
