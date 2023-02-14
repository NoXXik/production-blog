import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/componentRender/componentRender';

describe('Sidebar render test', () => {
    test('Sidebar TEST 1', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle test', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
