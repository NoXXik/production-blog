import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useSelector, useStore } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import {
    ReducersList,
    useDynamicModuleLoad,
} from 'shared/lib/hooks/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    getLoginError,
} from '../../model/selectors/getLoginError/getLoginError';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        className,
        onSuccess,
    } = props;
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const loading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);
    useDynamicModuleLoad({
        reducers: initialReducers,
        removeOnUnmount: false,
    }); // Асинхронная подгрузка reducera
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error
                && (
                    <Text
                        title={t('Ошибка')}
                        text={t('Вы не правильно ввели логин и пороль')}
                        theme={TextTheme.ERROR}
                    />
                )}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пороль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={loading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
