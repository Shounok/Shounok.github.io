/*
window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQBtzXo5PyAdKb68F4hdRImflgRN3MQBr2gN-WdeC1lmXAqvhLecYhovt06HVYYocdvp9uLWMKzF9hBh5eZevyYpTdCeUY_x_2NiBV_qHfO8NyfcdlFWT38yriwHhp_TdHet42YJm1Db6j8n6H05btwJqKEJEwgfU8mlF3EGriaFqNlhvnuYh-o";
  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  player.addListener('initialization_error', ({ message }) => { 
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);
});

player.connect();

document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };
  
};
*/