import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue, dispatch }) => {
        try {
            // @ts-ignore
            const response = await extra.api.get<Article>(`/articles/${articleId}`);
            // setTimeout(() => {
            //     console.log('timeout');
            // }, 1000);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);
