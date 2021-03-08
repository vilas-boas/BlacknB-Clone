import { BemVindoContainer, BotaoSobre, TextoBemVindo, TituloBemVindo } from "./style";

function BemVindo(){
    return(
        <BemVindoContainer>

            <TituloBemVindo>
                Bem vindo(a) a Comunidade BlacknB
            </TituloBemVindo>

            <TextoBemVindo>
                BlacknB é uma plataforma para ajudar negócios de pessoas negras. Nós buscamos dar visibilidade para seu negócio, seja ele qual for.
            </TextoBemVindo>

            <BotaoSobre>
                Sobre nós
            </BotaoSobre>

        </BemVindoContainer>
    );
}

export default BemVindo;