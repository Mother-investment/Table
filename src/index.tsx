import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app/App'
import '../src/app/styles/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>
)