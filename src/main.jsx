import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.css';

import Home from './Home';
import Employees from './Employees';
import Error from './Error';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/employees' element={<Employees />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
