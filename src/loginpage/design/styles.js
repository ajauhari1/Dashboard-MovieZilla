import styled from 'styled-components'
import img from './../../img/movie-image.jpg'
 
const SectionLogin = styled.section`
    height: 100vh;
    width: 100%;
    background: lightskyblue;
    position: relative;
`

const LoginBox = styled.div`
    width: 50rem;
    height: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
    
`
const LeftLoginBox = styled.div`
    width: 41%;
    height: 100%;
    padding: 25px 25px;
    background: linear-gradient(-45deg, #dcd7e0, #fff);
`
const LeftContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 60%;
    width: 73%;
    margin: auto;
    
`
const LeftSideTitle = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    
`
const LeftTextBottom = styled.h5`
  display: block;
  width: 100%;
  text-align: center;
  font-size: .95rem;
  font-weight: 400;
`
const LeftFormInput = styled.input`
    border: none;
    width: 80%;
    margin: 15px 0px;
    border-bottom: 1px solid #4f30677d;
    padding: 7px 9px;
    width: 100%;
    overflow: hidden;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
    
`
const LeftFormButton = styled.button`
    border: none;
    padding: 15px 70px;
    border-radius: 10px;
    display: block;
    margin: auto;
    margin-top: 10px;
    background: rgba(14, 0, 190, 0.82);
    color: #fff;
    font-weight: bold;
    
`
const RightLoginBox = styled.div`
    width: 59%;
    height: 100%; 
    background-image: linear-gradient(212.38deg, rgba(89, 84, 255, 0.8) 0%, rgba(14, 0, 190, 0.82) 100%),url(${img});
	color: #fff;
	position: relative;
`
const RightTextBox = styled.div`
  height: 100%;
  position: relative;
  transform: translate(0%, 45%);
`
const RightTextTop = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
`
const RightTextBottom = styled.h5`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`


export {SectionLogin,LoginBox,LeftLoginBox, LeftContact, LeftFormInput, LeftFormButton, LeftSideTitle, RightLoginBox,RightTextBox,RightTextTop,RightTextBottom, LeftTextBottom}