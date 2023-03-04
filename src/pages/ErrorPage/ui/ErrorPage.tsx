import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
	className?: string
}

const ErrorPage:React.FC<ErrorPageProps> = () => {

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={cls.ErrorPage}>
			<p>Произошла ошибка</p>
			<button onClick={reloadPage}>Обновить страницу</button>
		</div>
	)
}

export default ErrorPage