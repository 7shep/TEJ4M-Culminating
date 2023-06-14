const express = require('express');
const data = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;
const redirecturi = 'http://127.0.0.1:5500/loginsuccess';
data.use(bodyParser.urlencoded({
  extended: true
}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("SHEPFM listening at http://%s:%s", host, port);
})

data.get('/loginsuccess.html', async (req, res) => {
  var accessToken = req.query.code;
  
  axios.post('https://api.spotify.com/api/token', {
    form: {
      code: accessToken,
      redirect_uri: redirecturi,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(clientid + ':' + clientsecret).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    json: true
    })

  //await getTopArtists(accessToken);
 
});

async function getTopArtists(accessToken) {
  try {
    const response = await axios({
      url: 'https://api.spotify.com/v1/me/top/artists',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        time_range: 'short_term',
        limit: '3'
      }
    });

    const topArtists = response.data;
    console.log(topArtists);
  } catch (error) {
    console.error(error);
  }
}