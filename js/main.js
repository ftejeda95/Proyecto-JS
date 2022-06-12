/*El presente proyecto consta de crear una pagina web que determine soluciones lo mas precisas posibles dada una cantidad de condiciones a cumplir,
las cuales an sido predeterminadas previamente. ademas calcularan montos de pagos de tarjetas por consumos en dolares, se estimara el interes
por falta de pago de una tarjeta de credito dado los dias y el monto que no hemos abonado y comparar dicho resultado con opciones de financiacion.
se abarcaran por el momento 4 productos, Tarjeta de Credito, Tarjeta de Debito, Banca Digital e Inversiones.*/

//PRESENTACION Y SEGMENTACION INPUTS

import {iniciales,poseeToken,tokenTransf,sinToken,validarFormulario,whatOption,whatProduct,respClick,respClickHelp,html,error,crearTarjeta,repeatEvent,hb,tc,DateTime,crearSeguro,enviarSolicitud,borrarSimulacion,TNA,determinarCuota,sumaFecha} from "./module.js"
import {listaProductos, indexHB, indexTC, dolarTC, planV, opcClaves, opcTransf, opcToken, opcPago,indices} from "./module.js"

let names = document.querySelector("#nombre")

let age = document.querySelector("#edad")

let sueldo = document.querySelector("#sueldo")

let td = document.querySelector("#poseeTd")

let formSaludo= document.getElementById("formSaludo");
formSaludo.addEventListener("submit", validarFormulario);
formSaludo.addEventListener("submit",function (){


//SALUDO PERSONALIZADO
    let saludoH6= document.getElementById("presetacion")
    let saludopers = document.createElement("h5")
    saludopers.innerHTML= `Bienvenido ${names.value.toUpperCase()} en esta seccion lo instruiremos en las consultas que desea realizar.`
    saludopers.className = "secondTitlePers"
    saludoH6.appendChild(saludopers)
})

//DEFINICION DE ARRAYS CLIENTE
formSaludo.addEventListener("submit",function (){

    const cliente = []

//DEFINICION DE TIPOLOGIA DE CLIENTES//PLAN SUELDO//MERCADO ABIERTO//JOVEN

class TypeClientes{
    constructor(nombre, edad, ps){
        this.nombre = nombre.toUpperCase();
        this.edad = Number(edad);
        this.ps = ps.toUpperCase();
        this.segmento = "Plan Sueldo";
    }
    tipo(){
        if(this.edad >= 65 && this.ps == "SI"){this.segmento = "Jubilado"}
        else if(this.edad < 65 && this.edad >= 30 &&  this.ps == "SI"){ this.segmento = "Plan Sueldo"}
        else if(this.edad < 30 && this.edad >= 18 &&  this.ps == "SI"){ this.segmento = "Plan Sueldo Joven"}
        else if(this.ps == "NO"){ this.segmento = "Mercado Abierto"}
        else if(this.edad < 18){this.segmento = "Menor de Edad"}

     } 
}

const segmentoCliente= new TypeClientes(names.value,age.value,sueldo.value)
segmentoCliente.tipo()
cliente.push(segmentoCliente)

//REFLEJO DE SEGMENTACION EN HTML CLIENTE


 
    let segmentacion = document.getElementById("presetacion")
    let presentacionSeg = document.createElement("div")
    //IMPRIMIR CLIENTES EN HTML
    presentacionSeg.innerHTML = `<div id="present"><p> Segun lo informado vamos a segmentar el procedimiento dadas las caracteristicas ingresadas</p><ul><li> Edad: ${age.value} </li><li> Cobra el sueldo: ${sueldo.value.toUpperCase()}</li> <li> Segmento: ${segmentoCliente.segmento}</li></ul>
    <button type="" class="btn btn-primary" id="reset" >Modificar</button>
    </div> `
    presentacionSeg.className= "presentacionSeg col-12"
    segmentacion.appendChild(presentacionSeg)
    console.log(segmentoCliente)
    //cargar datos en LOCALSTORAGE
    let clientesLocal = JSON.stringify(cliente)
    console.log(clientesLocal)
    localStorage.setItem("cliente1", clientesLocal)
    td={poseeTD:`${td.value}`}
    let valorTD= JSON.stringify(td)
    localStorage.setItem("poseeTD",valorTD)
    //PRUEBA DE LOCALSOTAGE
    let pruebaLocal= JSON.parse(localStorage.getItem("cliente1"))
    console.log(pruebaLocal)
    console.log(cliente)
    //CREAR BOTON DE VOLVER
    let bottonInicio= document.querySelector("#buttonInicio")
    bottonInicio.disabled=true
    let bottonInicioReset= document.querySelector("#reset")
    bottonInicioReset.addEventListener("click",()=>{
        let present=document.querySelector("#present")
        present.style.display="none"
        bottonInicio.disabled=false
    })
})
let consulta = document.querySelector("#enviarConsulta")
consulta.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    let clienteConsulta=document.querySelector("#nombreConsulta").value
    let dniConsulta=document.querySelector("#dni").value
    let celConsulta=document.querySelector("#cel").value
    let correoConsulta=document.querySelector("#mail").value
    let prodConsulta=document.querySelector("#prodConsulta").value
    let cuerpoConsulta=document.querySelector("#sendConsulta").value
    fetch(`https://jsonplaceholder.typicode.com/posts`, {  
        method:`POST`,
        body: JSON.stringify({
            name: `${clienteConsulta}`,
            dni: `${dniConsulta}`,
            celular: `${celConsulta}`,
            mail: `${correoConsulta}`,
            producto: `${prodConsulta}`,
            consulta: `${cuerpoConsulta}`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
    let confirmacionEnvio=document.querySelector("#envioConsulta")
    let mensajeConfirm=document.createElement("div")
    let mensaje= `<p>Su consulta fue enviada con Exito, nos pondremos en contacto con usted.</p>`
    html(confirmacionEnvio,mensajeConfirm,mensaje)
    })



//DEFINICION DE PRODUCTOS, SIMIL CARRIOT DE COMPRAS.

class Productos{
    constructor(nombre, calificacion, caracteristicas){
        this.nombre = nombre;
        this.calificacion = calificacion
        this.caracteristicas = caracteristicas
    }
    }

let catProducto= document.getElementById("productosCarrito")
let div = document.createElement("div");
crearTarjeta()


//SELECCION DE PRODUCTO TARJETA DE CREDITO

let selectionTC= document.querySelector("#tc")

//SELECCION DE PRODUCTO BANCA INTERNET 

let selectionHB = document.querySelector("#hb")

tc(selectionTC,selectionHB)
hb(selectionHB,selectionTC)

let inputClass= document.getElementsByTagName("input")
for(var i = 0; i < inputClass.length; i+=1)
    inputClass[i].className += "input col-10";
let inputClassOption= document.getElementsByTagName("select")
for(var i = 0; i < inputClassOption.length; i+=1)
    inputClassOption[i].className += "input";  


    


        
           
