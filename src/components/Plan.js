import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Arrow from '../assets/arrow.png';
import List from '../assets/clipboard-task-list.png';
import Money from '../assets/money.png'
import UserContext from '../contexcts/UserContext';
import axios from "axios"
import Modal from './Modal';

export {infos}
let infos = {}

export default function Plan({showModal, setShowModal}){

    const navigate = useNavigate();

    const { idPlan } = useParams();
    const { token } = useContext(UserContext);

    const [image, setImage] = useState('');
    const [plan, setPlan] = useState([]);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

		const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`, config);
		promise.then(handleSuccess);
        promise.catch(error => console.log(error.response));

        
	}, []);

    function handleSuccess(response){
        setPlan(response.data);
        setImage(response.data.image);
    }

    infos = {
        token: token,
        idPlan: idPlan,
        cardName: cardName,
        cardNumber: cardNumber,
        securityNumber: securityNumber,
        expirationDate: expirationDate,
        price: plan.price,
    }

    return(
        <Container>
            <StyledLink to="/subscriptions">
                <img src={Arrow}></img>
            </StyledLink>
            <Logo>
                <img src={plan.image}></img>
                <Titulo>{plan.name}</Titulo>
            </Logo>
            <Div>
                <img src={List}></img>
                <H>Benefícios:</H>
            </Div>
            <div>
                <P>1. Brindes exclusivos</P>
                <P>2. Materiais bônus de web</P>
            </div>
            <Div>
                <img src={Money}></img>
                <H>Preço:</H>
            </Div>
            <div>
                <P>R$ {plan.price} cobrados mensalmente</P>
            </div>
            <Dados>
                <Input type="text" placeholder="Nome impresso no cartão" onChange={e => setCardName(e.target.value)}></Input>
                <Input type="number" placeholder="Digitos do cartão" onChange={e => setCardNumber(e.target.value)}></Input>
                <Inputs>
                    <SmallerInput type="number" placeholder="Código de segurança" onChange={e => setSecurityNumber(e.target.value)}></SmallerInput>
                    <SmallerInput type="text" placeholder="Validade" onChange={e => setExpirationDate(e.target.value)}></SmallerInput>
                </Inputs>
                <Button type="submit" onClick={() => setShowModal(true)}>ASSINAR</Button>
                {showModal && <Modal setShowModal={setShowModal}/>}
            </Dados>
        </Container>
    )
}


const Container = styled.div`
    padding: 24px 38px 34px 22px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Div = styled.div`
    display: flex;  
`

const Titulo = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 24px;
    margin-left: 5px;
`

const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color: #fff;
`
const H = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    line-height: 18.75px;
    margin-left: 5px;
`

const Dados = styled.div`
    display: flex;
    flex-direction: column ;
`

const Input = styled.input`
    width: 298px;
    height: 52px;
    margin-top: 8px;
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
    margin-top: 8px;
    border-radius: 8px;
    padding-left: 14px;
    outline: 0;
    border: none;

    ::placeholder{
        color: #7E7E7E;
        font-size: 12px;
    }
`

const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    width: 298px;
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    margin-top: 12px;
    border: none;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    cursor: pointer;
    display: flex;
    justify-content: start;
`


