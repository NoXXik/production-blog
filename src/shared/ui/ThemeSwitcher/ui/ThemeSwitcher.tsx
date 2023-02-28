import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { format } from 'path';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeDark from 'shared/assets/ThemeDark.svg';
import ThemeLight from 'shared/assets/ThemeLight.svg';
import UserAvater from 'shared/assets/user-avater.png';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    );
});
