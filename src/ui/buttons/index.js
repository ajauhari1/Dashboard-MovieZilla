import styled from 'styled-components';

const Button = styled.button`
  background-color: #555555;
  width: 75%;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  transition-duration: 0.4s;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  &:hover {
    background-color: blue; /* Green */
    color: white;
    }
`;

const IconButton = styled.button`
     border:none;
     background-color: transparent;
     outline: none;
`;
export {Button, IconButton}