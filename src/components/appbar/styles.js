import styled from 'styled-components'; //imsc short code


const AppBarStyles = styled.nav` //sc short code 
    width: 100%;
    height: 55px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 0 5px 2px black;
    padding: 0.4375rem 1rem;
  // wdith: calc(100vh - heightpx)
  //background-color: ${props => props.bgcolor || "transparent"};
  background-color: rgb(74, 151, 224)
`;

const AppBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const AppBarItem = styled.li`
    font-weight: bold;
    font-size: 30px;
    color: blue;
    cursor: pointer;
`

const AppBarItemGroup = styled.li`
    display:flex;
     gap:0.75rem;
`


 export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems}