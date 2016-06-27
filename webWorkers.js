console.log('web worker start ');
onmessage = function(event) {
    console.log('web worker onmessage:', event.data);
    var c = event.data,
        a, b;
    while (c-- > 0) {
        a = 'saf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf' + 'asf';
        b = a.split('a');
    }
    postMessage('执行完毕');
    // setTimeout(function() {
    //     postMessage(event.data * 2);
    // }, 2000);
};
