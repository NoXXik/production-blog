import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment counter value', () => {
        const state: CounterSchema = {
            value: 5,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 6 });
    });
    test('decrement counter value', () => {
        const state: CounterSchema = {
            value: 5,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 4 });
    });
    test('decrement counter value with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
    });
});
