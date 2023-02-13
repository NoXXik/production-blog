import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const SECONDARYDARK = Template.bind({});
SECONDARYDARK.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SECONDARYDARK.decorators = [ThemeDecorator(Theme.DARK)];
