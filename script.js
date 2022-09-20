var t = 2000;
var h = document.querySelector("head");
var s = document.getElementById("sic");
var sp = document.querySelectorAll(".sp")


h.innerHTML += `<style>*{transition:padding ${t/1000}s linear, color ${t/1000}s linear ;}</style>`;

s.onmouseover = () => coso(true, 2);

sp.forEach((e,i) => cambiarColorSpan(i,e) );

function coso(b,n) {
  c = document.querySelectorAll("*");
  c.forEach( e => {
    if(b) e.style = `background-color:${rC()}; padding:${r(90)}px;`
    else e.style = ''
    });
  if (n>0) setTimeout(()=>coso(b,n-1),t) //!b para que alterne
  else if (n ==0) setTimeout(()=>coso(false,n-1),t)
}

function cambiarColorSpan(n, e) {
  console.log(e);
  var colores = ["#33cc33","#FCDD09","#fd3f3f"];
  e.style.color = colores[n%3]//rC();
  setTimeout(() => cambiarColorSpan(n+1,e), t)
}

function cambiarColorSic(n){
  var colores = ["#078930","#FCDD09","#DA121A"]
  var s = document.getElementById("sic");
  s.style.color = colores[n%3]//rC();
  setTimeout(() => cambiarColorSic(n+1), t)
}

function rC(){
  return `rgb(${r(256)},${r(256)},${r(256)})`
}

function r(n) {
  return Math.floor(Math.random()*n)
}


//cambiarColorSic(0);
