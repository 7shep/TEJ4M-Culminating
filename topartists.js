const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;

//Filler for now (just my account, in the future this will be anyones account)
var access_token = "BQDYDAl3RN1LCNPqK9mlGSGmmQ-UK7RMHfqW7-cs-DI5q526iAVPW04EI07KrpbqI5xAHGGT1InaVATOx9zUAQMNVyuptB2aIikjo7j1ZIoY_fUVxEGLasx5SEkZJM7yB2AzXuaAv3SvZVSUoh4vF0eo0s4v6LxMD-oYNWCB75O8PLjpwhPLbGndHOJqN3tTVtVkRk_b7Al23TkI";

axios({
    //GET method
    method: 'GET',
    //Tells axios to GET the info from spotify api
    url: 'https://api.spotify.com/v1/me/top/artists',
    //Headers for Access Token
    headers: {
        Authorization: `Bearer ${access_token}`
    },
    //Parameters for what to grab, short term is last 4 weeks, medium term is last 6 months, limit is limit of artists
    params: {
        time_range: 'medium_term',
        limit: 5
    }
})
    .then(response => {
        const topArtists = response.data.items;
        console.log(topArtists);
    }) .catch(error => {
        console.error(error);
    });
