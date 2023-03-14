import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar/ui/Avatar';
import EyeIcon from 'shared/assets/eye-icon.svg';
import CalendarIcon from 'shared/assets/calendar-icon.svg';
import { Icon } from 'shared/ui/Icon';
import {
    ArticleBlock,
    ArticleBlockType,
} from 'entities/Article/model/types/article';
import {
    ArticleCodeBlockComponent,
} from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleImageBlockComponent,
} from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
    ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
    fetchArticleById,
} from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo(({
    className,
    id,
}: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    // console.log(isLoading, 'is loading');
    // const isLoading = true;
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);
    useDynamicModuleLoad({
        reducers,
        removeOnUnmount: true,
    });
    let content;
    if (isLoading) {
        console.log('isLoading');
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    height={200}
                    width={200}
                    border="50%"
                />
                <Skeleton className={cls.title} height={32} width={400} />
                <Skeleton className={cls.skeleton} height={24} width={600} />
                <Skeleton className={cls.skeleton} height={24} width={600} />
                <Skeleton className={cls.skeleton} height={500} width="100%" />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                text={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    // align={TextAlign.CENTER}
                    size={TextSize.SIZE_L}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={String(article?.createdAt)} />
                </div>
                {article?.blocks.map((block) => renderBlock(block))}
            </>
        );
    }
    return (
        <div
            className={
                classNames(cls.ArticleDetails, {}, [className])
            }
        >
            {content}
        </div>
    );
});
