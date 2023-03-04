import { SortEnum } from 'entities/Posts/model/types/PostsSchema'

export type sortTableConfigProps = {
	sortOption: SortEnum,
	value: string
}

export const sortTableConfig: Record<SortEnum, sortTableConfigProps> = {
	[SortEnum.ID]: {
		sortOption: SortEnum.ID,
		value: 'ID'
	},
	[SortEnum.TITLE]: {
		sortOption: SortEnum.TITLE,
		value: 'Заголовок'
	},
	[SortEnum.BODY]: {
		sortOption: SortEnum.BODY,
		value: 'Описание'
	}
}