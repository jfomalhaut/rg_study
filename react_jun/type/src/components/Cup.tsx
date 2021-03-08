import React from 'react';

interface IObject {
	color: string;
};

interface ICup extends IObject {
	volume: number;
};

function Cup({ color, volume }: ICup) {
	return (
		<div>
			<h1>Cup Componnet</h1>
			<h1>volume: {volume}</h1>
			<h1 style={{ color }}>{color}</h1>
		</div>
	);
};

export default Cup;