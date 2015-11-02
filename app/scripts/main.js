(function () {
  'use strict';

  var registration;

  navigator.serviceWorker.register('workers/sw.js')
    .then(function (registration_) {
      registration = registration_;
    });

  $(document).on('click', '#notify', function () {
    Notification.requestPermission(function (result) {
      registration.showNotification('Hogehoge');
    });
  });
})();
