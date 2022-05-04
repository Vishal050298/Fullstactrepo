import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/ticket';
import EditForm from "./EditForm";
import DeleteTicket from './DeleteTicket';

const columns = [
    { field: '_id', headerName: '_id', width:200},
    { field: 'empname', headerName: 'Employee_Name', width: 200 },
    { field: 'empid', headerName: 'Employee_id', width: 200 },
    { field: 'ticket_desc', headerName: 'Description', width: 200 },
    { field: 'create_at', headerName: 'Created_At', width: 250 },
    { field: 'updated_at', headerName: 'Updated_At', width: 200 },
    { field: 'edit', headerName: 'EDIT',
        renderCell: (cellValues) => {
            return(
                <>
                <EditForm cellValues={cellValues}/>
                </>
                    
                
            )
            
        }
    },
    { field: 'delete', headerName: 'DELETE',
        renderCell: (cellValues) => {
            return(
               <>
                <DeleteTicket cellValues={cellValues}/>
               </> 
            ) 
        }
    }
];

const TicketGrid = () => {

    //const [tickets, setTickets] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(((getTickets())))
    }, [dispatch]);

    const tickets = useSelector((store) => store.ticket)

    //setTickets(ticketss)
    return(
        <DataGrid
        style={{ margin: '0 20px' }}
        getRowId={row => row._id}
        rows={tickets}
        columns={columns}
        pageSize={10}
        autoHeight
    />
    )
    
} 
export default TicketGrid;      