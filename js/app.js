function getJSON(url){
  return new Promise(function(resolve, reject){

    var ajax = new XMLHttpRequest();
    // var url = "data/earth-like-results.json"
    ajax.open("GET", url);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200){
        resolve(JSON.parse(ajax.responseText));
        // console.log(JSON.parse(ajax.responseText));
      }
    }

  });
}

var urlPlanetas = "data/earth-like-results.json";
  getJSON(urlPlanetas)
  .then(function(mensaje){
    mostrarTitulo(mensaje)
    return getJSON(mensaje.results.forEach(function(planeta){
      // console.log(planeta)
      getJSON(planeta)
      .then(function(resultado){
        // console.log(resultado);
        mostrarDatos(resultado)
      })

    }));
  }
  )

function mostrarTitulo(titulo){
  console.log(titulo);
  var contenedorPlanetas = document.getElementById('contenedorPlanetas');
  var h4 = document.createElement("h4");
  h4.innerText = "query: "+titulo.query;
  contenedorPlanetas.appendChild(h4);


}

function mostrarDatos(planeta){
  var nombrePlaneta =planeta.pl_name.replace(/ /gi,"-");
  // console.log(nombrePlaneta);
  var contenedorPlanetas = document.getElementById('contenedorPlanetas');
  var contenedorPlaneta = document.createElement("div");
  var cardImage = document.createElement("div");
  var cardContent = document.createElement("div");
  var cardReveal = document.createElement("div");
  var tituloPlaneta = document.createElement("span");
  var tituloPlanetaCardReveal = document.createElement("span");
  var iconoPuntos = document.createElement("i");
  var iconoClose = document.createElement("i");
  var densidad = document.createElement("p");
  var descripcion = document.createElement("p");
  var imagenPlaneta = document.createElement("img");

  imagenPlaneta.src = "assets/img/"+nombrePlaneta+".jpg";
  tituloPlaneta.innerText = planeta.pl_name;
  tituloPlanetaCardReveal.innerText = planeta.pl_name;
  densidad.innerText = planeta.dec;
  descripcion.innerText = "Discovered in "+ planeta.pl_disc + " with "+planeta.pl_telescope;
  iconoPuntos.innerText = "more_vert"
  iconoClose.innerText = "close"

  imagenPlaneta.className = "activator";
  cardImage.className = "card-image waves-effect waves-block waves-light"
  cardContent.className = "card-content";
  contenedorPlaneta.className = "card"
  iconoPuntos.className = "material-icons right";
  iconoClose.className = "material-icons right";
  tituloPlaneta.className = "card-title activator grey-text text-darken-4";
  tituloPlanetaCardReveal.className = "card-title grey-text text-darken-4";
  cardReveal.className = "card-reveal";

  cardImage.appendChild(imagenPlaneta);
  cardContent.appendChild(tituloPlaneta);
  tituloPlaneta.appendChild(iconoPuntos);
  tituloPlanetaCardReveal.appendChild(iconoClose);
  cardReveal.appendChild(tituloPlanetaCardReveal);
  cardReveal.appendChild(densidad);
  cardReveal.appendChild(descripcion);
  contenedorPlaneta.appendChild(cardImage);
  contenedorPlaneta.appendChild(cardContent);
  contenedorPlaneta.appendChild(cardReveal);
  contenedorPlanetas.appendChild(contenedorPlaneta);
}
