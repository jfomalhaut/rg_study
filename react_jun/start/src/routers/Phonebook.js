import React, { useEffect, useState } from 'react'

const regex = /[0-9]$/;

const field = {
	label: '',
	age: '',
	phone: '',
};

const Phonebook = () => {
	const [list, setList] = useState([]);
	const [info, setInfo] = useState(field);
	const { label, age, phone } = info;

	const onChangeValue = ev => {
		const { target: { name, value } } = ev;

		switch (name) {
			case 'age':
			case 'phone': {
				if (value == '' ) {
					setInfo({
						...info,
						[name]: value
					});
					return;
				}
				if (!regex.test(value)) {
					return;
				}
			}
		}

		setInfo({
			...info,
			[name]: value
		});
	};

	const register = (ev) => {
		ev.preventDefault();
		setList([ ...list, info ]);
		setInfo(field);
	};

	useEffect(() => {
		console.log('update list');
	}, [list]);

	return (
		<>
			<form onSubmit={register}>
				<input type='text' value={label} name="label" onChange={onChangeValue} />
				<input type='text' value={age} name="age" onChange={onChangeValue} />
				<input type='text' value={phone} name="phone" onChange={onChangeValue} />
				<button>넣기</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={`PHONE_BOOK${index}`}>
						<span>{item.label}</span>
						<span>{item.age}</span>
						<span>{item.phone}</span>
					</li>
				))}
			</ul>
		</>
	)
}

export default Phonebook;
