import { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import User from '../assets/user-icon.png';
import UserContext from '../contexcts/UserContext';
import axios from "axios";
import { infos } from './Plan';

export default function Home2(){

    const navigate = useNavigate();

    const { name, token } = useContext(UserContext);

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
            <Top>
                <Images>
                    <Logo>
                        <img src={infos.image}></img>
                    </Logo>
                    <UserIcon>
                        <img src={User}></img>
                    </UserIcon>
                </Images>
                <Texto>
                    <Titulo>Olá, {name}</Titulo>
                </Texto>
            </Top>
            <Bottom>
                <ButtonsTop>
                    {infos.perks.map(perk => 
                        <a href={perk.link} target="_blank">
                            <Button>{perk.title}</Button>   
                        </a>
                    )}
                </ButtonsTop>
                <ButtonsBottom>
                    <Button onClick={() => navigate('/subscriptions')}>Mudar plano</Button>   
                    <CancelButton onClick={cancelPlan}>Cancelar plano</CancelButton>
                </ButtonsBottom>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 22px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Top = styled.div`
    width: 375px;
    height: 176px;
    padding-right: 20px;
    padding-left: 36px;
`

const Images = styled.div`
    display: flex;
    justify-content: space-between;
`

const Bottom = styled.div`
    width: 375px;
    height: 491px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Logo = styled.div`
    img{
        width: 76px;
        height: 54px;
        padding-top: 12px;
    }
`

const UserIcon = styled.div`
    
`

const Texto = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: center;
`

const Titulo = styled.p`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-top: 14px;
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
