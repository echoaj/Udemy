const mongoose = require('mongoose');
//  Don't need this anymore
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);

class Database {

    constructor(){
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:admin@twitterclone.9lamd.mongodb.net/twitterTest?retryWrites=true&w=majority")
            .then(() => {
                console.log("Database Connection Successful");
            })
            .catch((err) => {
                console.log("Database Connection ERROR");
                console.log(err);
            });
    }
}

module.exports = new Database();