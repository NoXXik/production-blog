import React, { ButtonHTMLAttributes, FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad';
import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
    className?: string;
}

const defaultReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        className,
    } = props;
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    useDynamicModuleLoad({ reducers: defaultReducers, removeOnUnmount: true });
    return (
        <div
            className={classNames('', {}, [className])}
        >
            {t('Profile page')}
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
