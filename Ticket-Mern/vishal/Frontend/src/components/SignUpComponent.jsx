import React,{useState} from 'react'
import './SignUpComponent.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {signUp} from '../services/api.js'
import { useNavigate } from 'react-router-dom'

const initialValue = {
    fullname : '',
    username : '',
    password : ''
}



const SignUpComponent = () => {

    const [user, setUser] = useState(initialValue);
    const { fullname, username, password} = user;
    // const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        // console.log(user)
        await signUp(user);
        navigate('/signIn');
    } 

    return (
        <div className='login'>
            <Container>
                <Row>
                    <Col className='offset-3 col-6'>
                        <h3>Create New Account</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label> Name </Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} value={fullname}  name='fullname' placeholder='Enter fullname..' required />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label> Username </Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} value={username} name='username' placeholder='Enter Username..' required />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label> Password </Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} type="password" value={password} name='password' placeholder='Enter Password..' required />
                            </Form.Group>
                            <br/>

                            <Button onClick={() => addUserDetails()}>SignUp</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUpComponent