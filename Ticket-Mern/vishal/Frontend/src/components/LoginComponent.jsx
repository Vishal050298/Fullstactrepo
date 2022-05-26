import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/api'
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import KeyTwoToneIcon from '@mui/icons-material/KeyTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { validName, validPassword } from './RegEx';


const initialValue = {
    username: '',
    password: ''
}
const isValidValue = {
    isusername: '',
    ispassword: ''
}
const useStyles = makeStyles({
    Container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        marginTop: '100px',
        justifyContent: 'center',
        overflow:'hidden',
        position:'absolute'
    },
    img:{
        position:'relative'
    }
});
const LoginComponent = () => {

    const [user, setUser] = useState(initialValue);
    const { username, password } = user;

    const [isValid, setIsValid] = useState(isValidValue)
    const { isusername, ispassword } = isValid

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (data) {
            navigate('/profile')
        }
    });

    const ValidationMessageCSS = { color: 'red', marginBottom: '20px' }

    function changeHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onValidate = (e, RegEx) => {
        const RegExOb = new RegExp(RegEx)
        const isValidKey = 'is' + e.target.name

        if (e.target.value === '' || RegExOb.test(e.target.value)) {
            setIsValid({ ...isValid, [isValidKey]: '' })
            setUser({ ...user, [e.target.name]: e.target.value })
        }
        else {
            setIsValid({ ...isValid, [isValidKey]: 'Input Is Not Valid...!!!' })
        }
    }
    var flag = true
    const validateFlag = Object.values(isValid).every(val => {
        if (val !== null && val !== '') {
            flag = false
        }
        return flag
    })

    function validateDetails() {
        if (validateFlag) {
            dispatch(signIn(user, navigate))
        }
        else {
            alert('Invalid input!!')
        }
    }

    return (
        <div className={classes.Container}>
            
            <Container >

                <Row>
                    <Col className='offset-3 col-6'>

                        <h3 style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
                            Login Here
                        </h3>
                        <Form>
                            <Form.Group>
                                <Form.Label style={{ color: 'blue' }}>
                                    <PersonTwoToneIcon style={{ color: 'blue' }} />
                                    Username
                                </Form.Label>
                                <Form.Control onChange={(e) => changeHandler(e)} onBlur={(e) => onValidate(e, validName)} value={username} name='username' placeholder='Enter username..' required />
                                <div style={ValidationMessageCSS}>{isusername}</div>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label style={{ color: 'blue' }}>
                                    <KeyTwoToneIcon style={{ color: 'blue' }} />
                                    Password
                                </Form.Label>
                                <Form.Control onChange={(e) => changeHandler(e)} onBlur={(e) => onValidate(e, validPassword)} type="password" value={password} name='password' placeholder='Enter Password..' required />
                                <div style={ValidationMessageCSS}>{ispassword}</div>
                            </Form.Group>
                            <br />
                            <Button onClick={() => validateDetails()} disabled={username.length === 0 || password.length === 0} style={{ width: '100%' }}>
                                <LoginTwoToneIcon /> Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}


export default LoginComponent