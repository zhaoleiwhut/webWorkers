var worker = new Worker('./webWorkers.js');
worker.addEventListener('message', function(event){
    console.log('Receiving from Worker: '+event.data);
    $('#prime').html( event.data );
});
$(worker).on('message',function (event) {
    
});
 
worker.onmessage = function(event) {
    console.log(event.data);
};
console.log('app 主线程中');
worker.postMessage(10000000);
 
//如果在主线程中执行如下代码浏览器会卡死
// var c = 10000000;
// while (c-- > 0) {
//     var a = 'saf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf';
//     var b = a.split('a');
// }
// console.log('执行完毕');