import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input';
import { useState } from 'react';

export default function MainPage() {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('');
    return (
        <div>
            <ErrorButton />
            {t('Главная страница')}
        </div>
    );
}
