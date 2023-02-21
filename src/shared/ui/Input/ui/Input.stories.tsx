import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'Введите текст',
    value: '1234zvv',
};

export const InputDark = Template.bind({});
InputDark.args = {
    placeholder: 'Введите текст',
    value: '1234zvv',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
