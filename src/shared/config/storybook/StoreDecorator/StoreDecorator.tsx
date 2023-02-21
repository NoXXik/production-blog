import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (store: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={store}>
        <StoryComponent />
    </StoreProvider>
);
