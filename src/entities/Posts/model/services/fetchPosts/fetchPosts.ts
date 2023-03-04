import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { ReturnFetchPosts, SortParamFetchPosts } from '../../types/PostsSchema'

export interface FetchPostsProps {
	page: number
	sort?: SortParamFetchPosts
	search?: string
}


export const fetchPosts = createAsyncThunk<ReturnFetchPosts, FetchPostsProps, ThunkConfig<string>>(
	'posts/fetchPosts',
	async (
		params,
		thunkAPI
	) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get('/posts', {
				params: {
					_limit: 10,
					_page: params.page,
					_sort: params.sort?.sort,
					_order: params.sort?.order,
					q: params.search
				}
			})

			return {
				data: response.data,
				totalCount: +response.headers['x-total-count']
			}
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)