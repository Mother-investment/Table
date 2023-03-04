import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SortTable.module.scss'
import { memo, useCallback } from 'react'
import { sortTableConfig } from '../model/config/sortTableConfig'
import { OrderEnum, SortEnum } from 'entities/Posts'
import ArrowIcon from 'shared/assets/icons/ArrowIcon.svg'

interface SortTableProps {
	className?: string
	sortType: SortEnum
	setSortType: React.Dispatch<React.SetStateAction<SortEnum>>
	sortOrder: OrderEnum
	setSortOrder: React.Dispatch<React.SetStateAction<OrderEnum>>
}

export const SortTable:React.FC<SortTableProps> = memo((props) => {
	const { className, sortType, setSortType, sortOrder, setSortOrder } = props

	const sortChange = useCallback((sortOption: SortEnum) => {
		if(sortOption === sortType) {
			setSortOrder((prev) => prev === OrderEnum.ASC ? OrderEnum.DESC : OrderEnum.ASC)
		}else {
			setSortOrder(OrderEnum.ASC)
		}
		setSortType(sortOption)
	},[setSortOrder, setSortType, sortType])

	return (
		<thead className={classNames(cls.SortTable, {}, [className])}>
			{Object.values(sortTableConfig).map((item) =>
				<th
					className={classNames(cls.SortTableItem, {}, [cls[item.sortOption]])}
					onClick={() => sortChange(item.sortOption)}
					key={item.sortOption}
				>
					<span className={cls.text}>{item.value}</span>
					<span className={cls.icon}>
						<ArrowIcon
							className={classNames(cls.arrowIcon, {
								[cls.flipIcon]: sortOrder === OrderEnum.DESC && sortType === item.sortOption
							}, [])}
						/>
					</span>
				</th>
			)}
		</thead>
	)
})