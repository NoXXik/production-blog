import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from './Button';

describe('Button TEST', () => {
    test('Button TEST 1', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button TEST with class CLEAR', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
