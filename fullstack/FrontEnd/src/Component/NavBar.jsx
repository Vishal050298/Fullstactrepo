import { AppBar, ToolBar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return(
        <AppBar position="static" className={classes.header}>
            <ToolBar>
                <NavLink className={classes.tabs} to = "./">React_Demo</NavLink>
                <NavLink className={classes.tabs} to = "all">All_Users</NavLink>
                <NavLink className={classes.tabs} to = 'add'>Add_User</NavLink>
            </ToolBar>
        </AppBar>
    )
}
export default NavBar;