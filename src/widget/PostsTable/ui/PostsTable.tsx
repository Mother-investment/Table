import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PostsTable.module.scss'
import { memo, useEffect, useMemo, useState } from 'react'
import { SearchTable } from 'features/SearchTable'
import { SortTable } from 'features/SortTable'
import { fetchPosts, getPostsTotalCount, OrderEnum, Posts, SortEnum } from 'entities/Posts'
import { TablePagination } from 'features/TablePagination'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { FetchPostsProps } from 'entities/Posts/model/services/fetchPosts/fetchPosts'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

interface PostsTableProps {
	className?: string
}

export const PostsTable:React.FC<PostsTableProps> = memo((props) => {
	const { className } = props
	const location = useLocation()
	const dispatch = useAppDispatch()
	const [sortType, setSortType] = useState<SortEnum>(SortEnum.ID)
	const [sortOrder, setSortOrder] = useState<OrderEnum>(OrderEnum.ASC)
	const [searchValue, setSearchValue] = useState('')
	const totalCount = useSelector(getPostsTotalCount)
	const numberOfPages = useMemo(() => Math.ceil(totalCount / 10), [totalCount])
	const pageNumber = useMemo(() => +location.pathname.slice(1), [location.pathname])

	useEffect(() => {
		const fetchObject: FetchPostsProps = {
			page: pageNumber,
			sort: {
				sort: sortType,
				order: sortOrder
			}
		}
		if(searchValue) {
			fetchObject.search = searchValue
		}
		dispatch(fetchPosts(fetchObject))

	},[dispatch, pageNumber, searchValue, sortOrder, sortType, totalCount])

	return (
		<div className={classNames(cls.PostsTable, {}, [className])}>
			<SearchTable setSearchValue={setSearchValue}/>
			<table className={cls.table}>
				<SortTable
					sortType={sortType}
					setSortType={setSortType}
					sortOrder={sortOrder}
					setSortOrder={setSortOrder}
				/>
				<Posts />
			</table>
			<TablePagination numberOfPages={numberOfPages} pageNumber={pageNumber} />
		</div>
	)
})