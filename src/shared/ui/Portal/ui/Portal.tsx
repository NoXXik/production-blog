import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';
import cls from './Portal.module.scss';

interface PortalProps {
    element?: HTMLElement;
    children: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        element = document.body,
        children,
    } = props;
    return (
        createPortal(children, element)
    );
};
