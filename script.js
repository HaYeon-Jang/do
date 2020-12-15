var now = new Date();
var then = new Date("jan 01,2021");  
var gap = then.getTime() - now.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
document.write("2020 년까지 " + gap + " 일 남았습니다!");
