import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter test', () => {
    test('Counter render test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('5');
        expect(screen.getByTestId('increment')).toBeInTheDocument();
        expect(screen.getByTestId('decrement')).toBeInTheDocument();
    });
    test('Counter increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });
    test('Counter decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });
});
