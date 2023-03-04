import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SearchTable.module.scss'
import { memo } from 'react'
import { Input, InputType } from 'shared/ui/Input/Input'
import { getStatus } from 'entities/Posts'
import { useSelector } from 'react-redux'

interface SearchTableProps {
	className?: string
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchTable:React.FC<SearchTableProps> = memo((props) => {
	const { className, setSearchValue } = props
	let handler: NodeJS.Timeout
	const status = useSelector(getStatus)


	const onChangeSearch = (value: string) => {
		clearTimeout(handler)
		handler = setTimeout(() => {
			setSearchValue(value)
		}, 500)

		return () => {
			clearTimeout(handler)
		}
	}


	return (
		<Input type={InputType.SEARCH} placeholder='Поиск' onChange={onChangeSearch} className={classNames(cls.SearchTable, {}, [className])} readonly={status === 'loading' || status === 'error'}/>
	)
})