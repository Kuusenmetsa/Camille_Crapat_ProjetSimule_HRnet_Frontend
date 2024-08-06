import { useEffect } from 'react';

import './index.css';

export default function Error() {
	useEffect(() => {
		document.title = 'HRnet | Error';
	}, []);
	return <main>Error</main>;
}
