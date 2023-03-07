import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect />;

export const Primary = Template.bind({});
Primary.args = {
};
