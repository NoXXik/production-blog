import React, { Suspense, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export default function AppRouter() {
    const {
        t,
        i18n,
    } = useTranslation('about');
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig)
                    .map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
}
