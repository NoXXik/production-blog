import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './Counter.module.scss';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import {
    getCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();
    const {
        className,
    } = props;
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {value}
            </h1>
            <Button
                data-testid="increment"
                onClick={increment}
            >
                {t('Увеличить')}
            </Button>
            <Button
                data-testid="decrement"
                onClick={decrement}
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
