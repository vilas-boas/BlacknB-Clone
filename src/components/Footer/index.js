import { ContainerFooter, ContainerSidebar, ContainerMenu, LinkFooter, Container, SpanFooter, ContainerRedes, SelectFooter } from "./style";

function Footer(){
    return(
        <Container>

            <ContainerFooter>

                <ContainerSidebar>
                    <SpanFooter>Copyright© 2020 DYSOFT</SpanFooter>

                    <ContainerMenu>
                        <LinkFooter href="">Sobre</LinkFooter>
                        <LinkFooter href="">Formulário de Contato</LinkFooter>
                        <LinkFooter href="">Política de Privacidade</LinkFooter>
                        <LinkFooter href="">Termos de Uso</LinkFooter>
                    </ContainerMenu>
                </ContainerSidebar>

                <ContainerRedes>
                    <LinkFooter href="">Facebook</LinkFooter>
                    <LinkFooter href="">Instagram</LinkFooter>
                    <LinkFooter href="">Linkedin</LinkFooter>

                    <SelectFooter type="text">
                        <option>pt</option>
                        <option>en</option>
                        <option>fr</option>
                        <option>es</option>
                    </SelectFooter>
                </ContainerRedes>
                
            </ContainerFooter>

        </Container>
    );
}

export default Footer;