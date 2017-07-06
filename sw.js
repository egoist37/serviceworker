// Code goes here

var connections = 0;

self.addEventListener("connect", function(e) {
    var port = e.ports[0];
    connections ++;
    port.addEventListener("message", function(e) {
        if (e.data === "start") {
            var ws = new WebSocket("ws://localhost:3031");
            port.postMessage("started connection: " + connections);
        }
    }, false);
    port.start();
}, false);
/////////////////////////////////////////////////////////////

self.addEventListener('push', function(event) {
  var obj = event.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    fireNotification(obj, event);
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

function fireNotification(obj, event) {
  var title = 'Subscription change';  
  var body = obj.name + ' has ' + obj.action + 'd.';
  var icon = 'push-icon.png';  
  var tag = 'push';
   
  event.waitUntil(self.registration.showNotification(title, {
    body: body,  
    icon: icon,  
    tag: tag  
  }));
}
