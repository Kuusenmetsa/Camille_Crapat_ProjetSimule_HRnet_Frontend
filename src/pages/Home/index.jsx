// Importation bibliothèque
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux';
import { Dropzy } from 'dropzy';

// Importation css des différentes bibliothèque
import 'react-datepicker/dist/react-datepicker.css';
import 'react-responsive-modal/styles.css';
import './index.css';

// Importation des données et du store
import { departmentData, stateData } from '../../utils/Data';
import { addEmployee } from '../../utils/Store';

export default function Home() {
	// useState des valeurs de champs
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [department, setDepartment] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [ZIPCode, setZIPCode] = useState('');

	// useState pour les erreurs
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [modalConfirmation, setModalConfirmation] = useState(false);

	// store
	const dispatch = useDispatch();

	// fonction pour formater les données
	const formatData = (array) => {
		const newArray = [];
		array.forEach((el) => {
			newArray.push(el.name);
		});
		return newArray;
	};

	// Changement du nom de la page
	useEffect(() => {
		document.title = 'HRnet | Create employee';
	}, []);

	// Fonction pour ajouter l'employé
	const createEmployee = () => {
		// regex
		const regexText = /^[A-Za-zéèàçâêûôîäëüïöÂÊÛÎÔÄËÜÏÖ\s\-0-9]{2,20}$/;
		const regexDate = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/; //eslint-disable-line
		const regexNumber = /^[0-9]{5}$/;

		// Fonction permettant de formater les dates
		const formatDate = (date) => {
			let day = date.getDate();
			let month = date.getMonth() + 1;
			let year = date.getFullYear();

			if (date.getMonth().toString().length === 1) {
				month = `0${date.getMonth() + 1}`;
			}
			if (date.getDate().toString().length === 1) {
				day = `0${date.getDate()}`;
			}

			return month + '/' + day + '/' + year;
		};

		// Formatage des dates
		const dateOfBirthFormat = formatDate(dateOfBirth);
		const startDateFormat = formatDate(startDate);

		// Test si il y a une erreur
		if (
			firstname === '' ||
			!firstname ||
			!regexText.test(firstname) ||
			lastname === '' ||
			!lastname ||
			!regexText.test(lastname) ||
			dateOfBirthFormat === '' ||
			!dateOfBirthFormat ||
			!regexDate.test(dateOfBirthFormat) ||
			startDateFormat === '' ||
			!startDateFormat ||
			!regexDate.test(startDateFormat) ||
			department === '' ||
			!department ||
			!regexText.test(department) ||
			street === '' ||
			!street ||
			!regexText.test(street) ||
			city === '' ||
			!city ||
			!regexText.test(city) ||
			state === '' ||
			!state ||
			!regexText.test(state) ||
			ZIPCode === '' ||
			!ZIPCode ||
			!regexNumber.test(ZIPCode)
		) {
			setError(true);
			setErrorMessage('Please enter all fields in the required format');
		} else {
			try {
				dispatch(
					addEmployee({
						id: Date.now(),
						firstName: firstname,
						lastName: lastname,
						dateOfBirth: dateOfBirthFormat,
						startDate: startDateFormat,
						department: department,
						street: street,
						city: city,
						state: state,
						ZIPCode: ZIPCode,
					})
				);
				setError(false);
				setErrorMessage('');
				setModalConfirmation(true);
				setFirstname('');
				setLastname('');
				setDateOfBirth(new Date());
				setStartDate(new Date());
				setDepartment('');
				setStreet('');
				setCity('');
				setState('');
				setZIPCode('');
			} catch (error) {
				console.log(error);
				setError(true);
				setErrorMessage('An error occurred while adding the employee');
			}
		}
	};
	// Fonction qui réinitialise le formulaire
	const resetForm = () => {
		setFirstname('');
		setLastname('');
		setDateOfBirth(new Date());
		setStartDate(new Date());
		setDepartment('');
		setStreet('');
		setCity('');
		setState('');
		setZIPCode('');
		setError(false);
		setErrorMessage('');
	};

	return (
		<main className='home'>
			{open && (
				<Modal
					open={modalConfirmation}
					onClose={() => setModalConfirmation(false)}
					center
					classNames={{
						modal: 'customModal',
					}}
					ariaLabelledby='confirmation'
					ariaDescribedby='Modal that confirms the creation of an employee'
				>
					<h2>Confirmation</h2>
					<p>The employee has been added successfully</p>
				</Modal>
			)}
			<div className='createEmployee block--white'>
				<h2 className='createEmployee__title'>Create employee</h2>
				<form
					action='submit'
					className='form'
					onSubmit={(e) => {
						e.preventDefault();
						createEmployee();
					}}
				>
					<div className='form--top'>
						<div className='form--top--left'>
							<div className='form__labelInput'>
								<label htmlFor='firstname' className='form__labelInput__label'>
									First Name
								</label>
								<input
									type='text'
									className='form__labelInput__input'
									name='firstname'
									id='firstname'
									placeholder='First Name'
									onChange={(e) => setFirstname(e.target.value)}
									value={firstname}
									tabIndex={1}
								/>
							</div>
							<div className='form__labelInput'>
								<label htmlFor='lastname' className='form__labelInput__label'>
									Last Name
								</label>
								<input
									type='text'
									className='form__labelInput__input'
									name='lastname'
									id='lastname'
									placeholder='Last Name'
									onChange={(e) => setLastname(e.target.value)}
									value={lastname}
									tabIndex={2}
								/>
							</div>
							<div className='form__labelInput'>
								<label htmlFor='dateOfBirth' className='form__labelInput__label'>
									Date of Birth
								</label>{' '}
								<DatePicker
									selected={dateOfBirth}
									onChange={(date) => setDateOfBirth(date)}
									className='form__address__labelInput__input form__address__labelInput__input--datepicker'
									tabIndex={3}
								/>
							</div>
							<div className='form__labelInput'>
								<label htmlFor='startDate' className='form__labelInput__label'>
									Start Date
								</label>{' '}
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									className='form__address__labelInput__input form__address__labelInput__input--datepicker'
									tabIndex={4}
								/>
							</div>
							<div className='form__labelInput'>
								<label htmlFor='department' className='form__labelInput__label'>
									Department
								</label>
								<Dropzy
									value={department}
									setValue={setDepartment}
									options={departmentData}
									color={'#91ad17'}
									tabIndex={5}
								/>
							</div>
						</div>
						<div className='form--top--right'>
							<fieldset className='form__address'>
								<legend>Address</legend>
								<div className='form__address__labelInput'>
									<label htmlFor='street' className='form__address__labelInput__label'>
										Street
									</label>
									<input
										type='text'
										className='form__address__labelInput__input'
										name='street'
										id='street'
										placeholder='Street'
										onChange={(e) => setStreet(e.target.value)}
										value={street}
										tabIndex={6}
									/>
								</div>
								<div className='form__address__labelInput'>
									<label htmlFor='city' className='form__address__labelInput__label'>
										City
									</label>
									<input
										type='text'
										className='form__address__labelInput__input'
										name='city'
										id='city'
										placeholder='City'
										onChange={(e) => setCity(e.target.value)}
										value={city}
										tabIndex={7}
									/>
								</div>
								<div className='form__address__labelInput'>
									<label htmlFor='state' className='form__address__labelInput__label'>
										State
									</label>
									<Dropzy
										value={state}
										setValue={setState}
										options={formatData(stateData)}
										color={'#91ad17'}
										tabIndex={8}
									/>
								</div>
								<div className='form__address__labelInput'>
									<label htmlFor='zipCode' className='form__address__labelInput__label'>
										ZIP Code
									</label>
									<input
										type='text'
										className='form__address__labelInput__input'
										name='zipCode'
										id='zipCode'
										placeholder='ZIP Code'
										onChange={(e) => setZIPCode(e.target.value)}
										value={ZIPCode}
										tabIndex={9}
									/>
								</div>
							</fieldset>
						</div>
					</div>
					{error && <span className='errorForm'>{errorMessage}</span>}
					<div className='form--bottom'>
						<input type='submit' value='Save' className='form__button' tabIndex={10} />
						<input
							type='reset'
							value='Reset'
							className='form__button'
							onClick={() => {
								resetForm();
							}}
							tabIndex={11}
						/>
					</div>
				</form>
			</div>
		</main>
	);
}
