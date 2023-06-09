const express = require('express');
const data = express();
const bodyParser = require('body-parser');


data.use(bodyParser.urlencoded({extended: true}));

  var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("SHEPFM listening at http://%s:%s", host, port);
})

data.get('/loginsuccess.html', async (req, res) => {
    console.log('here');
    res.redirect('http://127.0.0.1:5500/loginsuccess.html');

    const { currentURL } = req.body;
    console.log(currentURL);
    res.json({message: "URL Recieved"});


});

