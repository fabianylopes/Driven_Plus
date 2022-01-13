import styled from "styled-components";
import Silver from '../assets/silver.png';
import User from '../assets/user-icon.png';

export default function Home(){
    return (
        <Container>
            <Header>
                <img src={Silver}></img>
                <img src={User}></img>
            </Header>
            <Titulo>Olá, fulano</Titulo>
            <ButtonsTop>
                <Button>Solicitar brindes</Button>   
                <Button>Materiais bônus de web</Button>
            </ButtonsTop>
            <div>
                <Button>Mudar plano</Button>   
                <CancelButton>Cancelar plano</CancelButton>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const Header = styled.div`
`

const Titulo = styled.p`
    color: #fff;
`

const ButtonsTop = styled.div`
    
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