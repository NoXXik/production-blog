import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    About
                </AppLink>
            </div>
        </div>
    );
}
