import { Status } from 'shared/const/common'

export interface IPosts {
	userId: number,
	id: number,
	title: string,
	body: string
}

export interface PostsSchema {
	data: IPosts[]
	totalCount: number
	status: Status
	errorMessage: string | undefined
}

export interface ReturnFetchPosts {
	data: IPosts[],
	totalCount: number
}

export enum SortEnum {
	ID = 'id',
	TITLE = 'title',
	BODY = 'body',
}

export enum OrderEnum {
	ASC = 'asc',
    DESC = 'desc',
}

export interface SortParamFetchPosts {
	sort: SortEnum,
	order: OrderEnum
}