import { lazy } from 'react';

// @ts-ignore
export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlePage')), 1000);
}));
