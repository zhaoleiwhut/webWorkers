'user strict';
// 专用线程（dedicated worker）
var worker = new Worker('./webWorkers.js');

// event对象包含两个重要属性：
//     target：用来指向发送信息的worker，在多worker环境下比较有用。
//     data：由worker发回给父线程的数据
worker.addEventListener('message', function (event) {
    $('#rst').html(event.data);
});

// 处理web worker抛出的异常
worker.addEventListener('error', function (error) {
    console.log(error);
    $('#rst').html('Error: ' + error.filename);
});

// web worker在后台运行时，先在worker端序列化，然后在接收端反序列化
// 因此不推荐向worker发送大量的数据。
$('#btn').on('click', function () {
    worker.postMessage('btn');
});

// 创建web worker对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止
// 在父线程使用terminate()方法终止web worker并释放浏览器/计算机资源
$('#btn2').on('click', function () {
    worker.terminate();
});
$('#btn3').on('click', function () {
    worker.postMessage('error');
});
