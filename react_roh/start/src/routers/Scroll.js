import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';

// 과제 https://www.airbnb.co.kr 만들어보기
const Scroll = () => {
   const secRef = useRef();
   const [active, setActive] = useState(false);
   const onScroll = () => {
      if (window.scrollY + 100 > secRef.current.offsetTop) {
         setActive(true);
      } else {
         setActive(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', onScroll);
      // 뒷정리 함수가 반드시 필요함
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   });

   return (
      <ScrollComponent active={active}>
         <header>
            <h1>HEADER</h1>
         </header>
         <section ref={secRef}/>
      </ScrollComponent>
   );
};

export default Scroll;

const activeCSS = css`
  background: gray;
  height: 250px;
  border-radius: 30px;
`;

const ScrollComponent = styled.main`
  height: 300vh;

  header {
    height: 100px;
    line-height: 100px;
    width: 100%;
    background: orange;
    color: white;
    position: fixed;
    text-align: center;
    left: 0;
    top: 0;

    h1 {
      margin: 0;
      padding: 0;
    }
  }

  section {
    margin-top: 120vh;
    width: 100%;
    height: 200px;
    background: black;
    transition: .3s;
    ${props => props.active && activeCSS}
  }
`;