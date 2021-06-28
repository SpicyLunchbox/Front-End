//Imports
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

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

        </Page>
    )
}

//Export
export default Landing



//Styling
const Page = styled.div`

`