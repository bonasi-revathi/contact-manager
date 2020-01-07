//1.connect to db
var Contact = require("../models/contact");

exports.createContact = function(contactData, callback) {
  console.log(contactData);
  console.log(callback);

  //2.constructing the query
  var contactDao = new Contact(contactData);
  //3.executing the query
  contactDao.save(function(err, data) {
    // 4.get the result
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
    callback(err, data); //5.send the result
  });
  // contactData.id = 1;
  // var status = {
  //   code: 200,
  //   info: "created sucessfully",
  //   data: contactData
  // };
  // callback(false, status);
};

exports.getContacts = function(callback) {
 Contact.find({},function(err,data){
   if(!err){
     console.log(data);
   }else{
     console.log(err);
   }
   callback(err,data);
 });

  // console.log(callback);
  // var contactList = [
  //   {
  //     id: 1,
  //     name: "john",
  //     mail: "a@b.com",
  //     phone: 5755
  //   }
  // ];
  // callback(false, contactList);
};

exports.getContactById = function(id, callback) {
  console.log(id);
  Contact.find({contactId:id},function(err,data){
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err,data)
  })
  // var contact = [
  //   {
  //     id: 1,
  //     name: "john",
  //     mail: "a@b.com",
  //     phone: 5755
  //   }
  // ];
  // callback(false, contact);
};

exports.updateContactById = function(id, data, callback) {
  console.log("idddddddd",id);
  contactId=data.contactId;
  name=data.name;
  email=data.email;
  phone=data.phone;
Contact.updateOne({contactId:id},data,function(err,doc){

    if(!err){
      console.log("doccccccccccc",doc);

    }else{
      console.log(err);
    }
    callback(err,doc)
  })
  // var updatedContact = [
  //   {
  //     id: 1,
  //     name: "john burg",
  //     mail: "a@b.com",
  //     phone: 5755
  //   }
  // ];
  // callback(false, updatedContact);
};

exports.deleteById = function(id, callback) {
  console.log(id);
  Contact.findOneAndDelete({contactId:id},function(err,data){
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
  })
  // var deleteContact =[{
  //     id: id,
  //     code:200,
  //     info:"contact deleted successfully"
  // }
  //       ]
  callback(err, data);
};
