
function Funny1Trigger()
{
    setInterval(Funny1, 1);
    lastUpdate = Date.now();
}

var lastUpdate = Date.now();

var r = 0;
var g = 0;
var b = 0;
var dr = 13;
var dg = 17;
var db = 11;

function Funny1(){
    var now = Date.now();
    var span = now - lastUpdate;
    lastUpdate = now;
    let f = span.toFixed() * 0.01;
    if(r > 255 || r < 0)
        dr *= -1;
    if(g > 255 || g < 0)
        dg *= -1;
    if(b > 255 || b < 0)
        db *= -1;
    r += dr * f;
    g += dg * f;
    b += db * f;
    document.body.style.backgroundColor = "rgb(" + 
        r + ", " + 
        g + ", " + 
        b + ")";
    document.body.childNodes.forEach(Funny1Text);
}
function Funny1Text(element)
{
    console.log("test")
    element.style.color = "rgb(" + 
    r + ", " + 
    g + ", " + 
    b + ")";
    element.childNodes.forEach(Funny1Text);
}

const comb = [];
let len = Math.floor(Math.random() * 8) + 2;
for(var k = 0; k < len; k++)
{
    comb.push(Math.floor(Math.random() * 10).toString());
}


document.addEventListener('keydown', keyDown)

function Funny2()
{
    document.body.childNodes.forEach(abs);
    var elements = document.body.innerHTML;
    var bodyHTML = '<div class="popup" style="visibility: visible"> <div class="close button" onClick="window.location.reload(true)">&times;</div> <div id="project_view" class="popup-content">' + elements + "</div></div>";
    document.body.innerHTML = bodyHTML;

}

function abs(element)
{
    element.className = "lol";
    element.childNodes.forEach(abs);
}

var current = 0;
function keyDown(e)
{
    if(e.key == comb[current]){
        if(current == 0)
            document.body.innerHTML += '<div id="funny2"></div>';
        current += 1;
        if(current >= comb.length){
            document.body.removeChild(document.getElementById("funny2"))
            Funny2();
        }
        else{
            document.getElementById("funny2").innerHTML = (comb.length - current).toString();
        }
    }
    else if(current > 0)
    {
        current = 0;
        document.body.removeChild(document.getElementById("funny2"))
    }
}