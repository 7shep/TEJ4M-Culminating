const express = require('express');
const data = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;

data.use(bodyParser.urlencoded({
  extended: true
}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("SHEPFM listening at http://%s:%s", host, port);
})

data.get('/loginsuccess.html', async (req, res) => {

  //Took ages to fine but I did :)
  axios.post('https://accounts.spotify.com/api/token', null, {
      headers: {
        Authorization: 'Basic ' + Buffer.from(clientid + ":" + clientsecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    }).then(tokenResponse => {
      const token = tokenResponse.data.access_token;
      console.log(token);

      return getTopTracks(token);
    })
    .catch(error => {
      console.error(error);
    });


  //console.log('Access Token: ' + token);
  res.redirect('http://127.0.0.1:5500/loginsuccess.html');



});

async function getTopTracks(token) {
  const response = await axios.get(
    'https://api.spotify.com/v1/me/top/artists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        time_range: 'short_term',
        limit: '3'
      },
      data: 'grant_type=client_top_artists'
    }
  ).then(response => {
    const topTracks = response.body;
    console.log(topTracks);
  }).catch(error => {
    console.error(error);
  });
}