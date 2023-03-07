import React, {
    ButtonHTMLAttributes, ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    onChange?: (value:string) => void;
    value?: string;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly,
    } = props;
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);
    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);
    return (
        <div
            className={classNames(cls.SelectWrapper, {}, [className])}
        >
            { label && (
                <span className={cls.label}>
                    {`${label} >`}
                </span>
            )}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
});
