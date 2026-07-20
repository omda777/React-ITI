var msg = "hello everyone hello everyone blblblbllblb blblbl blbllb blbl blblb l";
var i = 0;
id = setInterval(function(){
    if (i < msg.length) {
        document.write(msg[i]);
        i++;
    }
    else{
        clearInterval(id);
    }
}, 100);