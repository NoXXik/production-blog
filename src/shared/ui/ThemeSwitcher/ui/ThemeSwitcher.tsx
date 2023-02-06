import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { format } from 'path';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeDark from 'shared/assets/ThemeDark.svg';
import ThemeLight from 'shared/assets/ThemeLight.svg';
import UserAvater from 'shared/assets/user-avater.png';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
};
