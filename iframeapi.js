//Imports

//var express = require('express');
//var request = require('request');
//var cors = require('cors');
//var querystring = require('querystring');
//var cookieParser = require('cookie-parser');
const CLIENT = require('./package.json');
//NOTE TO SELF! PUT CLIENT ID AND CLIENT SECRET IN JSON!!
var client_id = CLIENT.client_id;
var client_secret = CLIENT.client_secret;
var redirect_uri = 'https://7shep.github.com/TEJ4M-Culminating/loginsuccess.html/';

//Called when the browser has loaded the iFrame API script - the window.onSpotifyIframeApiReady is called. 
//Signals to app the its safe to rely on the methods in the iFrame API
onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('iframe');
    const options = {
        uri: ''
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };