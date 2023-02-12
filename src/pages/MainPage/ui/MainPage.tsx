import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';

export default function MainPage() {
    const { t, i18n } = useTranslation('main');
    return (
        <div>
            <ErrorButton />
            {t('Главная страница')}
        </div>
    );
}
