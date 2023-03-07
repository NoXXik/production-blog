import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import AvatarImage from 'shared/assets/avatar.jpeg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    alt: 'avatar',
    size: 150,
    src: AvatarImage,
};
export const Small = Template.bind({});
Small.args = {
    alt: 'avatar',
    size: 50,
    src: AvatarImage,
};
