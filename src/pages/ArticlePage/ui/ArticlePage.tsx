import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = memo(({ className }: ArticlePageProps) => {
    const { t } = useTranslation('article');
    return (
        <div
            className={
                classNames(cls.ArticlePage, {}, [className])
            }
        />
    );
});

export default ArticlePage;
