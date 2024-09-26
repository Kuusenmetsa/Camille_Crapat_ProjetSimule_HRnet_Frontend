import { useEffect } from 'react';

import './index.css';

export default function Error() {
	useEffect(() => {
		document.title = 'HRnet | Error';
	}, []);

	return (
		<div className='error'>
			<p className='error__text'>Oups</p>
			<p className='error__title'>404</p>
			<p className='error__text'>La page que vous demandez est introuvable...</p>
		</div>
	);
}
