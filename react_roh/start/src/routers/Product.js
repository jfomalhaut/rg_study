import React, {useState, useEffect} from 'react';
import Items from '../jsons/items.json';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Product = ({match: {params: {type}}}) => {
   const [list, setList] = useState(Items);

   const transType = (value) => {
      switch (value) {
         case 'fish':
            return 1;
         case 'fruit':
            return 2;
         case 'vegetable':
            return 3;
      }
   };
   useEffect(() => {
      if (type === 'all') {
         setList(Items);
      } else {
         const newList = Items.filter(item => item.type === transType(type));
         setList(newList);
      }
   }, [type]);

   return (
      <ProductComponent>
         <header>
            <Link to="/product/all">All</Link>
            <Link to="/product/fish">fish</Link>
            <Link to="/product/fruit">fruit</Link>
            <Link to="/product/vegetable">vegetable</Link>
         </header>
         <main>
            {list.map(item => (
               <Item key={`ITEM${item.id}`} color={item.type}>
                  <figure/>
                  <label>{item.name}</label>
                  <label>{item.price}</label>
               </Item>
            ))}
         </main>
      </ProductComponent>
   );
};

export default Product;

const Item = styled.article`
  border: 1px solid #ddd;

  figure {
    height: 100px;
    margin: 0;
    padding: 0;
    background: ${props => (
            props.color === 1 ? '#0071B3' :
                    props.color === 2 ? '#C9242B' :
                            props.color === 3 ? '#198942' : '#ddd'
    )};
  }

  label {
    display: block;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const ProductComponent = styled.section`
  header {
    display: flex;

    a {
      margin: 0 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }

  main {
    width: 900px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;