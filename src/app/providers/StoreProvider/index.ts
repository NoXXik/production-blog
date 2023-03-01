import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    ReduxWithReducerManager,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxWithReducerManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
