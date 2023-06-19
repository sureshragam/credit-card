// Style your elements here
import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`
export const ImageContainer = styled.div`
  height: 100%;
  background-color: #3b4b69;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Image = styled.div`
  width: 400px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  border-radius: 14px;
  margin-top: 100px;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Form = styled.form`
  padding: 10px 20px;
  box-shadow: 1px 1px 12px #d3d9e0;
  margin: auto;
  border-radius: 10px;
`
export const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  outline: none;
  display: block;
  width: 400px;
  margin: auto;
  margin-bottom: 40px;
`
export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${props => (props.card ? 'white' : '#344e7a')};
  margin-top: ${props => (props.card ? '80px' : '10px')};
  text-decoration: ${props => (props.card ? 'underline' : 'none')};
  text-decoration-color: #ffd773;
`
export const CardNumber = styled.p`
  color: #d3d9e0;
  margin-top: 70px;
  font-size: 20px;
`
export const CardName = styled.p`
  color: #c3cad9;
  font-size: 14px;
  margin-bottom: 40px;
`
export const Name = styled.p`
  color: #c3cad9;
  font-size: 14px;
`
export const CardHolderNameContainer = styled.div``
