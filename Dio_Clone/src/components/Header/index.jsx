import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';


import { 
    BuscarInputContainer, 
    Container,  
    Input, 
    Menu, 
    MenuRigth,  
    Row,
    UserPicture,
    Wrapper
} from './estyles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>

            <Row>

                <img src={logo} alt='logo dio'/>
                
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
                
            </Row>

            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/104592396?v=4' />
                ) : (<>
                    <MenuRigth href='/'>Home</MenuRigth>
                
                    <Button title={'Entrar'}/>
                    <Button title={'Cadastrar'}/>
                </>)}
                
            
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header } ;