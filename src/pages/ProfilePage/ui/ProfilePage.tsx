import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string;
}

const defaultReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;
    useDynamicModuleLoad({ reducers: defaultReducers, removeOnUnmount: true });
    return (
        <div
            className={classNames('', {}, [className])}
        >
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;
