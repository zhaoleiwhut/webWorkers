'user strict';

self.addEventListener('message', function (event) {
    if (event.data === 'error') {
        self.close(); // 终结自身线程
        throw 'user exception';
    }
    setInterval(function () {
        let dt = new Date();
        postMessage(dt.toString());
    }, 500);
});
