import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/ticket';
import EditForm from "./EditForm";
import DeleteTicket from './DeleteTicket';

const columns = [
    { field: '_id', headerName: 'Ticket_ID', width: 0, hide: true },
    { field: 'empname', headerName: 'Employee_Name', width: 200 },
    { field: 'empid', headerName: 'Employee_Id', width: 150 },
    { field: 'ticket_desc', headerName: 'Description', width: 200 },
    { field: 'create_at', headerName: 'Created_At', width: 150 },
    { field: 'updated_at', headerName: 'Updated_At', width: 200 },
    { field: 'deleted_at', headerName: 'Resolved_At', width: 200 },
    {
        field: 'edit', headerName: 'EDIT', width: 150,
        renderCell: (cellValues) => {
            return (
                <>
                    <EditForm cellValues={cellValues} />
                </>


            )

        }
    },
    {
        field: 'delete', headerName: 'RESOLVED', width: 200,
        renderCell: (cellValues) => {
            return (
                <>
                    <DeleteTicket cellValues={cellValues} />
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
    
    return (
        <div style={{height: 500, width: '100%'}}>
            <DataGrid
                style={{ margin: '0 20px' }}
                getRowId={(row) => row._id}
                rows={tickets}
                columns={columns}
                pageSize={10}
                autoHeight
            />
        </div>

    )

}
export default TicketGrid;      