import { useEffect } from 'react';

import './index.css';

export default function Home() {
	useEffect(() => {
		document.title = 'HRnet | Create employee';
	}, []);
	return <main>Home</main>;
}
