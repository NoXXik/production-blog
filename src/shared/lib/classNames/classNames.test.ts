import { classNames } from './classNames';

describe('classNames', () => {
    test('with only className', () => {
        expect(classNames('className', {}, [])).toBe('className');
    });
    test('with additional', () => {
        const expected = 'className class1 class2';
        expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with additional and mod', () => {
        const expected = 'className class1 class2 hovered';
        expect(classNames('className', { hovered: true, focus: false }, ['class1', 'class2'])).toBe(expected);
    });
    test('with additional and mod is undefined', () => {
        const expected = 'className class1 class2';
        expect(classNames('className', { hovered: undefined, focus: false }, ['class1', 'class2'])).toBe(expected);
    });
});
