import { AxiosInstance } from 'axios'
import { PostsSchema } from 'entities/Posts'
import { NavigateOptions, To } from 'react-router-dom'


export interface StateSchema {
	posts: PostsSchema
}

export interface ThunkExtraArg {
	api: AxiosInstance,
	navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}