import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div
            className={
                classNames(cls.ArticleImageBlockComponent, {}, [className])
            }
        >
            <img src={block.src} alt={block.title ? block.title : ''} className={cls.img} />
            {block.title && <Text align={TextAlign.CENTER} text={block.title} />}
        </div>
    );
});
