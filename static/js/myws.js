// -----------------ws api -----------------------------
// 1、提供接口myws_start(url)，简单启动ws。
// 2、提供接口myws_send(data), 发送数据。
// 3、支持自动重连,重连间隔5000ms。
 
//可以在外部实现这几个方法，以便监听ws事件
//function myws_onopen() {};
//function myws_onmessage() {};
//function myws_onerror() {};
//function myws_onclose() {};
 
// =================以下提供对外使用接口==================
 
// 供外部启动ws，只需调用一次
function myws_start(url) {
    myws_start_init(url);
}
 
// 供外部发送数据。
function myws_send(data) {
    myws_send_data(data);
}
 
 
// =================以下代码，外部不需要关注==================
// =================以下代码，外部不需要关注==================
var url = "http://www.xigua77.xyz"
var ws_url = "ws://" + "www.xigua77.xyz:9002";

//var url = "http://127.0.0.1"
//var ws_url = "ws://" + "127.0.0.1:9002";

var myws = null;
var myws_url_0 = "";
var myws_init = false;
var myws_isok = false;
var myws_reconnect_interval_ms = 60*1000;
var myws_isneedreconnect = false;
 
var myws_onopen = null;
var myws_onmessage = null;
var myws_onerror = null;
var myws_onclose = null;
 



// 启动ws，只需调用一次
function myws_start_init(url) {
    if (true == myws_init) {
        console.log("no need to repeat start..");
        return;
    }
    myws_init = true;
    myws_url_0 = url;
    myws_connect();
}
 
// 供外部发送数据。
function myws_send_data(data) {
    if( true == myws_isok ) {
        myws.send(data);
    } else {
        console.log("websocket is not ok..");
    }
}
 
// 连接
function myws_connect() {
    if ("WebSocket" in window) {
       console.log("您的浏览器支持 WebSocket!"); 
       // 打开一个 web socket
       myws = new WebSocket(myws_url_0);
       myws.onopen = function() {
            console.log(myws_url_0+"连接成功..."); 
            if (null != myws_onopen) myws_onopen();
       };
       myws.onmessage  = function(evt) {
            if (null != myws_onmessage) myws_onmessage(evt);
       };
       myws.onerror = function() {
            console.log("连接错误..."); 
            if (null != myws_onerror) myws_onerror();
            myws_isok = false;
            myws_isneedreconnect = true;
       };
       myws.onclose = function() {
            console.log("连接已关闭..."); 
            if (null != myws_onclose) myws_onclose();
            myws_isok = false;
            myws_isneedreconnect = true;
       };
       myws_isok = true;
    } else {
       // 浏览器不支持 WebSocket
       console.log("您的浏览器不支持 WebSocket!");
    }
}
 
function myws_reconnect() {
    myws_connect();
}
 
function myws_checkconnect() {
    if (false == myws_isok && true == myws_isneedreconnect) {
        myws_isneedreconnect = false;
        console.log("准备自动重连..."); 
        myws_reconnect();
    }
}
 
setInterval(function(){
console.log("发送心跳..."); 
    myws.send("ping");    
myws_checkconnect();
}, myws_reconnect_interval_ms);
 