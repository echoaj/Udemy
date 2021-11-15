const mongoose = require('mongoose');   // any time you want to connect to the database, this is all you need
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    content: { type:String, trim: true },
    // Type is the auto generated _id bu mongodb, ref means from User collection
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
    pinned: Boolean
    
}, { timestamps: true });   


const Post = mongoose.model('Post', PostSchema);
module.exports = Post