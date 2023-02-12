import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import cls from './PageLoader.module.scss';

interface LoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [])}>
        <Loader />
    </div>
);
