var express = require('express');
var router = express.Router();
var Flickr = require('flickr-sdk');

var flickr = new Flickr('044eacd6061028f8e170c51965505f89');

router.get('/', function(req, res, next) {
    req.getPh = flickr.photos.getRecent({
        user_id: '160521247@N08',
        per_page: 20,
        page: 1
    })
        .then(function (result) {
            res.send(result);
        }).catch(function (err) {
            console.error('uups! ', err);
        });
});

module.exports = router;
