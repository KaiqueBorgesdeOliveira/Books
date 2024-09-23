import styled from "styled-components"
import { livros } from "./dadosUltimosLancamentos"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png'
import { Titulo } from "../Titulo"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00" 
            tamanhoFonte="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo={"Talvez você se enteresse por"}
                subtitulo={"Angular 11"}
                descricao={"Contruindo uma aplicação com a plataforma google"}
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos