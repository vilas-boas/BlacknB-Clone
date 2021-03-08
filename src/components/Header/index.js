import { Section, LogoContainer, OpcoesContainer, Button, Login } from "./style";

function Header(){
    return(
        <Section>
            
            <LogoContainer href="#">
                <img src="" alt="BlacknB"></img>
            </LogoContainer>

            <OpcoesContainer>
                <Button>
                    Localização: Eunápolis (BR)
                </Button>

                <Login href="">
                    Login
                </Login>

            </OpcoesContainer>
            
        </Section>
    );
}

export default Header;