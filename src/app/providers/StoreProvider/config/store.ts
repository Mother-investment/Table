import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
// import { userReducer } from 'entities/User'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'
import { postsReducer } from 'entities/Posts'

export function createReduxStore(
	initialState?: StateSchema,
	navigate?: (to: To, options?: NavigateOptions) => void,
) {
	const rootReducer: ReducersMapObject<StateSchema> = { posts: postsReducer }

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate
	}

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg,
			},
		}),
	})

	return store
}



export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']