import { forwardRef } from 'react'
import { InputHTMLAttributes, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import SearchIcon from 'shared/assets/icons/SearchIcon.svg'
import cls from './Input.module.scss'
import { Loader } from '../Loader/Loader'

export enum InputType {
    SEARCH = 'search'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'onKeyUp' | 'placeholder'>

interface InputProps extends HTMLInputProps{
	className?: string
	value?: string
	onChange?: (value: string) => void
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
	type?: InputType
	readonly?: boolean
	placeholder?: string
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, value, onChange, type=InputType.SEARCH, readonly, onKeyUp, placeholder } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods: Mods = {
		[cls.readonly]: readonly
	}

	return (
		<div className={classNames(cls.container, mods, [className])}>
			<input
				className={classNames(cls.Input, mods, [])}
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				readOnly={readonly}
				onKeyUp={onKeyUp}
				placeholder={placeholder}
			/>
			{type === InputType.SEARCH && <SearchIcon className={cls.icon} />}
		</div>
	)
}))