import EmpresaBotton from '../EmpresaBotton'
import {EmpresaContainer, EmpresaContainerLista, EmpresaContainerTexto, EmpresaTitulo} from './style' 

function Empresa(){
    return (
        <EmpresaContainer>

            <EmpresaContainerTexto>
                <EmpresaTitulo>
                    Empresas
                </EmpresaTitulo>

                <span>
                    Nós encontramos 14 empresas para você
                </span>
            </EmpresaContainerTexto>

            <EmpresaContainerLista>
                <EmpresaBotton>
                </EmpresaBotton>
            </EmpresaContainerLista>

        </EmpresaContainer>
    );
}

export default Empresa;