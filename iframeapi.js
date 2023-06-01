//Imports

var express = require('express');
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');


var client_id = 'id (put in json)';
var client_secret = 'secret (put in json)';
var redirect_uri = 'https://7shep.github.com/TEJ4M-Culminating/loginsuccess.html/';

//Called when the browser has loaded the iFrame API script - the window.onSpotifyIframeApiReady is called. 
//Signals to app the its safe to rely on the methods in the iFrame API
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: ''
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };