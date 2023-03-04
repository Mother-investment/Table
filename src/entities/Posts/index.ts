

export { getPostsTotalCount } from './model/selectors/getPostsTotalCount/getPostsTotalCount'
export { getPostsData } from './model/selectors/getPostsData/getPostsData'
export { getStatus } from './model/selectors/getStatus/getStatus'
export { Posts } from './ui/Posts'
export type { IPosts, PostsSchema, ReturnFetchPosts } from './model/types/PostsSchema'
export { OrderEnum, SortEnum } from './model/types/PostsSchema'
export { postsReducer, postsActions } from './model/slice/postsSlice'
export { fetchPosts } from './model/services/fetchPosts/fetchPosts'
