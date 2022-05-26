import React, { useEffect, useState } from 'react'
import './SignUpComponent.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import KeyTwoToneIcon from '@mui/icons-material/KeyTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import { useDispatch } from 'react-redux'
import { validName, validPassword } from './RegEx';
import { signUp } from '../services/api.js';
import { makeStyles } from '@material-ui/core';
const initialValue = {
    fullname: '',
    username: '',
    password: ''
}

const isValidValue = {
    isfullname: '',
    isusername: '',
    ispassword: ''
}
const useStyles = makeStyles({
    container: {
        width: '100%',
        
    }
})

const SignUpComponent = () => {
    const [user, setUser] = useState(initialValue);
    const { fullname, username, password } = user;

    const [isValid, setIsValid] = useState(isValidValue);
    const { isfullname, isusername, ispassword } = isValid;

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ValidationMessageCSS = { color: 'red', marginBottom: '20px' }

    const data = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (data) {
            navigate('/signIn')
        }
    });

    const onChangeSetChange = (e) => {

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
            setIsValid({ ...isValid, [isValidKey]: 'Input IS Not Valid...!!!' })
        }
    }
    var flag = true
    const validateFlag = Object.values(isValid).every(val => {
        if(val  !== null && val !== ''){
            flag = false
        }
        return flag
    })

    function validDetails(){
        if(validateFlag){
            dispatch(signUp(user, navigate))
        }
        else{
            alert('Input Is Not Valid...!!!');
        }
    }

    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col className='offset-3 col-6'>
                       <h2 style={{display:'flex', justifyContent:'center'}}>Create User</h2>
                        <Form>
                            <Form.Group className={classes.Container}>
                                <Form.Label style={{ color: 'blue' }}>
                                    < PersonTwoToneIcon style={{ color: 'blue' }} />
                                    Name
                                </Form.Label>
                                <Form.Control onChange={(e) =>onValidate(e,validName)} value={fullname} name='fullname' placeholder='Enter fullname..' required/>
                                <div style={ValidationMessageCSS}>{isfullname}</div>
                            </Form.Group>
                            <br />
                            <Form.Group className={classes.container}>
                                <Form.Label style={{ color: 'blue' }}>
                                    <PersonTwoToneIcon style={{ color: 'blue' }} />
                                    Username
                                </Form.Label>
                                <Form.Control onChange={(e) =>onValidate(e,validName)} value={username} name='username' placeholder='Enter Username..' required/>
                                <div style={ValidationMessageCSS}>{isusername}</div>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label style={{ color: 'blue' }}>
                                    <KeyTwoToneIcon style={{ color: 'blue' }} />
                                    Password
                                </Form.Label>
                                <Form.Control onChange={(e) => onChangeSetChange(e)} onBlur={(e) => onValidate(e,validPassword)} type="password" value={password} name='password' placeholder='Enter Password..' required/>
                                <div style={ValidationMessageCSS}>{ispassword}</div>
                            </Form.Group>
                            <br />

                            <Button variant='primary' type='submit'disabled={fullname.length === 0 || username.length === 0 || password.length ===0} onClick={() => validDetails()} style={{ width: '100%' }}>
                                <PersonAddAltTwoToneIcon /> Create User
                            </Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SignUpComponent