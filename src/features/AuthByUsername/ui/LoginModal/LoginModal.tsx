import React, {
    ButtonHTMLAttributes, FC, Suspense, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
// import { LoginForm } from '../LoginForm/LoginForm';
import { Loader } from 'shared/ui/Loader';
import {
    LoginFormAsync,
} from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames('LoginModal', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
