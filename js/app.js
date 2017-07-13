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
    console.log(mensaje);
    return getJSON(mensaje.results.forEach(function(planeta){
      console.log(planeta)
      getJSON(planeta)
      .then(function(resultado){
        console.log(resultado);
        mostrarDatos(resultado)
      })

    }));
    }
  )

function mostrarDatos(planeta){
  var contenedorPlanetas = document.getElementById('contenedorPlanetas');
  var contenedorPlaneta = document.createElement("div");
  var nombrePlaneta = document.createElement("h3");
  var densidad = document.createElement("p");
  var descripcion = document.createElement("p");

  nombrePlaneta.innerText = planeta.pl_name;
  densidad.innerText = planeta.dec;
  descripcion.innerText = "Discovered in "+ planeta.pl_disc + " with "+planeta.pl_telescope;

  contenedorPlaneta.appendChild(nombrePlaneta);
  contenedorPlaneta.appendChild(densidad);
  contenedorPlaneta.appendChild(descripcion);
  contenedorPlanetas.appendChild(contenedorPlaneta);
}
