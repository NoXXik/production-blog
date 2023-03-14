import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { articleDetailsReducer } from './model/slices/articleDetailsSlice';
import { Article, ArticleBlockType, ArticleType } from './model/types/article';

export {
    ArticleDetails,
    ArticleDetailsSchema,
    articleDetailsReducer,
    Article, ArticleBlockType, ArticleType,
};
