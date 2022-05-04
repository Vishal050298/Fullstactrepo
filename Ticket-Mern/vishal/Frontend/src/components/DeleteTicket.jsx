import { Button } from "@mui/material";
import { deleteTicket, getTickets } from "../actions/ticket";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const DeleteTicket = ({cellValues}) => {
    //const empid = JSON.parse(localStorage.getItem('user'))?.user
    const dispatch = useDispatch()
    const delTicket = () =>{
        if(window.confirm("Are You Sure? You Want To Delete These Data...!!!")) {
            dispatch(deleteTicket(cellValues.row._id)).then(dispatch(getTickets()))
        }
    }

    return(
        <Button variant="contained" color="primary" onClick={delTicket}>
            Delete
        </Button>
    )
}
export default DeleteTicket;