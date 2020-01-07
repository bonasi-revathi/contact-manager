var mongoose = require('./mongo'); //importing connection config
const autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

//schema 
var Contact = new Schema(
  {
    contactId: Number,
    name: String,
    phone: Number,
    email: String,
    status: String,
    createdBy : String,
    createdOn : {type: Date, default: Date.now},
    updatedBy : String,
    updatedOn : {type: Date, default: Date.now}
  }
);

Contact.plugin(autoIncrement.plugin,{model:'Contact',field:'contactId',startAt:1});
module.exports = mongoose.model('Contact', Contact);