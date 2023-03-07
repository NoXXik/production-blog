import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import AvatarImage from 'shared/assets/avatar.jpeg';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите город',
    options: [
        { value: '123', content: '123' },
        { value: '456', content: '456' },
    ],
};
