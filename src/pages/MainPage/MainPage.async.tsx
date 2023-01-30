import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1000)
}))