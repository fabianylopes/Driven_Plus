import styled from "styled-components";
import axios from "axios";
import X from '../assets/close.png'
import { useNavigate } from 'react-router';
import { infos } from "../components/Plan";

export default function Modal({ setShowModal, setMembership, setPerks }){
   
    const navigate = useNavigate();

    
    function Subscribe(){
        const config = {
            headers: {
                Authorization: `Bearer ${infos.token}`
            }
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", 
        {
            membershipId: infos.idPlan,
            cardName: infos.cardName,
            cardNumber: infos.cardNumber,
            securityNumber: infos.securityNumber,
            expirationDate: infos.expirationDate
        }, 
        config);    

        promise.then(handleSuccess);
        promise.catch(handleFailure);
    }
    
    function handleSuccess(response){

        setMembership(response.data.membership);
        setPerks(response.data.membership.perks);
        
        navigate('/home');
    }

    function handleFailure(error){
        alert(error.response.data.message);
        setShowModal(false);
    }

    return(
        <Container>
            <DivImage>
                <Image onClick={() => setShowModal(false)} src={X}></Image>
            </DivImage>
            <DivBox>
                <Caixa>
                    <Texto>Tem certeza que deseja assinar o plano <br></br>Driven Plus (R$ {infos.price})?</Texto>
                    <ButtonsModal>
                        <NoButton onClick={() => setShowModal(false)}>Não</NoButton>
                        <YesButton onClick={Subscribe}>SIM</YesButton>
                    </ButtonsModal>
                </Caixa>
            </DivBox>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    
    
    padding-bottom: 228px;
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivImage = styled.div`
    padding-top: 25px;
    padding-right: 20px;
    display: flex;
    justify-content: end;
`

const Image = styled.img`
    z-index: 2;
    cursor: pointer;
`

const DivBox = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`

const Caixa = styled.div`
    width: 248px;
    height: 210px;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px 22px 10px 22px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Texto = styled.p`
    color: #000;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.09px;
    text-align: center;
`

const ButtonsModal = styled.div`
    display: flex;
    justify-content: space-between;
`

const NoButton = styled.button`
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    background-color: #CECECE;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    margin-right: 7px;
    cursor: pointer;
`

const YesButton = styled.button`
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    background-color: #FF4791;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-left: 7px;
    cursor: pointer;
`
