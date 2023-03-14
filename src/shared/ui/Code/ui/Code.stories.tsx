import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodeLight = Template.bind({});
CodeLight.args = {
    text: 'export const Code = memo((props: CodeProps) => {\n'
        + '    const {\n'
        + '        className,\n'
        + '        children,\n'
        + '    } = props;\n'
        + '    return (\n'
        + '        <pre>\n'
        + '            <code\n'
        + '                className={\n'
        + '                    classNames(cls.Code, {}, [className])\n'
        + '                }\n'
        + '            >\n'
        + '                {children}\n'
        + '            </code>\n'
        + '        </pre>\n'
        + '    );\n'
        + '});',
};
export const CodeDark = Template.bind({});
CodeDark.args = {
    text: 'export const Code = memo((props: CodeProps) => {\n'
        + '    const {\n'
        + '        className,\n'
        + '        children,\n'
        + '    } = props;\n'
        + '    return (\n'
        + '        <pre>\n'
        + '            <code\n'
        + '                className={\n'
        + '                    classNames(cls.Code, {}, [className])\n'
        + '                }\n'
        + '            >\n'
        + '                {children}\n'
        + '            </code>\n'
        + '        </pre>\n'
        + '    );\n'
        + '});',
};
CodeDark.decorators = [ThemeDecorator(Theme.DARK)];
