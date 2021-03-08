import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

const Factory = (state, action) => {
	switch (action.type) {
		case 'INCREASEMENT': {
			return state + 1;
		}
		default: {
			return state;
		}
	}
};

const Company = () => {
	const [count, dispatch] = useReducer(Factory, 0);

	const increasement = () => {
		dispatch({ type: 'INCREASEMENT' });
	};

	return (
		<CompanyComponent>
			<h1>
				count: <b>{count}</b>
			</h1>
			<button onClick={increasement}>increasement</button>
		</CompanyComponent>
	);
};

export default Company;

const CompanyComponent = styled.main`
	width: 500px;
	margin: 100px auto;
	b {
		color: #ff0000;
	}

	button {
		font-size: 20px;
		padding: 5px 10px;
		color: #fff;
		background: #0071B3;
		border: none;
		transition: .1s;
		cursor: pointer;
		&:active {
			transform: scale(.98);
		}
	}
`;
 