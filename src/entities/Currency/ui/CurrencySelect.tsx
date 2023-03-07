import React, {
    ButtonHTMLAttributes, FC, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { SelectOptions } from 'shared/ui/Select/ui/Select';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const currencyOptions: SelectOptions[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo((props:CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            label={t('Выберите валюту')}
            options={currencyOptions}
            readonly={readonly}
        />
    );
});
