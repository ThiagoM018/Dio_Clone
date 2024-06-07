import { Link } from 'react-router-dom';

import  Baner  from '../../assets/banner.png'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Title, TitleHighlight, Column } from './style';

const Feed = () => {
    return(<>

            <Header autenticado={true}/>

            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight># Rank 5 top da semana</TitleHighlight>
                    <UserInfo percentual={78} nome='Thiago Estevao' image='https://avatars.githubusercontent.com/u/104592396?s=400&v=4' />
                    <UserInfo percentual={61} nome='Bruno Henrique' image='https://avatars.githubusercontent.com/u/103577843?v=4' />
                    <UserInfo percentual={55} nome='Pablo Henrique' image='https://avatars.githubusercontent.com/u/45184516?v=4' />
                    <UserInfo percentual={33} nome='Allan Ramos' image='https://avatars.githubusercontent.com/u/104592396?s=400&v=4' />
                    <UserInfo percentual={21} nome='Abraao Silva' image='https://avatars.githubusercontent.com/u/104592396?s=400&v=4' />
                </Column>
                
                
            </Container>
            
        </>
    )
};

export { Feed };