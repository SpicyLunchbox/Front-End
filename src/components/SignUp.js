//Imports
import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

//Component
const Signup = () => {
    const {push} = useHistory()
    const login = () => {
        push('/login')
    }
    const marketplace = () => {
        push('/marketplace')
    }
    const profile = () => {
        push('/profile')
    }

    const initialForm = {
        // use redux state
    }

    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('#', form)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                //store state in redux store here
                profile()
            })
            .catch(err => {
                console.log(`error: ${err.response}`)
            })
    }
    return (
        <Page>
            <SignupForm>
                <h1>Sign In</h1>
                {/* input fields here */}
                <Button onClick={handleSubmit}>Submit</Button>
            </SignupForm>
            <Login>
                <p>Already a member?</p>
                <Button onClick={login}>Login</Button>
            </Login>
            <Marketplace>
                <p>Unsure if you want to join?</p>
                <p>Check out our stock</p>
                <Button onClick={marketplace}>Browse</Button>
            </Marketplace>
        </Page>
    )
}

//Export
export default Signup

//Styling
const Page = styled.div``

const SignupForm = styled.div``

const Button = styled.div``

const Login = styled.div``

const Marketplace = styled.div``