import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';
import styled from "styled-components";
// import Silver from '../assets/silver.png'
// import Gold from '../assets/gold.png'
// import Platinum from '../assets/platinum.png'
import axios from "axios";

export default function Subscriptions(){

    const [plano, setPlano] = useState({});

    useEffect(() => {
		const promess = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships");
		promess.then(response => {setPlano(response.data)});
	}, []);


    return(
        <Container>
            <Titulo>Escolha seu Plano</Titulo>
            <Planos>
                {plano.map(() =>
                <Plano>
                    <img src={image}></img>
                    <Valor>{price}</Valor>
                </Plano>
                    )}
                {/* <Plano>
                    <img src={Silver}></img>
                    <Valor>R$ 39,99</Valor>
                </Plano>
                <Plano>
                    <img src={Gold}></img>
                    <Valor>R$ 69,99</Valor>
                </Plano>
                <Plano>
                    <img src={Platinum}></img>
                    <Valor>R$ 99,99</Valor>
                </Plano> */}
            </Planos>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Titulo = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 24px;
`

const Planos = styled.div`
    
`

const Plano = styled.button`
    width: 290px;
    height: 180px;
    border-radius: 12px;
    border: 3px solid #7E7E7E;
    margin-bottom: 10px;
    background-color: #000;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Valor = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 24px;
`
