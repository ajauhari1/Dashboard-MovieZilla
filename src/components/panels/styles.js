import styled from 'styled-components';

const PanelStyles= styled.section`
flex:1;// Take up all the aviable space
box-shadow: 0 0 2px 0 rgba(0,0,0,0.3) ;
background-color: white ;
border-radius:3px ;
margin:1.5rem;
height: max-content;
  
`;

const PanelHeader = styled.header`
h2{
    background-color: #f8f8f8;
    padding:0.5rem;
    border-radius: 3px ;
    border-bottom-left-radius:0;// square off the bottom
    border-bottom-right-radius:0 ;// square off the bottom
    color:#3f3f3f;
}
`;

const PanelBody = styled.div`
margin: ${props => props.margin || " 3rem"};
`;

export {PanelStyles, PanelBody, PanelHeader}