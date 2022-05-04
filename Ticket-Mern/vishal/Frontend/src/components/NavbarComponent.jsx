import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { AppBar, Typography, Toolbar, Avatar, makeStyles, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

const useStyles = makeStyles({
    header: {
        backgroundColor: "black",
        color: "white"
    },
    tabs: {
        textDecoration: "none",
        marginRight: "20px",
        color: "white",
        fontSize: "20px"
    },
    ticket: {
        textDecoration: "none",
        marginRight: "1000px",
        color: "white",
        fontSize: "20px"
    }

})

const NavbarComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    //console.log(user)
    const navigate = useNavigate();
    const classes = useStyles();


    const signOut = () => {
        localStorage.removeItem("user");
        navigate('/');
    }


    useEffect(() => {
        const token = user?.token;

        if (token) {

            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) signOut();

        }
        setUser(JSON.parse(localStorage.getItem('user')));

    }, []);
    return (

        <AppBar position='static' className={classes.header}>
            <Toolbar>
                <NavLink to="/" className={classes.ticket}>Ticketing Website</NavLink>

                {user?.accessToken ? (
                    <>
                        <Avatar className={classes.tabs} alt={user?.accessToken.fullname} src={user?.accessToken.imageUrl}>{user?.accessToken?.fullname.charAt(0)}</Avatar>
                        <Typography className={classes.tabs} variant="h6">{user?.accessToken.username}</Typography>

                        <Button color="primary" variant="contained" className={classes.tabs} onClick={signOut} >Logout</Button>


                    </>
                ) : (
                    <>
                        <NavLink component={Link} to="/signIn" className={classes.tabs} >Login</NavLink>
                        <NavLink component={Link} to="/signUp" className={classes.tabs}>SignUp</NavLink>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavbarComponent



