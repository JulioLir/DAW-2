/* ---------------------------------------
Pon aquí tu nombre y apellido, por favor.

JULIO LIROLA DEL AGUILA

------------------------------------------*/


/*
* Se pueden utilizar los formatos de las correspondientes resultados de los diferentes pasos.
* Se encuentran en datos.js y, en cada paso pertinente, se indica la variable correspondiente
* Si se utiliza alguna de esas variables, en el apartado correspondiente a su generación,
* se tendrá un 0
*/


/*
++ salida en la variable salP1 de datos.js 
*/
const arrFinal = arrayTabla();
const tablaInicial = crearTablaHTML(arrFinal);
document.body.appendChild(tablaInicial);
function arrayTabla(){
  const arrObjs = tratarDatosEntrada(datos,'\n',';');
  const array30Nov = filtarPorFecha(arrObjs,'date', new Date('2023-11-05'));
  const arrayIncidencias = realizarTablaIncidencias(array30Nov);
  const camposTabla = ['ine_code','ccaa', 'ia7d','ia14d'];
  return objetosConCampos(array30Nov,camposTabla);
}

function tratarDatosEntrada(cadena, sepLinea, sepCampos) {

  const arrDatos = csvAArray();
  const cabecera = sacarCabecera()
  return arrayAObj(); 

  function csvAArray(){
    return cadena.split(sepLinea).filter(e=>e.trim()).map(e=>e.trim().split(sepCampos).map(e=>e.trim()));
  }
  
  function sacarCabecera(){
    return arrDatos.shift();
  }
  function arrayAObj(){
    return arrDatos.map(e=> e.reduce((acc,e,i)=>{
      acc[cabecera[i]] = e;
      return acc;
    },{}))
  }
}
function aObjeto(array,nomCampos) {
  return 
}


/*
++ salida en la variable salP3 
*/
function filtarPorFecha(array, campo, fecha) {
  return array.filter(e=>new Date(e[campo]).valueOf() == fecha.valueOf());
}



function objetosConCampos(arrayObj, campos) {
  return arrayObj.map(obj=>{
    return campos.reduce((acc,prop)=>{
      acc[prop] = obj[prop]
      return acc;
    },{})
  });
}


/*
++ salida en la variable salP5 
*/
function realizarTablaIncidencias(arrayObj) {
  // Las fórmulas son:


  // Para 7 días
  // Si hay un valor en cases_PCR_7days, utilizarlo. Si no, utilizar el valor de cases_7days
  // La incidencia se calcula con el valor anterior dividido entre la población y multiplicado por 1000000

  // Para 14 días
  // Si hay un valor en cases_PCR_14days, utilizarlo. Si no, utilizar el valor de cases_14days
  // La incidencia se calcula con el valor anterior dividido entre la población y multiplicado por 1000000

  return arrayObj.map(e=>{

    e.ia7d = (((e.cases_PCR_7days || e.cases_7days) / e.poblacion) * 100000).toFixed(1);
    e.ia14d = (((e.cases_PCR_14days || e.cases_14days) / e.poblacion) * 100000).toFixed(1);
    return e;
  });
}


function crearTablaHTML(arrayObj) {

  const tabla = crearNodo('table');
  const caption = crearNodo('caption','Incidencias al 30/11');
  tabla.appendChild(caption);
  const thead = crearThead();
  tabla.appendChild(thead);
  const tbody = crearTbody();
  tabla.appendChild(tbody);
  const tfoot = crearTfoot();
  tabla.appendChild(tfoot);
  return tabla;

  function crearThead(){
    const thead = crearNodo('thead');
    const tr = crearNodo('tr');
    for(prop in arrayObj[0]){
      const th = crearNodo('th',prop);
      th.addEventListener('click',pulsado)
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
  }

  function crearTbody(){
    return arrayObj.reduce((acc,obj)=>{
      const tr = crearNodo('tr');
      for(prop in obj){
        let td;
        if(prop == 'ia7d'||prop == 'ia14d')
          td = crearNodo('td',sustituirPunto(obj[prop]));
        else
          td = crearNodo('td', obj[prop]);
        tr.appendChild(td);
      }
      acc.appendChild(tr);
      return acc;
    }, crearNodo('tbody'));
  }

  function crearTfoot(){
    const tfoot = crearNodo('tfoot');
    const tr = crearNodo('tr');
    let tdVacia = crearNodo('td');
    tr.appendChild(tdVacia);
    tdVacia = crearNodo('td');
    tr.appendChild(tdVacia);
    const tdMedia7 = crearNodo('td',media('ia7d'));
    tr.appendChild(tdMedia7);
    const tdMedia14 = crearNodo('td', media('ia14d'));
    tr.appendChild(tdMedia14);
    tfoot.appendChild(tr);
    return tfoot;

  }

  function sustituirPunto(valor){
    valor = valor +"";
    return valor.slice(0,valor.length - 2) + "," + valor.slice(valor.length - 1);

  }
  function media(prop){
    return (arrayObj.reduce((acc,obj)=>{
      return ((acc + Number(obj[prop]))/arrayObj.length);
    }, 0)).toFixed(1);
  }
/*
  table
    caption 
    thead
      tr
        th
    tbody
      tr
        td
    tfoot
      tr
        td
*/
function crearNodo(elemento, contenido){
  const nodo = document.createElement(elemento);
  contenido&&nodo.appendChild(document.createTextNode(contenido));
  return nodo;
}

}
function ordenarAASCI(arr){
  arr.sort((a,b)=>{
    return (a.toLowerCase() < b.toLowerCase() && 1)||(a.toLowerCase() > b.toLowerCase() && -1)||0;
  })
}
function pulsado(evt){
  const elem = evt.currentTarger;
  const valor = elem.innerText;
  ordenarAASCI(arrayObj);
  remplazarTabla(arrayObj);
}
function remplazarTabla(arrObjs){
  const tabla = crearTablaHTML(arrObjs);
  document.body.removeChild(document.body.firstElementChild());
  document.body.insertBefore(tabla,document.querySelector('#app'), tabla);
}

