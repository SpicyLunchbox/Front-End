//Imports
import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {requestUser} from '../store/actions';

//Component
const Signup = (props) => {
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
        username: null,
        password: null,
        name: null,
        email_address: null,
        phone_number: null,
        address_line: null,
        address_state: null,
        address_city: null,
        zip_code: null
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
            .post('https://my-tech-back-end.herokuapp.com/users/register', form)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.requestUser(res.data.user)
                profile()
            })
            .catch(err => {
                console.log(`error: ${err.response}`)
            })
    }
    return (
        <Page>
            <SignupForm>
                <h1>Sign Up</h1>
                <input
                    name='username'
                    type='text'
                    placeholder='enter username here'
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    name='password'
                    type='text'
                    placeholder='enter password here'
                    value={form.password}
                    onChange={handleChange}
                />
                <input
                    name='name'
                    type='text'
                    placeholder='enter name here'
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name='email_address'
                    type='email'
                    placeholder='enter email here'
                    value={form.email_address}
                    onChange={handleChange}
                />
                <input
                    name='phone_number'
                    type='text'
                    placeholder='enter phone number here'
                    value={form.phone_number}
                    onChange={handleChange}
                />
                <input
                    name='address_line'
                    type='text'
                    placeholder='enter address here'
                    value={form.address_line}
                    onChange={handleChange}
                />
                <input
                    name='address_state'
                    type='text'
                    placeholder='enter state here'
                    value={form.address_state}
                    onChange={handleChange}
                />
                <input
                    name='address_city'
                    type='text'
                    placeholder='enter city here'
                    value={form.address_city}
                    onChange={handleChange}
                />
                <input
                    name='zip_code'
                    type='text'
                    placeholder='enter zip code here'
                    value={form.zip_code}
                    onChange={handleChange}
                />
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

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {
    return { requestUser: (user) => dispatch(requestUser(user))

    }
}
//Export
export default connect(mapStateToProps, mapDispatchToProps)(Signup)

//Styling
const Page = styled.div``

const SignupForm = styled.div``

const Button = styled.button``

const Login = styled.div``

const Marketplace = styled.div``