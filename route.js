var aws = require('aws-sdk'),
    multer = require('multer'),
    multerS3 = require('multer-s3'),
    express = require('express'),
    router = express.Router();

aws.config.update({
    secretAccessKey: process.env.AWSSecretKey,
    accessKeyId: process.env.AWSAccessKeyId,
    region: 'us-east-1'
});

var s3 = new aws.S3();

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'photo-app-aws',
        key: function(req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

//used by upload form
router.post('/', upload.array('upl', 1), function(req, res, next) {
    res.send("Uploaded!");
});

module.exports = router;
