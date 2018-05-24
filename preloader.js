// aceasta functie tre sa creeze elementul preloaderului + elementul de fundal al acestuia,
// codul acestui fragment html este indicat mai jos
function showPreloader(){
  // algoritmul functiei:
  // 1) creaza un element cu clasa .backdrop
  var div = document.createElement('div');
  div.className = "backdrop";
  // 2) creaza un element cu id - #preloader
  var div_prel = document.createElement('div');
  div_prel.id = "preloader";

  //  2.b) calculeaza si seteaza style.left, si style.top pentru #preloader in asa masura
  //       incat acesta sa se pozitioneze in centrul ferestrei, ia drept reper
  //       faptul ca dimensiunile ferestrei pot fi aflate prin .innerWidth si .innerHeight
  //       dimensiunile preloader-ului sunt 50x10
  //       principiul de centrare se bazeaza pe formula  "distanta=dimensiune_parinte/2 - dimensiune_copil/2"

div_prel.style.left = window.innerWidth/2 - 25 +"px";
div_prel.style.top = window.innerHeight/2 - 5 + "px";


  // 3) include elementul #preloader in .backdrop
  div.appendChild(div_prel);
  // 4) creaza 3 elemente div si includele in #preloader

  //for(div_prel = 0 div_prel <= 3 )
  for(var i = 0; i <= 2; i++){
    var div3 = document.createElement('div');
    div3.id = `dot-${i}`;
    div_prel.appendChild(
      div3
    );
  }
  // div_prel.appendChild(
  //      document.createElement('div')
  // );
  // div_prel.appendChild(
  //      document.createElement('div')
  // );
  // div_prel.appendChild(
  //      document.createElement('div')
  // );


  // 5) include intreaga structura obtinuta in body
  document.body.appendChild(div);

}


function hidePreloader(){
  // algoritmul functiei:
  // 1) cauta elementul #preloader
  var prel = document.getElementById('preloader');
  document.body.removeChild(prel.parentElement);
  // 2) elimina-l !!! cu tot cu parinte!! (.backdrop) din body


}
// sa presupunem ca preloader-ul se va afisa imediat
window.onload = showPreloader;

// apelam functia care va ascunde preloader-ul cu 3 secunde mai tarziu, sa presupunem
// ca atat timp dureaza incarcarea continutului paginii
setTimeout( hidePreloader, 5000 );
