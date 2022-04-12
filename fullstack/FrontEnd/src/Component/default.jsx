import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Default = () => {
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            <Typography variant="h4">Welcome To Complete React Application.</Typography>
        </Box>
    )
}
export default Default;