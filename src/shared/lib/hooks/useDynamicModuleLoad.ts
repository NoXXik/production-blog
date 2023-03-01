import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxWithReducerManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}
interface UseDynamicModuleLoadProps {
    reducers: ReducersList;
    removeOnUnmount?: boolean;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

export const useDynamicModuleLoad = (props: UseDynamicModuleLoadProps) => {
    const {
        reducers,
        removeOnUnmount = true,
    } = props;
    const store = useStore() as ReduxWithReducerManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([key, reducer]) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({ type: `@REMOVE ${key} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};
