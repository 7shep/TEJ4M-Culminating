const axios = require('axios');
const CLIENT = require('./package.json');
const clientid = CLIENT.client_id;
const clientsecret = CLIENT.client_secret;
const TOKEN = "https://accounts.spotify.com/api/token";


//Filler for now (just my account, in the future this will be anyones account)
var access_token = "BQBAqMrmuJMkoNPcCNb9YhNRlZc57OQwGvbr8SMD91daZDB9k6yP2dG6l3IMSw2QAyOAvMHwN6JsDh1lBhi5WiiGyp7F5x6Xh7tkY3H0q03wjy-9vgQhULlE7INTNrvLMaDQJQXMY3V9SY5bFI7CrHxRtLsHoVQ-yV1QY6b6hByPedGW6S5kjDxZlGfX7xv_BuELlu7IWvuguk3i";

function topArtists(access_token) {
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
            limit: 3
        }
    })
        .then(response => {
            const topArtists = response.data.items;
            console.log(topArtists);
        }) .catch(error => {
            console.error(error);
        });
}

topArtists(access_token);

