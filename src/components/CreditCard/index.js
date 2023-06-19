// Write your code here
import {useState} from 'react'
import {
  ImageContainer,
  CardContainer,
  Image,
  Form,
  Input,
  CardName,
  CardNumber,
  Heading,
  Name,
  CardHolderNameContainer,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  return (
    <CardContainer>
      <ImageContainer>
        <Heading card>CREDIT CARD</Heading>
        <Image data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderNameContainer>
            <Name>CARDHOLDER NAME</Name>
            <CardName>{name.toUpperCase()}</CardName>
          </CardHolderNameContainer>
        </Image>
      </ImageContainer>
      <Form>
        <Heading>Payment Method</Heading>
        <Input
          type="text"
          value={number}
          onChange={event => setNumber(event.target.value)}
          placeholder="Card Number"
        />
        <Input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Cardholder Name"
        />
      </Form>
    </CardContainer>
  )
}

export default CreditCard
