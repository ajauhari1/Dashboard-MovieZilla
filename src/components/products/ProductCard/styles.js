import styled from 'styled-components';

const CardContainer= styled.div`
    width: 270px;
    overflow: hidden;
    text-align: center;
    border: 4px solid rgb(15, 34, 117);
    border-radius: 30px;
    box-shadow: 0 0 7px rba(0, 0, 0, 0.9);
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    background-color: rgb(15, 34, 117);
  
`;

const CardImageContainer= styled.div`
    width: 270px;
`;

const CardImage= styled.img`
    width: 270px;
`;

const CardInfoContainer= styled.div`
    padding-top: 1rem;
`;
const CardInfo= styled.h4`
    font-size: 1rem;
    padding: 0 1.56rem;
    margin-bottom: .5rem;
    color: white;
`;
const CardButtonContainer= styled.div`
   width: 100%;
`;

const CardButton= styled.button`
    width: 100%;
    padding: 0.625rem;
    border: 2px solid rgb(15, 34, 117);
    outline: none;
    color: black;
    cursor: pointer;
    font-size: .9rem;
    background-color: rgb(41, 109, 211);
    
    button:hover{
    color: black;
    font-size: 1.5rem;
    }
`;

export {CardContainer, CardImageContainer, CardImage, CardInfoContainer, CardInfo, CardButtonContainer, CardButton  }