import { TablePage } from 'pages/TablePage/ui/TablePage'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

const App: React.FC = () => {

	return (
		<div className='app' id='app'>
			<Suspense fallback={<Loader/>}>
				<TablePage />
			</Suspense>
		</div>
	)
}
export default App