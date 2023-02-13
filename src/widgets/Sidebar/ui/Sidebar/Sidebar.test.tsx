import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from '../../../../shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar render test', () => {
    test('Sidebar TEST 1', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle test', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
