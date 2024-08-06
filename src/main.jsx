import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './global.css';

import Home from './Home';
import Employees from './Employees';
import Error from './Error';

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
