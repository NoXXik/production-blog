import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

export default {
    title: 'widgets/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LoginModalLight = Template.bind({});
LoginModalLight.args = {};

export const LoginModalDark = Template.bind({});
LoginModalDark.args = {};
LoginModalDark.decorators = [ThemeDecorator(Theme.DARK)];
