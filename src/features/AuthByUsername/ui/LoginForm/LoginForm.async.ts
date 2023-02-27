import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

// @ts-ignore
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // Так делать не нужно, для proda это нужно убрать
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1000);
}));
