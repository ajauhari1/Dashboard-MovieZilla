import styled from 'styled-components'

const BodyError = styled.body`
    background-color: rgba(14, 0, 190, 0.82);
	font-family: 'Lato', sans-serif;
	font-size: 3rem;
	font-weight: 700;
	text-shadow: 0px 3px 0px #7f8c8d;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const ErrorDiv = styled.div`
   	color: white;
`

const Error = styled.h2`
    font-size: 5rem;
	text-align: center;
	margin: 0;
`

const ErrorMessaage = styled.p`
    font-size: 1.2rem;
	text-align: center;
	margin: 0;
`
export {BodyError,ErrorDiv, Error, ErrorMessaage}