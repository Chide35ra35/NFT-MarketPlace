const mongoose = require ("mongoose")
const collectionSchema = new mongoose.Schema({
    title : {type: String},
    description:{type:String},
    price:{type: String},
    image : {type : String},
    owner : {type : mongoose.Types.ObjectId, ref : "User"}
},{timestamps : true}
);

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;