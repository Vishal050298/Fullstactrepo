import { Button } from "@mui/material";
import { deleteTicket } from "../actions/ticket";
import { useDispatch } from "react-redux";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box } from "@material-ui/core";

const DeleteTicket = ({cellValues}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const delTicket = () =>{
        if(window.confirm("Are You Sure? You Want To Delete These Data...!!!")) {
            dispatch(deleteTicket(cellValues.row._id))
        }
    }

    return(
        
            <Button disabled={!(user.accessToken.fullname === cellValues.row.empname)||cellValues.row.deleted_at} onClick={delTicket}>
                <DeleteTwoToneIcon />
                Resolved
            </Button>
        
    )
}
export default DeleteTicket;