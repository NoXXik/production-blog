import { lazy } from 'react';

// @ts-ignore
export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
