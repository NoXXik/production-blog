import { lazy } from 'react';

// @ts-ignore
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
