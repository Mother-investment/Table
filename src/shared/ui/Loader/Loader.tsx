import cls from './Loader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
	container?: boolean
	overlay?: boolean
}

export const Loader:React.FC<LoaderProps> = (props) => {
	const { container, overlay } = props

	return (
		<div className={classNames(cls.overlay, { [cls.background]: overlay }, [])}>
			<div className={classNames(cls.loaderContainer, { [cls.container]: container }, [])}>
				<div className={cls.Loader} ><div></div><div></div><div></div><div></div></div>
			</div>
		</div>
	)
}