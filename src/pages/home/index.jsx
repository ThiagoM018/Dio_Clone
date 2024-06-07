import { useNavigate } from 'react-router-dom';

import  Baner  from '../../assets/banner.png'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';

import { Container, TextContent, Title, TitleHighLight } from './style'

const Home = () => {

    const navigate = useNavigate();
    
    const hundleClickSingIn = () => {
        navigate("/login");
    }

    return(<>

            <Header />

            <Container>

                <div>
                    <Title>
                        <TitleHighLight>Implemente <br /></TitleHighLight> 
                        o seu futuro global agora!
                    </Title>

                    <TextContent>
                        Domine as tecnologias ultilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os mais experts.
                    </TextContent>

                    <Button title="Começar agora" variant='secundary' onclick={hundleClickSingIn}/>

                </div>

                <div>
                    <img src={Baner} alt="Imagen Principal" />
                </div>
            </Container>
            
        </>
    )
};

export { Home };