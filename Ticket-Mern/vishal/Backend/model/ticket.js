import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const ticketSchema = mongoose.Schema({
    ticket_title: String,
    ticket_desc: String,
    create_at: {
        type: String,
        default: new Date()
    },
    updated_at: {
        type: String,
        default: ''
    },
    deleted_at: {
        type: String,
        default: ''
    },
    empid: String,
    empname: String,
    creator: String,
    Date: Date,
    Resolved: {
        type: Boolean,
        default: false
    }
})

autoIncrement.initialize(mongoose.connection);
ticketSchema.plugin(autoIncrement.plugin, 'ticketCollection');

const ticketModel = mongoose.model('ticketCollection', ticketSchema)

export default ticketModel;
