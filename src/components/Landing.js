//Imports
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

//Component
const Landing = () => {
    const {push} = useHistory()

    const login = () => {
        push('/login')
    }

    const signup = () => {
        push('/signup')
    }

    const marketplace = () => {
        push('/marketplace')
    }

    return (
        <Page>
            <Header>
                <A href='#'>signup</A>
                <A href='#'>login</A>
            </Header>
            <Body>
                <Title>One Place</Title>
                <Title>For all your tech needs</Title>
                <Info>Tech stuff is EXPENSIVE. Tech stuff that's only needed once or twice isn't worth the cost. Talk to equipment owners directly and get the tech you need faster. </Info>
                <Info>We cut out the middleman. That means your purchases are cheaper and the sellers keep more of the profits!</Info>
                <Button onClick = {signup}>Sign Up</Button>
                <Button onClick = {login}>Log In</Button>
                <Button onClick = {marketplace}>check out our inventory</Button>
            </Body>
            <Footer>

            </Footer>
        </Page>
    )
}

//Export
export default Landing



//Styling
const Page = styled.div``

const Header = styled.div``

const Body = styled.div``

const Footer = styled.div``

const A = styled.a``

const Title = styled.h1``

const Info = styled.p``

const Button = styled.button``