console.log('Service worker set up');

self.addEventListener("push", function (event) {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }

  var data = {};

  if (event.data) {
    data = event.data.json();
  }
  var title = data.notification.title || "Date Painter";
  var message = data.notification.body || "An update happened.";

  self.registration.showNotification(title, {
    body: message,
    tag: "simple-push-demo-notification",
    data: {
      url: 'https://datepainter.com/' + title + '?results'
    }
  });
});

self.addEventListener('notificationclick', function(event) {
  let match = event.notification.data.url.replace('https://datepainter.com/', '').replace('?results', '');
  event.notification.close();

  event.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
    // If a Window tab matching the targeted URL already exists, focus that;
    const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url.includes(match) ? (windowClient.focus(), true) : false);

    // Otherwise, open a new tab to the applicable URL and focus it.
    if (!hadWindowToFocus) clients.openWindow(event.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
  }));
})
