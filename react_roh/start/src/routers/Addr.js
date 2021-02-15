import React, {useState, useEffect} from 'react';
import axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const countPerPage = 10;

const Addr = () => {
    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState([]);

    const search = () => {
        const url = `${JUSO_URL}?confmKey=${JUSO_API}&currentPage=${currentPage}&countPerPage=${countPerPage}&resultType=json&keyword=${keyword2}`;
        axios.get(url).then(res => {
            const {data: {results: { common: {totalCount}, juso}}} = res;
            setList(juso);
        }).catch(err => {
            console.error(err);
        });
    };

    const onSearch = e => {
        e.preventDefault();
        setKeyword2(keyword);
    };

    useEffect(() => {
        if (keyword !== '') {
            search();
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
                <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" type="text"/>
                <button>검색</button>
            </form>
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