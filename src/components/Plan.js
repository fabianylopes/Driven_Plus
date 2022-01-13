import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from '../assets/arrow.png';
import Silver from '../assets/silver.png'
import List from '../assets/clipboard-task-list.png';
import Money from '../assets/money.png'

export default function Plan(){

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    return(
        <Container>
            <StyledLink to="/subscriptions">
                <img src={Arrow}></img>
            </StyledLink>
            <Logo>
                <img src={Silver}></img>
                <Titulo>Driven Plus</Titulo>
            </Logo>
            <Beneficios>
                <img src={List}></img>
                <H>Benefícios:</H>
                <P>1. Brindes exclusivos</P>
                <P>2. Materiais bônus de web</P>
            </Beneficios>
            <Preco>
                <img src={Money}></img>
                <H>Preco:</H>
                <P>R$ 39,99 cobrados mensalmente</P>
            </Preco>
            <Input type="text" placeholder="Nome impresso no cartão" onChange={e => setCardName(e.target.value)}></Input>
            <Input type="number" placeholder="Digitos do cartão" onChange={e => setCardNumber(e.target.value)}></Input>
            <Inputs>
                <SmallerInput type="number" placeholder="Código de segurança" onChange={e => setSecurityNumber(e.target.value)}></SmallerInput>
                <SmallerInput type="text" placeholder="Validade" onChange={e => setExpirationDate(e.target.value)}></SmallerInput>
            </Inputs>
            <Button type="submit">ASSINAR</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

const Logo = styled.div`

`

const Beneficios = styled.div`

`

const Preco = styled.div`

`

const Titulo = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 24px;
`

const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #fff;
`
const H = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #fff;
`

const Input = styled.input`
    width: 298px;
    height: 52px;
    margin-top: 16px;
    border-radius: 8px;
    padding-left: 14px;
    outline: 0;
    border: none;

    ::placeholder{
        color: #7E7E7E;
    }
`
const SmallerInput = styled.input`
    width: 145px;
    height: 52px;
    margin-top: 16px;
    border-radius: 8px;
    padding-left: 14px;
    outline: 0;
    border: none;

    ::placeholder{
        color: #7E7E7E;
    }
`

const Inputs = styled.div`

`

const Button = styled.button`
    width: 298px;
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    cursor: pointer;
`