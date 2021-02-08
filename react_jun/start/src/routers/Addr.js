import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const countPerPage = 10;

// confmKey
// currentPage
// countPerPage
// resultType
// keyword

const Addr = () => {
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [list, setList] = useState([]);

	const search = () => {
		const url = `${JUSO_URL}?confmKey=${JUSO_API}&currentPage=${currentPage}&countPerPage=${countPerPage}&resultType=json&keyword=${keyword2}`;
		Axios.get(url).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setList(juso);
		}).catch(error => {
			console.log(error);
		});
	};

	const onSearch = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword !== '') {
			search();
		}
	}, [currentPage]);

	return (
		<div>
			<form onSubmit={onSearch}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} placeholder="검색어를 입력하세요" />
				<button>검색</button>
			</form>
			<h1>현재 검색한 키워드: {keyword2}</h1>
			<ul>
				{list.map((item, index) => (
					<li key={`ADDR${index}`}>{item.roadAddrPart1}</li>
				))}
			</ul>
			<h1>currentPage : {currentPage}</h1>
			<button>이전</button>
			<button onClick={() => setCurrentPage(prev => prev + 1)}>다음</button>
		</div>
	);
};

export default Addr;
