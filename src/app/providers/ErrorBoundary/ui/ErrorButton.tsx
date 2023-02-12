import React, {
    ButtonHTMLAttributes, FC, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ErrorButtonProps {
    className?: string;
}

// Компонент для тестирования
export const ErrorButton: FC<ErrorButtonProps> = (props) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const handleError = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const {
        className,
    } = props;
    return (
        <Button
            onClick={handleError}
            className={classNames('.ErrorButton', {}, [className])}
        >
            {t('Выполнить ошибку')}
        </Button>
    );
};
