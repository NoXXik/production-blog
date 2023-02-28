import React, {
    InputHTMLAttributes,
    memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        ...otherProps
    } = props;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    // Управление монтированием
    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder
                && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    onChange={onChangeHandler}
                    onSelect={onSelectHandler}
                    value={value}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...otherProps}
                />
                {isFocused
                    && <span className={cls.caret} style={{ left: `${caretPosition * 6.2}px` }} />}
            </div>
        </div>
    );
});
