import React, { useState } from 'react';

type TestProps = {
	name: string;
	price: number;
	description?: string;
	onClickHandler: (value: string) => void;
};

function Test({ onClickHandler, name, price, description = "dd" }: TestProps) {
	const [testValue, setTestValue] = useState("");

	const onChangeValue = (ev: any) => {
		const { target: { value } } = ev;
		setTestValue(value);
	};

	return (
		<div>
			<h1>상품명: {name}</h1>
			<h1>가격: {price}</h1>
			{description && (
				<h1>{description}</h1>
			)}
			<input value={testValue} onChange={onChangeValue} />
			<button 
				onClick={() => onClickHandler(testValue)}
			>
				Test Button
			</button>
		</div>
	);
};

export default Test;