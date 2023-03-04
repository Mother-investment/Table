import { classNames } from 'shared/lib/classNames/classNames'
import cls from './TablePage.module.scss'
import { memo } from 'react'
import { Container } from 'shared/ui/Container/Container'
import { PostsTable } from 'widget/PostsTable'

interface TablePageProps {
	className?: string
}

export const TablePage:React.FC<TablePageProps> = memo((props) => {
	const { className } = props

	return (
		<div className={classNames(cls.TablePage, {}, [className])}>
			<Container>
				<PostsTable />
			</Container>
		</div>
	)
})