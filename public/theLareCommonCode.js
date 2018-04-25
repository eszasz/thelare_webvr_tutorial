var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: 'https://www.flickr.com/photos/kanalu/19822512891', 
  is_stereo: true,
});

window.addEventListener('load', drawingRoom);

window.addEventListener('load', boxRoomTemplate);
