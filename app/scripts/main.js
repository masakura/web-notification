(function () {
  'use strict';

  navigator.serviceWorker.register('scripts/sw.js');

  Notification.requestPermission(function (status) {
    Notification.status = status;
  });

  $(document).on('click', '#notify', function () {
    console.log(self.registration);
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification('hogehoge');
    });
  });
})();
