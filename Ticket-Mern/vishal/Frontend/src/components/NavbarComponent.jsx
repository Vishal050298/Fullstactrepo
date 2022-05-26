import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { AppBar, Typography, Toolbar, Avatar, makeStyles, Button } from "@material-ui/core";
import { useNavigate,useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

const useStyles = makeStyles({
    header: {
        backgroundColor: "black",
        color: "white",
        
    },
    tabs: {
        textDecoration: "none",
        marginRight: "20px",
        color: "lightgray",
        fontSize: "20px"
    },
    ticket: {
        textDecoration: "none",
        marginRight: "1000px",
        color: "lightgray",
        fontSize: "20px"
    }

})

const NavbarComponent = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate = useNavigate();
    const classes = useStyles();
    const location = useLocation();

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

    },[location]);
    return (

        <AppBar position='static' className={classes.header}>
            <Toolbar>
                <NavLink to="/" className={classes.ticket}>
                   <ConfirmationNumberTwoToneIcon style={{color:'lightgray'}}/> Ticketing System
                </NavLink>

                { user ?.accessToken? (
                    <>
                        <Avatar style={{color:'black'}} className={classes.tabs} alt={user?.accessToken.fullname} src={user?.accessToken.imageUrl}>{user?.accessToken?.fullname.charAt(0)}</Avatar>
                        <Typography className={classes.tabs} variant="h6">{user?.accessToken.fullname}</Typography>

                        <Button className={classes.tabs} onClick={signOut}>
                            <LogoutTwoToneIcon style={{color:'lightgray'}}/>
                            logout
                        </Button>


                    </>
                ) : (
                    <>
                        <NavLink component={Link} to="/signIn" className={classes.tabs} >
                           <LoginTwoToneIcon style={{color:'lightgray'}}/> Login
                        </NavLink>
                        <NavLink component={Link} to="/signUp" className={classes.tabs}>
                           <PersonAddAltTwoToneIcon style={{color:'lightgray'}}/> CreateUser
                        </NavLink>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavbarComponent



