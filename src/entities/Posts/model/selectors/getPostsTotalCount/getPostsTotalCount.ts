import { StateSchema } from 'app/providers/StoreProvider'

export const getPostsTotalCount = (state: StateSchema) => state?.posts.totalCount || 0