import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TablePagination.module.scss'
import { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

interface TablePaginationProps {
	className?: string
	numberOfPages: number
	pageNumber: number
}

export const TablePagination:React.FC<TablePaginationProps> = memo((props) => {
	const { className, numberOfPages, pageNumber } = props
	const paginNumbers = Array.from({ length: numberOfPages }, (_, index) => index + 1)

	const prevContent = useMemo(() =>(
		'/' + (pageNumber > 1 && pageNumber < numberOfPages + 1 ? pageNumber - 1 : 1)
	),[numberOfPages, pageNumber])
	const nextContent = useMemo(() =>(
		'/' + (pageNumber < numberOfPages ? pageNumber + 1 : numberOfPages)
	),[numberOfPages, pageNumber])

	return (
		<div className={classNames(cls.TablePagination, {}, [className])}>
			<Link className={classNames(cls.button, {}, [cls.btnPrev])} to={prevContent}>Назад</Link>
			<div className={cls.paginNumber}>
				{paginNumbers.map(item => <Link className={classNames(cls.number, { [cls.active]: item === pageNumber }, [])} key={item} to={`/${item}`}>{item}</Link>)}
			</div>
			<Link className={classNames(cls.button, {}, [cls.btnNext])} to={nextContent}>Далее</Link>
		</div>
	)
})