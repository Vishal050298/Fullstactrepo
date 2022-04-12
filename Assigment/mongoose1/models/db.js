const mongoose = require('mongoose');
url='mongodb+srv://vishal:vishal@vishal.1yios.mongodb.net/Employee'

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
