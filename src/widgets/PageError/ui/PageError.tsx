import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    const pageReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={pageReload}>{t('Обновить страницу')}</Button>
        </div>
    );
};
