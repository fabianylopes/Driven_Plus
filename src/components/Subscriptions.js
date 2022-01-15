import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import UserContext from '../contexcts/UserContext';

export default function Subscriptions(){

    const { token } = useContext(UserContext);

    const [image, setImage] = useState('');
    const [planos, setPlanos] = useState([]);


    useEffect(() => {
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

		const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config);
		promise.then(handleSuccess);
        promise.catch(error => console.log(error.response));
        
	}, []);

    function handleSuccess(response){
        setImage(response.data.image);
        setPlanos(response.data);
    }
    
     return(
        <Container>
            <Titulo>Escolha seu Plano</Titulo>
            <Plans>
                {planos.map(plano => 
                <Link to={`/plano/${plano.id}`}>
                    <Plan>
                        <img src={plano.image}></img>
                        <Valor>{plano.price}</Valor>
                    </Plan>
                </Link>)}
            </Plans>
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

const Plans = styled.div`
    
`

const Plan = styled.button`
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
