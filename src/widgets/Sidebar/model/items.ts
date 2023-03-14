import React from 'react';
import { routeConfig, RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/home.svg';
import AboutIcon from 'shared/assets/about.svg';
import AboutUser from 'shared/assets/about_user.svg';
import Articles from 'shared/assets/articles.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
export const SidebarItems: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: AboutUser,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: Articles,
        authOnly: true,
    },
];
