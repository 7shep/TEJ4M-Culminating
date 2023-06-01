
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