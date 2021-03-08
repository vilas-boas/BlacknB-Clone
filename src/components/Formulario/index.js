import {ContainerForm, FormBuscar, InputBusca, ButtonBusca} from './style';

function Formulario(){
    return(

        <ContainerForm>
            <FormBuscar>
                <InputBusca type="text" placeholder="Buscar por empresa..."></InputBusca>

                <ButtonBusca>
                    Buscar
                </ButtonBusca>
            </FormBuscar>
        </ContainerForm>
        
    );
}

export default Formulario;