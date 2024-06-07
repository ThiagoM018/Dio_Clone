import { MdEmail , MdLock } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title, Column, Wrapper, CriarText, EsqueciText, SubTitleLogin, TitleLogin, Row } from './style';

const Login = () => {

    const navigate = useNavigate();
    
    const hundleClickLog = () => {
        navigate("/feed");
    }

    return(<>

            <Header />

            <Container>

                <Column>

                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>

                </Column>

                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu Cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        
                        <form>
                            <Input placeholder='E-mail' leftIcon={<MdEmail />}/>
                            <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                            <Button title='Entrar' variant='secondary' onclick={hundleClickLog}/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha Senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>

                    </Wrapper>
                </Column>
            </Container>
            
        </>
    )
};

export { Login };