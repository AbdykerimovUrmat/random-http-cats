var express = require('express');
const axios = require('axios');

var router = express.Router();

const httpStatusCodes = [
  "100", "101", "102", "103",
  "200", "201", "202", "203", "204", "205", "206", "207", "208", "226",
  "300", "301", "302", "303", "304", "305", "306", "307", "308",
  "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410",
  "411", "412", "413", "414", "415", "416", "417", "418", "421", "422", "423", 
  "424", "425", "426", "428", "429", "431", "451",
  "500", "501", "502", "503", "504", "505", "506", "507", "508", "510", "511"
]
/* GET home page. */
router.get('/', async function(req, res, next) {
  var item = httpStatusCodes[Math.floor(Math.random()*httpStatusCodes.length)];
  const imageUrl = `https://http.cat/${item}.jpg`; // Hardcoded cat image URL
  console.log("reading image")
  axios
    .get(imageUrl, {
      responseType: 'arraybuffer'
    })
    .then((response) => {
      // Set the content type to image/jpeg (or png, depending on the image type)
      res.setHeader('Content-Type', 'image/jpeg');
            
      // Send the image data as the response
      res.send(response.data);
    })
});

module.exports = router;
