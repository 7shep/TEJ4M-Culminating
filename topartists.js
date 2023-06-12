const axios = require('axios');

var accessToken = 'AQAo5b9vQwK46_zhAku-AWeM9M1dTO4negGB9TZnzcKWI8muUTwgy27dHY_yi3NfZsb2AEoJfUPXVyAo0-Ki5dJ5EmqcqY1QoXv090QlLMkMgU_QS0QXDfvReT5YpVanL3yS2I5b2Aamwdo81491jGURwVNe85LVmv81_4TFPktfRl9AI7REil3-vuwVhUU6gp9QeIbPxPHzkH6RCyMJd_6fsVFyUxoFQSO5SplDLuIh4K2hel2ZwDWVlKtbB1WvUMcD1-kffcNbUsNPE4j2w7g'

function topArtists(accessToken) {
  axios({
      //GET method
      method: 'GET',
      //Tells axios to GET the info from spotify api
      url: 'https://api.spotify.com/v1/me/top/artists',
      //Headers for Access Token
      headers: {
          Authorization: `Bearer ${accessToken}`
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

topArtists(accessToken);