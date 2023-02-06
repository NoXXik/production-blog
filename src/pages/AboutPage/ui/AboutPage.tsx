import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t, i18n } = useTranslation('about');

    return (
        <div>
            {t('О нас')}
        </div>
    );
}
