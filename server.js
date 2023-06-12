const express = require('express');
const data = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;
const TOKEN = "https://accounts.spotify.com/api/token";
let tokenGrabbed = false;
data.use(bodyParser.urlencoded({extended: true}));

  var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("SHEPFM listening at http://%s:%s", host, port);
})

data.get('/loginsuccess.html', async (req, res) => {

    //Took ages to fine but I did :)
    const token = req.query.code;
    console.log('Access Token: ' + token);
    res.redirect('http://127.0.0.1:5500/loginsuccess.html');
    getTopTracks(token);

    
});

function getTopTracks(token) {
  axios({
    method: 'GET',
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      time_range: 'short_term',
      limit: 3
    }

  })
}

