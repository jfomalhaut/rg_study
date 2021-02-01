import React, { useState } from 'react';

const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);

	const onChange = (ev) => {
		const { target: { value } } = ev;
		setData(value);
	};

	return [data, onChange, setData];
};

const Input2 = () => {
	const [tel, onChangeTel, setTel] = useInput('');
	const [tel2, onChangeTel2, setTel2] = useInput('');
	const [tel3, onChangeTel3, setTel3] = useInput('');

	return (
		<div>
			<input value={tel} onChange={onChangeTel} />
			<input value={tel2} onChange={onChangeTel2} />
			<input value={tel3} onChange={onChangeTel3} />
			<h1>tel1{tel}</h1> 
			<h1>tel2{tel2}</h1>
			<h1>tel3{tel3}</h1>
		</div>
	);
};

export default Input2;
