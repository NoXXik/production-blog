import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
                {t('Статьи не найдено')}
            </div>
        );
    }
    return (
        <div
            className={
                classNames(cls.ArticleDetailsPge, {}, [className])
            }
        >
            <ArticleDetails id={id} />
        </div>
    );
});

export default memo(ArticleDetailsPage);
