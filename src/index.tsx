import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HelloAPIScreen from './screens/HelloAPIScreen'
import ImageClassifierScreen from './screens/ImageClassifierScreen'
import TopScreen from './screens/TopScreen'
import './styles/output.css'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<React.StrictMode>
			<BrowserRouter>

				<Header />
				
				<Routes>
					<Route path='/' element={<TopScreen />} />
					<Route path='/hello-api' element={<HelloAPIScreen />} />
					<Route path='/image-classifier' element={<ImageClassifierScreen />} />
					<Route path='*' element={<TopScreen />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</React.StrictMode>
)