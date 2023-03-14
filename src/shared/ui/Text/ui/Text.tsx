import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    WARNING = 'warning',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    size?: TextSize;
    theme?: TextTheme,
    align?: TextAlign,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.SIZE_M,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    const mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
