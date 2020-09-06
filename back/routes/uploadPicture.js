
const multer= require('multer')
const express = require('express');
const router=express.Router();
const path = require('path');
// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');

router.post('/', (req, res) => {
   
    upload(req, res, (err) => {
        console.log(req.file)
       
        
        if (err) {
            res.send({ msg: err });
        } else {
            if (req.file == undefined) {
                res.send({ msg: 'Error: No File Selected!' });
            } else {
                res.send(req.file.filename)
            }
        }

    });
});
module.exports = router;