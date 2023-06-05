//Imports

const CLIENT = require('./package.json');
var client_id = CLIENT.client_id;
var client_secret = CLIENT.client_secret;
var redirect_uri = 'http://localhost:3000/callback';

/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express');
var bodyParser = require('body-parser')
const data = express();

data.use(bodyParser.urlencoded({extended: true}));

  var server = data.listen(3500, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port);
})

//When Submit is Clicked!
data.post('/spotify-login', () => {
  console.log('here');
});



