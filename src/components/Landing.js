//Imports
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import img from '../img/tech-photo.jpg';

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
                <A href='/signup'>signup</A>
                <A href='/login'>login</A>
            </Header>
            <Body classList="jeffrey-bezoz">
                <TitleContainer>
                    <Title>One Place</Title>
                    <Title>For all your tech needs</Title>
                </TitleContainer>
                <InfoContainer>
                    <Info>Tech stuff is EXPENSIVE. Tech stuff that's only needed once or twice isn't worth the cost. Talk to equipment owners directly and get the tech you need faster. </Info>
                    <Info>We cut out the middleman. That means your purchases are cheaper and the sellers keep more of the profits!</Info>
                </InfoContainer>
                <ButtonContainer>
                    <Button onClick = {signup}>Sign Up</Button>
                    <Button onClick = {login}>Log In</Button>
                    <Button onClick = {marketplace}>check out our inventory</Button>
                </ButtonContainer>
            </Body>
            <Footer>
            </Footer>
        </Page>
    )
}

//Export
export default Landing



//Styling
const Page = styled.div`
margin: 0;
padding: 0;
font-size: 17px;
font-family: 'Poppins', sans-serif;
line-height:1.6;
background-image:url(${img});
background-size:cover;
background-position:center;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
padding:0 20px;
`

const Header = styled.div`
height: 10vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`

const Body = styled.div`
height: 50%;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`

const Footer = styled.div``

const A = styled.a`
text-decoration: none;
color: black;
font-weight: 600;
`

const Title = styled.h1`
`

const Info = styled.p`
font-size: 20px
`

const Button = styled.a`
cursor: pointer;
display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #0cf;
  &:hover {
    color: black;
    background-color: transparent;
    &:before {
      width: 100%;
    }
}
`

const InfoContainer = styled.div`

`

const ButtonContainer = styled.div`
margin-left: 185px;
display: flex;
width: 80%;
justify-content: space-around;
`

const TitleContainer = styled.div``