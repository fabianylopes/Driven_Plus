import styled from "styled-components";
import Silver from '../assets/silver.png';
import User from '../assets/user-icon.png';

export default function Home(){
    return (
        <Container>
            <Header>
                <Logo src={Silver}></Logo>
                <img src={User}></img>
            </Header>
            <Titulo>Olá, fulano</Titulo>
            <ButtonsTop>
                <Button>Solicitar brindes</Button>   
                <Button>Materiais bônus de web</Button>
            </ButtonsTop>
            <ButtonsBottom>
                <Button>Mudar plano</Button>   
                <CancelButton>Cancelar plano</CancelButton>
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