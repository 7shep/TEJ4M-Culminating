const express = require('express');
const data = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;
const redirecturi = 'http://127.0.0.1:5500/loginsuccess.html';
const querystring = require('querystring');
const cors = require('cors');
const cookieParser = require('cookie-parser');


data.use(bodyParser.urlencoded({
  extended: true
}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("SHEPFM listening at http://%s:%s", host, port);
})
/*
data.get('/loginsuccess.html', async (req, res) => {
  let state = generateRandomString(16);
  res.cookie(stateKey, state); // set cookie to travel with request

  // request authorization - automatically redirects to callback
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
          response_type: 'code',
          client_id: clientid,
          scope: scope,
          redirect_uri: redirecturi,
          state: state
      }));
}); */

data.get('/loginsuccess.html', (req, res) => {

  res.redirect('http://127.0.0.1:5500/loginsuccess.html');
  getToken();
  const token = data.acesss_token;
  //getTopArtists(token);
});



async function getToken() {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientid + ':' + clientsecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  console.log(data.access_token);
}

async function getTopArtists(token) {
  try {
    const response = await axios({
      url: 'https://api.spotify.com/v1/me/top/artists',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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