Notification.requestPermission(function (permission) {
// Если права успешно получены, отправляем уведомление
if (permission === "granted") {
 var socket = new WebSocket("ws://localhost:3031");
socket.onopen = function() {
  console.log("Соединение установлено.");
};
socket.onmessage = function(event) {
  console.log("Получены данные " + event.data);
new Notification('твою ж мать, работый!', {
body: 'Тестирование WEBPUSH Notifications',
icon: 'icon.jpg',
dir: 'auto'
});
};
} else {
alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
}
});
