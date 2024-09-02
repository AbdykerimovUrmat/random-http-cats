var express = require('express');
const fs = require('node:fs')
const path = require('path')

var router = express.Router();

console.log(__dirname)
const httpStatusCodes = [
  100,101,102,103,200,201,202,203,204,205,206,207,208,300,301,302,303,304,305,308,400,401,403,404,405,406,408,409,410,412,413,414,417,418,421,425,426,428,429,451,502,503,506,508,510,511
]

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var item = httpStatusCodes[Math.floor(Math.random()*httpStatusCodes.length)];
    console.log("reading image")
  
    const data = fs.readFileSync(path.resolve(__dirname, `../cat_images/${item}.jpg`), null);
    
    res.setHeader('Content-Type', 'image/jpeg');
          
    res.send(data);
  } 
  catch(e) {
    console.log(e)
  }
});

module.exports = router;
