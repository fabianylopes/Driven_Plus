import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Logo from '../assets/driven.png'
import axios from "axios";
import UserContext from '../contexcts/UserContext';

export default function Login(){
    
    const { token, setToken } = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
    

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", {
          email,
          password
        });
    
        promise.then(handleSuccess);
        promise.catch(handleFailure);
    }

    function handleSuccess(response){
        setToken(response.data.token);
        
        const status = response.data.membership;
        if(status === null){
            navigate('/subscriptions');
        }else{
            navigate('/home');
        }

    }

    function handleFailure(error){
        alert(error.response.data.message);
    }
    
    return (
        <Container>
            <img src={Logo}></img>
            <Input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></Input>
            <Button type="submit" onClick={handleLogin}>ENTRAR</Button>
            <StyledLink to="/register">Não possui uma conta? Cadastre-se</StyledLink>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        margin-bottom: 100px;
    }
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

const Button = styled.button`
    width: 298px;
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: underline;
`