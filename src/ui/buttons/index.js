import styled from 'styled-components';

const Button = styled.button`
  background-color: #555555;
  width: 60%;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 6px 20px;
  margin-left: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  transition-duration: 0.4s;
  &:hover {
    background-color: blue;
    color: white;
    }
`;

const IconButton = styled.button`
     border:none;
     background-color: transparent;
     outline: none;
`;

const SubmitButton = styled(Button)`
    background-color: ${props => props.bgcolor || '#2563eb'};
    color: ${props => props.color || '#f8fafc'}; 
    font-weight: ${props => props.fw || '500'}; 
    font-size: ${props => props.fs || '14px'};
    width: 100%;
    padding: 0.75rem 0;
    margin: 1.125rem 0 0 0;

`;
export {Button, IconButton, SubmitButton}