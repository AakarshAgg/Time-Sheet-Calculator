function myClick() {
    let sum1=0;
    let sum2=0;
    for( k=1;k<=7;k++)
    {
        var a=`a${k}`
        var b=`b${k}`
        var c=`c${k}`
        var d=`d${k}`
        var e=`e${k}`
        var f=`f${k}`
        var g=`g${k}`
        var h=`h${k}`
        var ii=`i${k}`
       // console.log(pp)
    let x = parseInt(document.getElementById(String(a)).value)
    //console.log("x",x)
    //console.log(typeof(x))
    let y = parseInt(document.getElementById(String(b)).value)
    console.log("y",y)
    let z = document.getElementById(String(c)).value
    //console.log(z)
    let u = parseInt(document.getElementById(String(d)).value)
    console.log("u1",u)
    let v = parseInt(document.getElementById(String(e)).value)
    let w = document.getElementById(String(f)).value
   console.log(w)
   console.log(typeof(w))
    let r =parseInt( document.getElementById(String(g)).value)
    let s =parseInt( document.getElementById(String(h)).value)
    console.log("x,y,z",x,y,z,u,v,w,r,s)
 if (z == "pm") {
    x = x + 12;
}
if (w == "pm") {
    u = u + 12
}
console.log("u2",u)
var p=x*60+y
var q=u*60+v
console.log("p",p)
var i=Math.max(p,q)
var j=Math.min(p,q)
var e=r*60+s
var t=i-j-e
var g=parseInt(t/60)
var h=t%60
console.log("i,j,k,l",i,j,e,t,g,h)
if(h<=10){
    document.getElementById(String(ii)).innerHTML=g+":"+"0"+h
}else{
document.getElementById(String(ii)).innerHTML=g+":"+h
}
sum1=sum1+g;
sum2=sum2+h
if(sum2>=60){
    sum1=sum1+parseInt(sum2/60);
    sum2=(sum2%60)
}
}
console.log(k)
//console.log(x,u)
if(sum2<=10){
document.getElementById("tt").innerHTML=sum1+":"+"0"+sum2}
else{
    document.getElementById("tt").innerHTML=sum1+":"+sum2
}
    //console.log(p,q)
}

function myReset(){
    document.getElementById("res").reset();
    let sum1=0;
    let sum2=0;
    for( k=1;k<=7;k++)
    {
        var a=`a${k}`
        var b=`b${k}`
        var c=`c${k}`
        var d=`d${k}`
        var e=`e${k}`
        var f=`f${k}`
        var g=`g${k}`
        var h=`h${k}`
        var ii=`i${k}`
    let x = parseInt(document.getElementById(String(a)).value)
    let y = parseInt(document.getElementById(String(b)).value)
    let z = document.getElementById(String(c)).value
    let u = parseInt(document.getElementById(String(d)).value)
    let v = parseInt(document.getElementById(String(e)).value)
    let w = document.getElementById(String(f)).value
    let r = parseInt(document.getElementById(String(g)).value)
    let s = parseInt(document.getElementById(String(h)).value)
 if (z == "pm") {
    x = x + 12;
}
if (w == "pm") {
    u = u + 12
}
var p=x*60+y
var q=u*60+v
var i=Math.max(p,q)
var j=Math.min(p,q)
var e=r*60+s
var t=i-j-e
var g=parseInt(t/60)
var h=t%60
document.getElementById(String(ii)).innerHTML=g+":"+h+"0"
sum1=sum1+g;
sum2=sum2+h
}
console.log(k)
document.getElementById("tt").innerHTML=sum1+":"+sum2+"0"
}