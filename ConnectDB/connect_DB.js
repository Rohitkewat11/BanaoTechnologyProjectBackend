const mongoose = require('mongoose');

const connect_DB = (uri)=>{
    return(
        mongoose.connect(uri).then(()=>{
            try {
                console.log("database connected:Banaoo_DB");
            } catch (error) {
                console.log(error);
            }
        })
    )
}

module.exports = connect_DB;