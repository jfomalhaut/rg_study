import React, { useState } from 'react';

const field = {
	name: '',
	job: '',
	phone: '',
};

const Input = () => {
	const [info, setInfo] = useState(field);
	const { name, job, phone } = info;
	
	const onChangeValue = (ev) => {
		const {
			target: { value, name },
		} = ev;

		//////////////////////////////////
		
		setInfo({
			...info,
			[name]: value
		});
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		console.log(info);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={name} name="name" onChange={onChangeValue} placeholder="이름을 입력하세요" />
				<input value={job} name="job" onChange={onChangeValue} placeholder="직업을 입력하세요" />
				<input value={phone} name="phone" onChange={onChangeValue} placeholder="전화번호를 입력하세요" />
				<button>입력</button>
			</form>
			<ul>
				
			</ul>
		</div>
	);
};

export default Input;
