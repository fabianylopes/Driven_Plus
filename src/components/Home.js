import { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import User from '../assets/user-icon.png';
import UserContext from '../contexcts/UserContext';
import axios from "axios";

export default function Home(){

    const navigate = useNavigate();

    const { name, membership, token } = useContext(UserContext);

    function changePlan(){
        cancelPlan();
        navigate('/subscriptions');
    }

    function cancelPlan(){
            
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
        promise.then(handleSuccess);
        promise.catch(error => console.log(error.response));
            
        function handleSuccess(){
            navigate('/subscriptions');
        }

    }
        
    return (
        <Container>
            <Header>
                <Logo src={membership.image}></Logo>
                <img src={User}></img>
            </Header>
            <Titulo>Olá, {name}</Titulo>

            <ButtonsTop>
                {membership.perks.map(perk => 
                    <a href={perk.link} target="_blank">
                        <Button>{perk.title}</Button>   
                    </a>
                )}
            </ButtonsTop>

            <ButtonsBottom>
                <Button onClick={changePlan}>Mudar plano</Button>   
                <CancelButton onClick={cancelPlan}>Cancelar plano</CancelButton>
            </ButtonsBottom>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 32px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        width: 34px;
        height: 34px;
    }
`

const Logo = styled.img`
    width: 74px;
    height: 51px;
`

const Titulo = styled.p`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
`

const ButtonsTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const ButtonsBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const Button = styled.button`
    width: 298px;
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    font-weight: 700;
    font-size: 14px;

    border-radius: 8px;
    border: none;
    cursor: pointer;
`
const CancelButton = styled.button`
    width: 298px;
    height: 52px;
    background-color: #FF4747;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
