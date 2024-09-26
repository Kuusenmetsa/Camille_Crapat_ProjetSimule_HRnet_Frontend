import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './global.css';

import Header from './components/Header';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Error from './pages/Error';

import { store } from './utils/Store';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/employees' element={<Employees />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</Provider>
	</StrictMode>
);
