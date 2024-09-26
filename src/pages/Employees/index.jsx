import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import './index.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function Employees() {
	const employeesSelector = useSelector((state) => state.employees.employees);
	const columns = [
		{ field: 'firstName', flex: 1 },
		{ field: 'lastName', flex: 1 },
		{ field: 'dateOfBirth', flex: 1 },
		{ field: 'startDate', flex: 1 },
		{ field: 'department', flex: 1 },
		{ field: 'street', flex: 1 },
		{ field: 'city', flex: 1 },
		{ field: 'state', flex: 1 },
		{ field: 'ZIPCode', flex: 1 },
	];

	useEffect(() => {
		document.title = 'HRnet | Current employees';
	}, []);

	return (
		<main className='currentEmployees'>
			<div className='listEmployees block--white'>
				<h2 className='listEmployees__title'>Current Employees</h2>
				<div style={{ width: '100%' }} className='listEmployees__dataTable'>
					<input
						type='text'
						id='filter-text-box'
						placeholder='Search...'
						className='listEmployees__dataTable__search'
					/>
					<div className='ag-theme-quartz' style={{ height: 519, width: '100%' }}>
						<AgGridReact
							rowData={employeesSelector}
							columnDefs={columns}
							style={{ height: '100%', width: '100%' }}
							pagination={true}
							paginationPageSize={10}
							paginationPageSizeSelector={[10, 20, 50, 100]}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
