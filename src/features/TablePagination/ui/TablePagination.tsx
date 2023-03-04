import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TablePagination.module.scss'
import { memo } from 'react'
import { Link } from 'react-router-dom'

interface TablePaginationProps {
	className?: string
	numberOfPages: number
	pageNumber: number
}

export const TablePagination:React.FC<TablePaginationProps> = memo((props) => {
	const { className, numberOfPages, pageNumber } = props
	const paginNumbers = Array.from({ length: numberOfPages }, (_, index) => index + 1)

	return (
		<div className={classNames(cls.TablePagination, {}, [className])}>
			<Link className={cls.button} to={'/' + (pageNumber > 1 ? pageNumber - 1 : 1)}>Назад</Link>
			<div className={cls.paginNumber}>
				{paginNumbers.map(item => <Link className={classNames(cls.number, { [cls.active]: item === pageNumber }, [])} key={item} to={'/' + item}>{item}</Link>)}
			</div>
			<Link className={cls.button} to={'/' + (pageNumber < numberOfPages ? pageNumber + 1 : numberOfPages)}>Далее</Link>
		</div>
	)
})