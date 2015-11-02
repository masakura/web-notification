(function () {
  'use strict';

  var registration;

  navigator.serviceWorker.register('workers/sw.js')
    .then(function (registration_) {
      registration = registration_;
    });

  $(document).on('click', '#notify', function () {
    Notification.requestPermission(function (result) {
      console.assert(result === 'granted', result);
      registration.showNotification('Hogehoge', {
        body: 'Buzz!',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample'
      });
    });
  });
})();
