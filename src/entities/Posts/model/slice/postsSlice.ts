import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPosts } from '../services/fetchPosts/fetchPosts'
import { PostsSchema, ReturnFetchPosts } from '../types/PostsSchema'

const initialState: PostsSchema = {
	data: [],
	totalCount: 0,
	status: 'init',
	errorMessage: undefined
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<ReturnFetchPosts>) => {
				state.status = 'success'
				state.data = action.payload.data
				state.totalCount = action.payload.totalCount
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: postsActions } = postsSlice
export const { reducer: postsReducer } = postsSlice