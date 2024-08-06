import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './global.css';

import Home from './pages/Home';
import Employees from './pages/Employees';
import Error from './pages/Error';

import { store } from './utils/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/employees' element={<Employees />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);
