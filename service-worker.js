var socket = new WebSocket("ws://localhost:3031");
socket.onopen = function () {
    console.log("Соединение установлено.");
};
socket.onmessage = function (event) {
    console.log("Получены данные " + event.data);
    alert("Получены данные " + event.data);
    new Notification('твою ж мать, работый!', {
        body: 'Тестирование WEBPUSH Notifications'
    });
};