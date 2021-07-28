//Imports
import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {requestUser} from '../store/actions';

//Component
const Login = (props) => {
    const {push} = useHistory()
    const signup = () => {
        push('/signup')
    }
    const profile = () => {
        push('/profile')
    }

    const initialForm = {
        username: null,
        password: null
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
            .post('https://my-tech-back-end.herokuapp.com/users/login', form)
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
            <LoginForm>
                <h1>Login</h1>
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
                <Button onClick={handleSubmit}>Submit</Button>
            </LoginForm>
            <Signup>
                <p>Not a member yet?</p>
                <Button onClick={signup}>Signup</Button>
            </Signup>
        </Page>
    )
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {
    return {
        requestUser: (user) => dispatch(requestUser(user))
    }
}
//Export
export default connect(mapStateToProps, mapDispatchToProps)(Login)

//Styling
const Page = styled.div``

const LoginForm = styled.div``

const Button = styled.button``

const Signup = styled.div``