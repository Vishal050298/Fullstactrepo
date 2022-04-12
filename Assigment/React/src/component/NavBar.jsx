import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:'grey',
    },
    tabs:{
        color:'indigo',
        marginRight:20,
        textDecoration:'none',
        fontSize:20
    }
})
const NavBar = () => {
    const classes = useStyle();
    return(
        <AppBar position='static' className={classes.header}>
          <Toolbar>
                <NavLink className={classes.tabs} to="./">React Navigation</NavLink>
                <NavLink className={classes.tabs} to="./">First</NavLink>
                <NavLink className={classes.tabs} to="./SecondComp">Second Component</NavLink>
                <NavLink className={classes.tabs} to="./ThirdComp">Third Component</NavLink>
                <NavLink className={classes.tabs} to="./FourthComp">Fourth Component</NavLink>
          </Toolbar>  
        </AppBar>
    )
}
export default NavBar;