import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidatorErrors = (state: StateSchema) => state.profile?.validatErrors;
