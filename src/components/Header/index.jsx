import { Link, useLocation } from 'react-router-dom';

import './index.css';

import Logo from '../../assets/img/logo.png';

export default function Header() {
	const location = useLocation();
	return (
		<header>
			<div className='logo'>
				<img src={Logo} alt='logo de WealthHealth' className='logo__image' />
				<h1 className='logo__title'>HRnet</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link to='/' className={location.pathname === '/' ? `link--selected` : ``}>
							Create employee
						</Link>
					</li>
					<li>
						<Link to='/employees' className={location.pathname === '/employees' ? `link--selected` : ``}>
							Current Employees
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
