import { useEffect } from 'react';

import './index.css';

export default function Employees() {
	useEffect(() => {
		document.title = 'HRnet | Current employees';
	}, []);
	return <main>Employees</main>;
}
