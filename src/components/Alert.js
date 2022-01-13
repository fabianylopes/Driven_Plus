import styled from "styled-components";

export default function Alert(){
    return(
        <Caixa>
            <Texto>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</Texto>
            <Buttons>
                <NoButton>Não</NoButton>
                <YesButton>SIM</YesButton>
            </Buttons>
        </Caixa>
    )
}

const Caixa = styled.div`
    width: 248px;
    height: 210px;
    background-color: #fff;
    border-radius: 12px;
`

const Texto = styled.p`
    color: #000;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
`

const NoButton = styled.button`
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #CECECE;
`

const YesButton = styled.button`
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #FF4791;
`