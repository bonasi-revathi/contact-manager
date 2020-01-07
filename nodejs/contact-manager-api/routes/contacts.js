var express = require("express");
var router = express.Router();

var contactService = require("../services/contactService");

/* GET about listing. */
router.get("/", function(req, res, next) {
  contactService.getContacts(function(err, data) {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
  // let contacts = [{
  //     id:1,
  //     name:"revathi",
  //     phone:"57458763",
  //     email:"rev@gmail.com"
  //   }
  // ]
  //         res.json(contacts)
});
router.post("/", function(req, res, next) {
  console.log(req.body);
  contactService.createContact(req.body, function(err, data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  });
  // res.json(status);
});
router.get("/:id", function(req, res, next) {
  contactService.getContactById(req.params.id, function(err, data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  });
  //  var contact = {
  //   id:req.params.id,
  //   name:"revathi",
  //   phone:"57458763",
  //   email:"rev@gmail.com"
  //  }
  //  res.json(contact)
});
router.put("/:id", function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  contactService.updateContactById(req.params.id, req.body, function(
    err,
    data
  ) {
    if (!err) {
      console.log(data);
      contactService.getContactById(req.params.contactId,function(err,doc1){
      });
      res.json("doc1111111",doc1);
        } else {
      console.log(err);
      res.json(err);
    }
  });
  //  console.log(req.params.id);
  //  console.log(req.body);
  //  req.body.name=req.params.id;
  //  let status ={
  //    code : 200,
  //    info:"updated successfully",
  //    data:req.body
  //  }
  //  res.json(status);
});

router.delete("/:id", function(req, res, next) {
  contactService.deleteById(req.params.id, function(err,data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  });
  // console.log(req.params.id);
  // let status = {
  //   code: 200,
  //   info: "deleted successfully"
  // };
  // res.json(status);
});
module.exports = router;
