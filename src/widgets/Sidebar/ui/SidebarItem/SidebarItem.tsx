import React, { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/home.svg';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    authOnly?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();
    const {
        item,
        collapsed,
        authOnly,
    } = props;
    const isAuth = useSelector(getUserAuthData);
    if (!isAuth && item.authOnly) {
        return null;
    }
    return (
        <div className={cls.item} key={item.path}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
                to={item.path}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    );
});
