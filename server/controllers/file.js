const messages =  require("../utility/Messages");
const Response = require('../utility/Response');
var path = require('path')
const multer = require('multer');
const fs = require('fs');


const folder = './public/uploads/'
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, folder)
    },
    filename: (req, file, cb) => {
        console.log('dile',file)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    console.log('file',file)
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//will be using this for uplading
const upload = multer({ storage: storage,fileFilter: fileFilter }).single("file")

exports.postFile = function (req, res) { 
    // console.log('hello',req.files)
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        console.log('req.file',req.file)
        if(err) { 
            res.status(400).send(err) 
        } 
        else { 
            // SUCCESS, image successfully uploaded 
            res.json({"msg":"Success, Image uploaded!"}) 
        } 
    })
};


exports.getFiles = function (req, res) { 
   let arr =  fs.readdirSync(folder, (err, files) => {
        var fileArr = []
        files.map(file => {
          fileArr.push(file)
        });
        return fileArr
      });
      if(arr.length > 0){
        res.send({'fileArr': arr.reverse()})
      }
      else{
        res.send({'fileArr': []})
      }
      
}

exports.removeFile = function (req, res) {
    let fileName = req.body.fileName
    console.log('rqq',req.body)
    let path =  './public/uploads/' + fileName
    fs.unlink(path, (err) => {
        if (err) {
          console.error(err)
          res.status(400).send({'msg':'File Doesnt exist'})
        }
      res.send({'msg':'File Unlinked Successfully'})
      })
 }
 

