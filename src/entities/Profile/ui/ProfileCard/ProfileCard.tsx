import React, { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { getProfileReadonly, Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import { Select } from 'shared/ui/Select';
import { SelectOptions } from 'shared/ui/Select/ui/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading: boolean | undefined;
    error?: string;
    readonly?: boolean;
    onChangeSecondname?:(value?:string) => void;
    onChangeFirstname?:(value?:string) => void;
    onChangeCity?: (value?:string) => void;
    onChangeAge?: (value?:string) => void;
    onChangeUsername?: (value?:string) => void;
    onChangeAvatar?: (value?:string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeSecondname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }
    const mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data.avatar}
                            size={200}
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше Имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.second}
                    placeholder={t('Ваше Фамилия')}
                    onChange={onChangeSecondname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возвраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватарку')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
                {/* <Select label={t('Выберите валюту')} options={countryOptions} /> */}
            </div>
        </div>
    );
};
