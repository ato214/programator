function testWindowLocationObjects() {
    document.getElementById("href").innerHTML = "Page address is: " + window.location.href;
    document.getElementById("protocol").innerHTML = "Page protocol is: " + window.location.protocol;
    document.getElementById("port").innerHTML = "Page port is: " + window.location.port;
}