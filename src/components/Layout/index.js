import Header from '../Header'
import BemVindo from '../BemVindo'
import Formulario from '../Formulario'
import Footer from '../Footer'
import {Section, MainContainer, Container, FilhoContainer} from './style'
import Empresa from '../Empresa/index.'

function Layout({children}){
    return(
        <Container>
            <Header>
            </Header>
            
            <Section>
                <BemVindo>
                </BemVindo>

                <MainContainer>
                    
                    <FilhoContainer>
                        <Formulario>
                        </Formulario>
                    </FilhoContainer>
                    
                    <Empresa>
                    </Empresa>
                    
                </MainContainer>
            </Section>

            <Footer>
            </Footer>
        </Container>
    );
}

export default Layout;