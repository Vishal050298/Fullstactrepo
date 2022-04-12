import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: ''
}
const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
        const [user, setUser] = useState(initialValue);
        const{ name, username, email, phone, password} = user;
        let classes = useStyles();
        let navigate = useNavigate();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('./all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email_ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact_No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}
export default AddUser;