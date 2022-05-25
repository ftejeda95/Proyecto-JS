/*El presente proyecto consta de crear una pagina web que determine soluciones lo mas precisas posibles dada una cantidad de condiciones a cumplir,
las cuales an sido predeterminadas previamente. ademas calcularan montos de pagos de tarjetas por consumos en dolares, se estimara el interes
por falta de pago de una tarjeta de credito dado los dias y el monto que no hemos abonado y comparar dicho resultado con opciones de financiacion.
se abarcaran por el momento 4 productos, Tarjeta de Credito, Tarjeta de Debito, Banca Digital e Inversiones.*/

//PRESENTACION Y SEGMENTACION INPUTS


let names = document.querySelector("#nombre")

let age = document.querySelector("#edad")

let sueldo = document.querySelector("#sueldo")

let td = document.querySelector("#poseeTd")

let formSaludo= document.getElementById("formSaludo");
formSaludo.addEventListener("submit", validarFormulario);
formSaludo.addEventListener("submit",function (){


//SALUDO PERSONALIZADO
    let saludoH6= document.getElementById("presetacion")
    let saludopers = document.createElement("div")
    saludopers.innerHTML= `<div><h5>Bienvenido ${names.value.toUpperCase()} en esta seccion lo instruiremos en las consultas que desea realizar.</h5></div>`
    saludopers.className = "secondTitlePers"
    saludoH6.appendChild(saludopers)
})

//Definicion de ARRAYS clientes
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
    presentacionSeg.innerHTML = "<div><p> Segun lo informado vamos a segmentar el procedimiento dadas las caracteristicas ingresadas</p><ul><li> Edad: "+ age.value + "</li><li> Cobra el sueldo: "+ sueldo.value.toUpperCase() + "</li> <li> Segmento:"+ segmentoCliente.segmento+"</li></ul></div> "
    presentacionSeg.className= "presentacionSeg"
    segmentacion.appendChild(presentacionSeg)
    console.log(segmentoCliente)
    clientesLocal = JSON.stringify(cliente)
    console.log(clientesLocal)
    localStorage.setItem("cliente1", clientesLocal)
    pruebaLocal= JSON.parse(localStorage.getItem("cliente1"))
    console.log(pruebaLocal)
    console.log(cliente)
})

//DEFINICION DE PRODUCTOS

const listaProductos=[{id:1, producto:"Tarjeta de Credito"},{id:2, producto:"Banca Internet"},{id:3, producto:"Tarjeta de debito"},{id:4, producto:"Inversiones"}]
const indexHB=[{id:1, producto:"Claves"},{id:2, producto:"Token de Seguridad"},{id:3, producto:"Transferencias"},{id:4, producto: "Pagos"}]
const opcClaves =[{id:1, opcion:"Consejo de clave"}, {id:2, opcion:"Generacion de clave"}]
const opcTransf =[{id:1,opcion:"Banca Internet"},{id:2,opcion:"Cajero Automatico"}]
const opcToken = [{id:1,opcion:"No poseo token"},{id:2,opcion:"Se borra Constantemente"},{id:3,opcion:"No toma lectura de Rostro"}]
const opcPago = [{id:1,opcion:"Pagos de Servicios"},{id:2,opcion:"VEP"},{id:3,opcion:"Pagos por Cajero"}]
const indexTC=[{id:1, producto:"Plan V"},{id:2, producto:"Interes por Falta de Pago"},{id:3, producto:"Blanqueo de Pin"},{id:4, producto: "Pago Saldo en Dolares"}]
const dolarTC=[{id:1,opcion:"Cotización Dolar"},{id:2,opcion:"Saldo en Dolares Positivo y Pesos en Negativo"},{id:3,opcion:"Excencion de Impuestos"}]
const planV = [{id:1,opcion:"Instructivo de acceso"},{id:2,opcion:"En que consiste la financiacion"},{id:3,opcion:"Calculo de interes"}]
const intTC = [{id:1,opcion:"Interes por Falta de Pago"}]
const blanqueoTC= [{id:1,opcion:"Blanqueo de PIN"}]
const indices = [listaProductos, indexHB, indexTC, dolarTC, planV, opcClaves, opcTransf, opcToken, opcPago]

//LIBRERIA
const DateTime = luxon.DateTime



//FUNCIONES

//Desarrollo de Banca Digital CLAVES 
function iniciales (input) {
    key = []
    frase = input.split(" ")
    frase.forEach(word=> key.push(word.charAt().toLowerCase()))
    return key
} 

//DEFINICION DE FUNCION POSEE TOKEN

const poseeToken = (create,divCreate) =>{ 
    if(td.value == "SI"){
        divCreate.innerHTML= `<div>
        <form id="formToken">
        <label for="token">¿Posee Token de Seguridad activo?</label>
            <select id="token" class="input">
            <option selected class="input"></option>
                <option id="posee">SI</option>
                <option id="noPosee">NO</option>
            </select>
            <button type="submit" class="btn btn-primary">Confirmar</button>
    </form></div>
        `
    divCreate.className="text"
    create.appendChild(divCreate)
    }else{
        respToken=document.querySelector("#divResp")
        sinTd=document.createElement("div")
        sinTd.innerHTML=`<div>
            <p>Sin tarjeta de Debito VIGENTE no transferir, favor de acercarse a sucursal.</p>
            </div> `
            sinTd.className="text"
            respToken.appendChild(sinTd)
      }}

const tokenTransf=()=>{
    respToken=document.querySelector("#formToken")
    respToken.addEventListener("submit",function(e){
        respPoseeToken=document.querySelector("#divResp")
        e.preventDefault(e)
        console.log(e)
        let valorToken =document.querySelector("#token").value
        console.log(valorToken)
        let posee = document.querySelector("#posee").value
        let noPosee = document.querySelector("#noPosee").value
        console.log(posee==valorToken)
        if(valorToken==posee){
             poseeCreate=document.createElement("div")
            poseeCreate.innerHTML=
            `<div><p>Ingrese a Banca Internet en la opcion Transferencias, Via CBU/ALIAS, ingrese ALIAS/CBU, ingrese Monto y Destino, Ingrese Token de Seguridad</p></div>`
            poseeCreate.className="text"
            respPoseeToken.appendChild(poseeCreate)
        }else if(valorToken==noPosee){
            noPoseeCreate=document.createElement("div")
            noPoseeCreate.innerHTML=
            `<div>
            <p>Deberá crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos.</p>
            <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
            </div> `
            noPoseeCreate.className="text"
            respPoseeToken.appendChild(noPoseeCreate)
        }})}
//DEFINICION DE FUNCION NO POSEE TOKEN
const sinToken= (helpToken,valor1,valor2,valor3,create,divCreate) => {
    if(td.value == "SI"){
        if(helpToken == valor1 || helpToken == valor3){
            divCreate.innerHTML= `<div>
            <p>Debera crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos</p>
            <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
            </div> `
        divCreate.className="text"
        create.appendChild(divCreate)
        }else if (helpToken == valor2){
            divCreate.innerHTML= `<div>
            <p>Debera desinstalar la app, volverla a instalar y luego debera vincular nuevamente el Token de Seguridad.</p>
            </div>`
            divCreate.className="text"
            create.appendChild(divCreate)
        }
    }else{  
            divCreate.innerHTML= `<div>
            <p>Sin tarjeta de Debito no podra generar Token de Seguridad, favor de acercarse a sucursal.</p></div>`
            divCreate.className="text"
            create.appendChild(divCreate)
        }
        
}
//FUNCION PARA DETENER COMPORTAMIENTO DETERMINADO Y CAPTURAR EVENTO

function validarFormulario (evt){
    evt.preventDefault();
    console.log(evt)

    }   
   
//SELECCION DE TARJETA DE CREDITO
function whatProduct(idProducto){
    if(idProducto == 1){
        return indexTC
    }else if(idProducto == 2) {
        return indexHB
    }
}
//FUNCION PARA DETERMINAR PRODUCTO ELEGIDO Y CREAR HTML CON OPCIONES 
function respClick(etiqueta,prodIndex){

    let elemento = document.querySelector(`#${etiqueta}`)
    let intruccion = document.createElement("div")
    intruccion.innerHTML = `
    <p>Excelente! lo instruiremos es el Producto ${listaProductos[prodIndex].producto} </p>
    <form id="formPers">
        <label for="optionSelected">Seleccione un opcion para continuar:</label>
            <select id="optionSelected" class="input">
            <option selected></option>
              <option id="${((whatProduct(listaProductos[prodIndex].id)[0].producto).split(" ")).join("_").toLowerCase()}">${whatProduct(listaProductos[prodIndex].id)[0].producto}</option>
              <option id="${((whatProduct(listaProductos[prodIndex].id)[1].producto).split(" ")).join("_").toLowerCase()}">${whatProduct(listaProductos[prodIndex].id)[1].producto}</option>
              <option id="${((whatProduct(listaProductos[prodIndex].id)[2].producto).split(" ")).join("_").toLowerCase()}">${whatProduct(listaProductos[prodIndex].id)[2].producto}</option>
              <option id="${((whatProduct(listaProductos[prodIndex].id)[3].producto).split(" ")).join("_").toLowerCase()}">${whatProduct(listaProductos[prodIndex].id)[3].producto}</option>
            </select>
            <button type="submit" class="btn btn-primary">Confirmar</button>
    </form>`;
    intruccion.className="text"
    elemento.appendChild(intruccion)
    
} 

//FUNCION PARA DETERMINAR QUE LISTA SELECCIONAR
function whatOption(idOption,productoSelec){

if(productoSelec == "Tarjeta de Credito"){ 
    if(idOption == 1){
        return planV
    }else if(idOption == 2) {
        return intTC
    }else if(idOption == 3) {
        return blanqueoTC
    }else if(idOption == 4) {
        return dolarTC
}}else if(productoSelec == "Banca Internet"){
    if(idOption == 1){
        return opcClaves
    }else if(idOption == 2) {
        return opcToken
    }else if(idOption == 3) {
        return opcTransf
    }else if(idOption == 4) {
        return opcPago
} 
}
}
//FUNCION PARA DETERMINAR LA OPCION ELECGIDA DENTRO DEL PRODUCTO Y CREAR UN HTML CON NUEVAS OPCIONES.
function respClickHelp(etiqueta,lista,prodIndex,valorEleccion,productoSelec){
    let nuevoElemento = document.querySelector(`#${etiqueta}`)
    let nuevo = document.createElement("div")
    if(whatOption(indices[lista][prodIndex].id,productoSelec).length == 2){
        nuevo.innerHTML = 
    //la funcion whatoption seleciona el producto de la lista index, luego selecciono la opcion de ese producto, y me trae el id, de acuerdo al producto me trae la opcion correspondiente, ejemplo de indices seleciono indextc, busca numero de opcion[0] plan v, saca el id, como el id es 1 trae lista de plan v, con la opcion 0 que es es que consiste.
    `<form id="formPers2">
        <label for="help">Dentro de la seccion ${productoSelec} opto por la opcion ${valorEleccion}, cual es tu consulta?</label>
            <select id="help" class="input">
            <option selected></option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion.split(" ")).join("_").toLowerCase()}">${(whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion.split(" ")).join("_").toLowerCase()}">${(whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion}</option>
            </select>
            <button type="submit" class="btn btn-primary">Confirmar</button>
    </form>`}else if(whatOption(indices[lista][prodIndex].id,productoSelec).length == 3){
        nuevo.innerHTML = `
    <form id="formPers2">
        <label for="help">Dentro de la seccion ${productoSelec} opto por la opcion ${valorEleccion}, cual es tu consulta?</label>
            <select id="help" class="input">
            <option selected></option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[0].opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[1].opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[2]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[2].opcion}</option>
            </select>
            <button type="submit" class="btn btn-primary">Confirmar</button>
    </form>`}else if(whatOption(indices[lista][prodIndex].id,productoSelec).length== 4){
                nuevo.innerHTML = `
    <form id="formPers2">
        <label for="help">Dentro de la seccion ${productoSelec} opto por la opcion ${valorEleccion}, cual es tu consulta?</label>
            <select id="help"class="input">
            <option selected></option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[0].opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[1].opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[2]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[2].opcion}</option>
                <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[3]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[3].opcion}</option>
                </select>
            <button type="submit" class="btn btn-primary">Confirmar</button>
    </form>`
    }
    nuevo.className="text"
    nuevoElemento.appendChild(nuevo)
} 
function html(create,input,html){
    input.innerHTML = html
    input.className= "text"
    return create.appendChild(input)
}
//DEFINIR UN STRING VACIO
const error=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por Favor verifique, un campo requerido no fue completado.',
        footer: '<a href="">Why do I have this issue?</a>'
      })
   
}
//FUNCION PARA TARJETAS
const crearTarjeta = (arrays)=>{

    let catProducto= document.getElementById("productosCarrito")
    catProducto.className += "container-fluid row my-5 mx-0 p-0"
    let clasificacion = "definicion de clasificaicon producto"
    let n =0
    for(const producto of arrays){
        n+=1
        let div = document.createElement("div");
        producto.calificacion==true?clasificacion = "SI" :clasificacion ="NO"
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="/assets/${n}.png" class="card-img-top" alt="${producto.nombre}" width=180px height=230px id=img>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> Necesita Calificacion: ${clasificacion} \n</p>
                <p class="card-text"> Caracteristicas: ${producto.caracteristicas}</p>
                <button class="btn btn-dark">Contratar</button>
            </div>
        </div>`
        div.classList="col-4 m-0 text-center p-2"
        catProducto.appendChild(div);  
        
    }
}
//DEFINICION DE PRODUCTOS, SIMIL CARRIOT DE COMPRAS.

class Productos{
    constructor(nombre, calificacion, caracteristicas){
        this.nombre = nombre;
        this.calificacion = calificacion
        this.caracteristicas = caracteristicas
    }
    }
const visa = new Productos("VISA",true,"Tarjeta de Credito");
const master = new Productos("MASTER",true,"Tarjeta de Credito");
const amex = new Productos("AMERICAN EXPREX",true,"Tarjeta de Credito");
const prestamoPersonal = new Productos("Prestamo Personal en Pesos",true,"Prestamo personal con destino Consumo Personal");
const plazofijoinst = new Productos("Plazo fijo intransferible",false,"Plazo Fijo Regulado BCRA");
const plazofijotrans = new Productos("Plazo fijo transferible",false,"Plazo Fijo Regulado BCRA que puede Endozarse");
const plazofijoinstUVA = new Productos("Plazo fijo intransferible UVA",false,"Plazo Fijo Valuado en Uvas con Plazo Minimo 90 Dias");
const bancaInternet= new Productos("Banca Internet/Movil", false, "Ingreso App y Banca Internet");
const debito = new Productos("Tarjeta de Debito Visa", false, "Tarjeta que permite operar en con su cuenta bancaria")
const categoriaproductos = [visa,master,amex,prestamoPersonal,plazofijoinst,plazofijotrans,plazofijoinstUVA,bancaInternet,debito]
let catProducto= document.getElementById("productosCarrito")
let div = document.createElement("div");
crearTarjeta(categoriaproductos)
/*
for(const producto of categoriaproductos){
    
    let clasificacion = "definicion de clasificaicon producto"
    producto.calificacion==true?clasificacion = "SI" :clasificacion ="NO"
    div.innerHTML = `Nombre del Producto: ${producto.nombre}, Necesita Calificacion: ${clasificacion}, Caracteristicas: ${producto.caracteristicas} \n` ;
    catProducto.appendChild(div);   
    div.className = "text"
}*/


let selectionTC= document.querySelector("#tc")
selectionTC.addEventListener("click", function () { 
    respClick("divResp",0)
    let form = document.querySelector("#formPers")
    form.addEventListener("submit", function(e) {
        e.preventDefault(console.log(e))
        let valorEleccionTC = document.querySelector(`#optionSelected`).value
        let planTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[0].producto).split(" ")).join("_").toLowerCase()}`).value
        let intTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[1].producto).split(" ")).join("_").toLowerCase()}`).value
        let blanqueo = document.querySelector(`#${((whatProduct(listaProductos[0].id)[2].producto).split(" ")).join("_").toLowerCase()}`).value
        let saldoTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[3].producto).split(" ")).join("_").toLowerCase()}`).value
        console.log(planTC==valorEleccionTC)
        let createTC = document.querySelector("#divResp")
        let inputTC = document.createElement("div")
        //SELECCIONO EL MENU DE PLAN V
            if(valorEleccionTC == planTC){
                let helpTC= document.querySelector("#formPers")
                helpTC.addEventListener("submit", function (e) {  
                    respClickHelp("divResp",2,0,valorEleccionTC,"Tarjeta de Credito")
                    let helpTC_2 = document.querySelector("#formPers2")
                    helpTC_2.addEventListener("submit",function(e){
                        e.preventDefault()
                        console.log(e)
                        let valorEleccionPlanV= document.querySelector(`#help`).value
                        let helpPlanInst=  document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        let helpPlanCons= document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        let helpPlanInt = document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        console.log(valorEleccionPlanV)
                        console.log(helpPlanInst)
                        
                        if(valorEleccionPlanV==helpPlanInst){
                            let innerHTMLTC=`<div><p>La opcion de Plan V la otorga visa, podras ver las opciones en tu resumen de TC, debera pagar el minimo del resumen vigente, luego llamar al telefono indicado 0800-222-CUOTAS. La opcion no aparece en tu resumen deberas realizar la consulta en VISAHOME</p></div>`
                            html(createTC,inputTC,innerHTMLTC)

                        }else if(valorEleccionPlanV==helpPlanCons){
                            let innerHTMLTC=`<div>
                            <p>La financiacion a la que usted esta accediendo solo abarca el resumen actual, es decir, usted coutificara el saldo restante al pago minimo por el plazo estipulado.</p>
                            <p>CUIDADO: las cuotas faltantes de las compras que figuran en el resumen SEGUIRAN llegando en los proximos resumenes.</p>
                            </div>
                            `
                            html(createTC,inputTC,innerHTMLTC)
                        }else if(valorEleccionPlanV==helpPlanInt){
                            let innerHTMLTC=`<div id="nuevoInt">
                            <p>Calcularemos la cuota que abonaria segun el plazo y la deuda total</p>

                            <form id="interesTC" >
                                <label for="deuda">ingrese Saldo Actual del Resumen:</label>
                                    <input type="text" id="deuda" class="input"><br>
                                <label for="pagoMinimo">ingrese Pago Minimo Actual del Resumen: </label>
                                    <input type="text" id="pagoMinimo" class="input"><br>
                                <label for="plazo">ingrese Plazo de financiacion: </label>
                                    <input type="text" id="plazo" class="input"><br>
                            <button type="submit" class="btn btn-primary">Confirmar</button>
                            </form></div>
                            `;
                            html(createTC,inputTC,innerHTMLTC)
                            let calculoDeuda = document.querySelector("#interesTC")
                            calculoDeuda.addEventListener("submit", function(e){
                                e.preventDefault()
                                console.log(e)
                                let nuevoDiv=document.querySelector("#divResp")
                                let inputDiv=document.querySelector("div")
                                let deuda = document.querySelector("#deuda").value
                                let pagoMinimo = document.querySelector("#pagoMinimo").value
                                let plazo = document.querySelector("#plazo").value
                                if(deuda==""||pagoMinimo==""||plazo==""){
                                    error()
                                }
                                let tasa = ((0.51/plazo))
                                console.log(tasa)
                                let saldoAdeudado = (deuda-pagoMinimo);
                                let numerador = saldoAdeudado*tasa*((1+tasa)**plazo)
                                console.log(numerador+" numerador")
                                let denominador= (((1+tasa)**plazo)-1)
                                console.log(denominador+" denominador")
                                let cuota = numerador / denominador
                                cuota = cuota.toFixed(2)

                                let innerHTMLTC2 = `<div>
                                <p>Usted abonara ${plazo} cuotas de ${cuota} devolviendo en total ${cuota*plazo}</p>

                                </div>`
                                html(nuevoDiv,inputDiv,innerHTMLTC2)
                            })
                            
                        }
                })
                })}
            //SELECCIONO EL MENU DE INTERESES DE TARJETA
            else if(valorEleccionTC == intTC){
                let helpInt= document.querySelector("#formPers")
                helpInt.addEventListener("submit", function () {  
                        e.preventDefault(e)
                        console.log(e)
                        let valorEleccionMora= document.querySelector(`#optionSelected`).value
                        let helpMora=  document.querySelector(`#${((whatOption(indices[0][1].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        console.log(valorEleccionMora)
                        console.log(helpMora)
                        if(valorEleccionMora==helpMora){
                            let innerHTMLMora =`<div>
                            <p>En esta seccion calcularemos los intereses punitorios(falta de pago) de tu resumen de TC</p>
                            <form id="interesTCMora" >
                                <label for="sa">Ingrese el Saldo Actual del resumen:</label>
                                    <input type="text" id="sa" class="input" placeholder="Importe en Pesos($)"><br>
                                <label for="pm">Ingrese el Pago Minimo del resumen:</label>
                                    <input type="text" id="pm" class="input"  placeholder="Importe en Pesos($)"><br>
                                <label for="pago">Ingrese pago realizado: </label>
                                    <input type="text" id="pago" class="input"  placeholder="Importe en Pesos($)"><br>
                                <label for="fechaPago">Ingrese fecha de pago:</label>
                                    <input type="date" id="fechaPago" class="input"><br>   
                                <label for="fechaVenc">Ingrese fecha de Vencimiento del Resumen:</label>
                                    <input type="date" id="fechaVenc" class="input"><br>
                                <button type="submit" class="btn btn-primary" >Confirmar</button>
                            </form>
                            </div>`
                            html(createTC,inputTC,innerHTMLMora)
                        let helpInt= document.querySelector("#interesTCMora")
                        helpInt.addEventListener("submit", function (e) {    
                            e.preventDefault(e)
                            console.log(e)
                            let sa = document.querySelector("#sa").value
                            let pm = document.querySelector("#pm").value
                            let pago= document.querySelector("#pago").value
                            let fechaPagoInput = document.querySelector("#fechaPago").value
                            let fechaVencInput = document.querySelector("#fechaVenc").value
                            if(sa==""||pm==""||pago==""||fechaPagoInput==""||fechaVencInput==""){
                                error()
                            }
                            let fechaPagoLuxon=DateTime.fromISO(fechaPagoInput)  
                            let fechaVencLuxon =DateTime.fromISO(fechaVencInput)
                            console.log(fechaPagoLuxon.month)
                            let diasAtraso=(fechaPagoLuxon-fechaVencLuxon)/(1000*60*60*24)
                            console.log(diasAtraso)
                            let tna = 30.30
                            let createTcMora = document.querySelector("#divResp")
                            let inputTcMora = document.createElement("div")
                                if((pago>=pm) && (fechaPago<=fechaVenc)){
                                    let innerHTMLMora2=`<div><p>No corresponde abonar Interes Punitorio dado que abono mas o igual de pago minimo dentro de la fecha de vencimiento</p></div>`
                                    html(createTcMora,inputTcMora,innerHTMLMora2)
                                } else{
                                    let saldoPunitorio = pm - pago
                                    let intPunitorio = (saldoPunitorio*(diasAtraso)*tna)/(365*100)
                                    innerHTMLMora3=`<div><p>Usted abonara ${intPunitorio.toFixed(2)} correspondiente a intereses punitorios</p></div>`
                                    html(createTcMora,inputTcMora,innerHTMLMora3)
                                }
                            
                        })}

                })}
            
            // SELECCIONO BLANQUEO DE TC
            else if(valorEleccionTC == blanqueo){
                let helpBlanqueo= document.querySelector("#formPers")
                helpBlanqueo.addEventListener("submit", function (e) {  
                    e.preventDefault(e)
                    console.log(e)
                    let valorEleccionBlanqueo= document.querySelector(`#optionSelected`).value
                    let helpTCBlanqueo=  document.querySelector(`#${((whatProduct(listaProductos[0].id)[2].producto).split(" ")).join("_").toLowerCase()}`).value
                    console.log(valorEleccionBlanqueo)
                    console.log(helpTCBlanqueo)
                    createBlanqueoTC=document.querySelector("#divResp")
                    inputBlanqueoTC=document.createElement("div")
                    if(valorEleccionBlanqueo==helpTCBlanqueo){
                        innerHTMLBlanqueo=`<div>
                        <form id="blanqueoTC">
                        <label for="blanqueo">Posee clave Telefonica?: </label>
                            <select id="blanqueo" class="input">
                            <option selected></option>
                                <option id="poseeClave">SI</option>
                                <option id="noPoseeClave">NO</option>
                            </select>
                            <button type="submit" class="btn btn-primary">Confirmar</button>
                        </form>
                        </div> `   
                        html(createBlanqueoTC,inputBlanqueoTC,innerHTMLBlanqueo)
                        let blanqueoPinTC=document.querySelector("#blanqueoTC")
                        blanqueoPinTC.addEventListener("submit",function(e){
                            e.preventDefault()
                            console.log(e)
                            createBlanqueoTC2=document.querySelector("#divResp")
                            inputBlanqueoTC2=document.createElement("div")
                            let poseeTC = document.querySelector("#poseeClave").value
                            let valorClaveTC=document.querySelector("#blanqueo").value
    
                            if(valorClaveTC==poseeTC){
                                innerHTMLBlanqueo2=`<div><p>Debe comunicarse al 0810-555-XXXX e ingresar a la opcion operar con sus Productos y allí solicitar el blanqueo</p></div>
                                `
                                html(createBlanqueoTC2,inputBlanqueoTC2,innerHTMLBlanqueo2)
                            }else{
                                innerHTMLBlanqueo2=`Deberá ingresar a VISAHOME y solicitar el Blanqueo de Pin de la Tarjeta de credito, caso contrario, acercarse a la sucursal mas cercana`
                                html(createBlanqueoTC2,inputBlanqueoTC2,innerHTMLBlanqueo2)
                            }
                        })
                        
                       
                    }
                    })}
            //SELECCIONO SALDO EN DOLARES DE TC
            else if(valorEleccionTC == saldoTC){
                let helpSaldo= document.querySelector("#formPers")
                helpSaldo.addEventListener("submit", function () {  
                    respClickHelp("divResp",2,3,valorEleccionTC,"Tarjeta de Credito")
                    let helpSaldo2 = document.querySelector("#formPers2")
                    helpSaldo2.addEventListener("submit",function(e){
                        e.preventDefault(e)
                        let createDolarTC=document.querySelector("#divResp")
                        let inputDolarTC=document.createElement("div")
                        let valorEleccionDolar= document.querySelector(`#help`).value
                        let helpDolarCot=  document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        let helpDolarSaldo= document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        let helpDolarImp = document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        console.log(valorEleccionDolar)
                        console.log(helpDolarCot)
                        if(valorEleccionDolar==helpDolarCot){
                            innerhtmlDolar=`<div>
                            <form id="dolarTC">
                            <label for="dolar">Abonara en:</label>
                                <select id="dolar" class="input">
                                <option selected></option>
                                    <option id="abonaPesos">Pesos</option>
                                    <option id="abonaDolar">Dolar</option>
                                </select>
                                <button type="submit" class="btn btn-primary">Confirmar</button>
                            </form>
                            </div> `  
                            html(createDolarTC,inputDolarTC,innerhtmlDolar)
                            let dolarTC=document.querySelector("#dolarTC")
                            dolarTC.addEventListener("submit",function(e){
                                let createDolarTC2=document.querySelector("#divResp")
                                let inputDolarTC2=document.createElement("div")
                                e.preventDefault()
                                console.log(e)
                                createDolarTC2=document.querySelector("#divResp")
                                inputDolarTC2=document.createElement("div")
                                let valorAbono=document.querySelector("#dolar").value
                                let abonaPesos = document.querySelector("#abonaPesos").value
                                
                            if(valorAbono == abonaPesos){
                                innerHTMLPesos=`La cotización del Dolar que ustede debe abonar es la oficial, dado que los impuestos son cobrados en el resumen en el que los dolares son consumidos`
                                html(createDolarTC2,inputDolarTC2,innerHTMLPesos)
                            }else{
                                innerHTMLAbonaDolar=`Al abonar en dolares, los impuestos seran descontados al cierre del resumen, por lo que debera abonar el saldo en dolares MAS el saldo en pesos menos los impuestos.`
                                html(createDolarTC2,inputDolarTC2,innerHTMLAbonaDolar)
                            } })
                        }else if(valorEleccionDolar==helpDolarSaldo){
                           innerHTMLSaldo= `El saldo negativo en pesos significa que usted posee un saldo a Favor, el mismo se ajustara con el saldo a dolares positivo que posee hoy en la Tarjeta de Credito, figura de esta manera dado que la marca realiza la compenzacion al cierre del nuevo resumen.`
                           html(createDolarTC,inputDolarTC,innerHTMLSaldo)
                        }else if(valorEleccionDolar==helpDolarImp){
                            innerHTMLImp= `El unico caso en el que los impuestos no deben ser cobrados, es en aquellos productos que el BCRA a determinado, debera verificar en https://www.afip.gob.ar/impuesto-pais/operaciones-y-sujetos/no-alcanzados.asp y en caso de corresponder, Cargar un Reclamo.`
                           html(createDolarTC,inputDolarTC,innerHTMLImp)
                        }
                })
                })}})})
//SELECCION DE PRODUCTO BANCA INTERNET 
let selectionHB = document.querySelector("#hb")
selectionHB.addEventListener("click", function () {
    respClick("divResp",1)
    let formHB = document.querySelector("#formPers")
    formHB.addEventListener("submit", function (e) {
        e.preventDefault()
        //sobre div ya creado creo un evento click para tomar el valor seleccionado
        let valorEleccionHB = document.querySelector(`#optionSelected`).value
        //optionSelected es el valor de la seleccion
        console.log(valorEleccionHB)
        //valor de las opciones posibles
        let clave = document.querySelector(`#${((whatProduct(listaProductos[1].id)[0].producto).split(" ")).join("_").toLowerCase()}`).value
        let token = document.querySelector(`#${((whatProduct(listaProductos[1].id)[1].producto).split(" ")).join("_").toLowerCase()}`).value
        let transf= document.querySelector(`#${((whatProduct(listaProductos[1].id)[2].producto).split(" ")).join("_").toLowerCase()}`).value
        let pago = document.querySelector(`#${((whatProduct(listaProductos[1].id)[3].producto).split(" ")).join("_").toLowerCase()}`).value
        //SELECCIONO GENERACION DE CLAVES
        if(valorEleccionHB == clave){
            //si el valor coincide, realizo un nuevo evento para un nuevo html
            let helpClave= document.querySelector("#formPers")
            helpClave.addEventListener("submit", function () {
                respClickHelp("divResp",1,0,valorEleccionHB,"Banca Internet")
                let helpClave_2 = document.querySelector("#formPers2")
                helpClave_2.addEventListener("submit",function(e){
                    e.preventDefault()
                    console.log(e)
                    let valorEleccionClave= document.querySelector(`#help`).value
                    let helpClaveConsejo =  document.querySelector(`#${((whatOption(indices[1][0].id,"Banca Internet")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                    let helpClaveGeneracion = document.querySelector(`#${((whatOption(indices[1][0].id,"Banca Internet")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                    //CREO DIVS DE RESPUESTA
                    let key = document.querySelector("#divResp")
                    let inputClave = document.createElement("div")
                    if(valorEleccionClave == helpClaveConsejo){
 
                        let innerHTMLTKeyConsejo = `<div><p>Las claves a ingresar deben tener minimas medidas de seguridad, haremos un ejemplo de clave.</p>
                        <form id="frase" >
                        <label for="ejFrase"> Por Favor, Ingrese una frase: por ejemplo, me recibi de licenciado en adminitracion en 2019: </label>
                        <input type="text" id="ejFrase">
                        <button type="submit" class="btn btn-primary" >Confirmar</button>
                        </form></div>`
                        html(key,inputClave,innerHTMLTKeyConsejo)                       

                        let fraseEj = document.querySelector("#frase")
                        fraseEj.addEventListener("submit",function(e){
                            e.preventDefault()
                            console.log(e)
                            let valueFrase = document.querySelector("#ejFrase").value
                            console.log(valueFrase)
                            if(valueFrase==""){
                                error()
                            }
                        let respuesta = document.querySelector("#divResp")
                        let  respConsejo = document.createElement("div")
                        let innerHTMLTCosnejo=
                        `<p>Sumaremos las primeras letras tendremos que su clave: ${iniciales(valueFrase).join(" + ").toUpperCase()}</p>
                        <p>Recomendamos que utilices una frase que sea conocida para ti e ingreses solo las primeras letras de las palabras de dicha frase! Suerte!</p>`
                        html(respuesta,respConsejo,innerHTMLTCosnejo)

                        })

                    }else if(valorEleccionClave == helpClaveGeneracion){
                        consejo = document.querySelector("#divResp")
                        inputClave = document.createElement("div")
                        let innerHTMLTKey =`<div>
                            <ul>
                                <li>1-Dirigite a un Cajero Automático de la Red Banelco, de lunes a viernes de 07:00 a 20:00 hs. </li>
                                <li>2-Ingresá tu Tarjeta de Débito y en el menú seleccioná Claves> Generación de clave> Banca Móvil/Internet. </li>
                                <li>3-Ingresá una clave de 6 dígitos. Recordala porque la necesitarás cuando ingreses a App Macro.</li>
                                <li>4-Durante las próximas 72 horas, ingresá a App Macro para generar tu clave definitiva. Seleccioná la opción "¿No podés ingresar?"</li>
                                <li>5-Ingresá tu número de DNI y la clave de 6 dígitos.</li>
                                <li>6-Ingresá el mail que utilizás habitualmente, verifiquelo y realice el mismo procedimiento con su Celular. </li>
                                <li>7-Aceptá Términos y Condiciones. </li>
                                <li>8-Seleccioná un avatar y completá las preguntas de seguridad.</li>
                                <li>9-Cree su usuario y clave.</li>
                            </ul>
                        </div>`
                        html(key,inputClave,innerHTMLTKey)

                    }
                        
                })
            })
        }
        //SELECCIONO TOKEN DE SEGURIDAD

        else if(valorEleccionHB == token){
            let helpToken= document.querySelector("#formPers")
            helpToken.addEventListener("submit", function () {  
            respClickHelp("divResp",1,1,valorEleccionHB,"Banca Internet")
            //CAPTURO VALORES DE RESPUESTA
            let helpToken_2 = document.querySelector("#formPers2")
            helpToken_2 .addEventListener("submit",function(e){
                e.preventDefault()
                console.log(e)
                let valorEleccionToken= document.querySelector(`#help`).value
                let helpSinToken=  document.querySelector(`#${((whatOption(indices[1][1].id,"Banca Internet")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                let helpTokenBorrar= document.querySelector(`#${((whatOption(indices[1][1].id,"Banca Internet")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                let helpTokenRostro = document.querySelector(`#${((whatOption(indices[1][1].id,"Banca Internet")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
                //CREO DIVS DE RESPUESTA
                let createtoken = document.querySelector("#divResp")
                let inputToken = document.createElement("div")
                sinToken(valorEleccionToken,helpSinToken,helpTokenBorrar,helpTokenRostro,createtoken,inputToken)
        })})}
        // SELECCIONO TRANSFERENCIAS DE FONDOS

        else if(valorEleccionHB == transf){
            let helpTransf= document.querySelector("#formPers")
            helpTransf.addEventListener("click", function () {  
            respClickHelp("divResp",1,2,valorEleccionHB,"Banca Internet")
            //IMPRIMO VALORES DE RESPUESTA
            let helpTransf_2 = document.querySelector("#formPers2")
            helpTransf_2 .addEventListener("submit",function(e){
                e.preventDefault()
                console.log(e)
                let valorEleccionTransf= document.querySelector(`#help`).value
                let helpBI=  document.querySelector(`#${((whatOption(indices[1][2].id,"Banca Internet")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                let helpBanelco= document.querySelector(`#${((whatOption(indices[1][2].id,"Banca Internet")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                //CREO DIVS DE RESPUESTA
                let createTrans = document.querySelector("#divResp")
                let inputTransf = document.createElement("div")
                if(valorEleccionTransf==helpBI){
                    //POSEE TOKEND E SEGURIDAD??
                    poseeToken(createTrans,inputTransf)
                    tokenTransf()
                }else if(valorEleccionTransf==helpBanelco){
                    if(td.value == "SI"){
                        let innerHTMLTrans=`<div>
                        <p>Ingrese su tarjeta de debito al cajero, luego seleccione a la opcion: transferencias/depositos,transferencia de fondos, tipo de cuenta de donde salen los fondos, CBU destino, verifique titularidad de CBU, concepto, importe y tipo de cuenta destino.</p>
                        </div>`
                        html(createTrans,inputTransf,innerHTMLTrans)
                    }else{ 
                        let innerHTMLTrans=`<div>
                        <p>Sin tarjeta de Debito no podrá transferir, favor de acercarse a la sucursal mas cercana.</p>
                        </div>`
                        html(createTrans,inputTransf,innerHTMLTrans)

                }}
        })})}
        //SELECCIONE PAGO DE SERVICIOS
        else if(valorEleccionHB == pago){
            let helpPago= document.querySelector("#formPers")
            helpPago.addEventListener("click", function () {  
            respClickHelp("divResp",1,3,valorEleccionHB,"Banca Internet")
            //SACO VALORES DE RESPUESTA
            let helpPago_2 = document.querySelector("#formPers2")
            helpPago_2 .addEventListener("submit",function(e){
                e.preventDefault()
                console.log(e)
                let valorEleccionPago= document.querySelector(`#help`).value
                let helpPagoServ=  document.querySelector(`#${((whatOption(indices[1][3].id,"Banca Internet")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                let helpPavoVEP= document.querySelector(`#${((whatOption(indices[1][3].id,"Banca Internet")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                let helpPagoBanelco = document.querySelector(`#${((whatOption(indices[1][3].id,"Banca Internet")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
                //CREO LOS DIVS PARA RESPUESTA
                let createPago = document.querySelector("#divResp")
                let inputPago = document.createElement("div")
                if(td.value == "SI"){
                    //POSEE TOKEN DE SEGURIDAD??
                    poseeToken(createPago,inputPago)
                    //SACO VALORES DE RESPUESTA TOKEN
                    respToken=document.querySelector("#formToken")
                    respToken.addEventListener("submit",function(e){
                        respPoseeToken=document.querySelector("#divResp")
                        e.preventDefault(e)
                        console.log(e)
                        let valorToken =document.querySelector("#token").value
                        let posee = document.querySelector("#posee").value
                        let noPosee = document.querySelector("#noPosee").value
                        if(valorToken==posee){
                            let createPagoResp = document.querySelector("#divResp")
                            let inputPagoResp =document.createElement("div")
                            if(valorEleccionPago==helpPagoServ){
                                innerHTMLPagoResp=`<div>
                                    <p>Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro, seleccione sub-rubro, ingrese codigo de identificacion</p>
                                    </div>`
                                html(createPagoResp,inputPagoResp,innerHTMLPagoResp)
                            }else if(valorEleccionPago==helpPavoVEP){
                                innerHTMLPagoResp=`<div>
                                <p>Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro: AFIP, seleccione sub-rubro: AFIP VEP, ingrese cuit Contribuyente (deudor), ingrese cuit Generado (quien crea VEP), pagar.</p>
                                </div>`
                                html(createPagoResp,inputPagoResp,innerHTMLPagoResp)
                            }else if(valorEleccionPago==helpPagoBanelco){
                                innerHTMLPagoResp=`<div>
                                <p>Ingrese a la opcion pagos,seleccione rubro, seleccione codigo de identificacion, seleccione cuenta debito, confirmar.</p>
                                </div>`
                                html(createPagoResp,inputPagoResp,innerHTMLPagoResp)

                            }
                        }
                        else if(valorToken==noPosee){
                            let createPagoResp = document.querySelector("#divResp")
                            let inputPagoResp =document.createElement("div")
                            innerHTMLPagoResp= `<div>
                            <p>Deberá crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos</p>
                            <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
                            </div> `
                            html(createPagoResp,inputPagoResp,innerHTMLPagoResp)
                        }
                })}else{ 
                    innerHTMLPagoSinToken=`<div>
                        <p>Sin tarjeta de Debito no podrá transferir, favor de acercarse a la sucursal mas cercana.</p>
                        </div>`
                        html(createPago,input,innerHTMLPagoSinToken)}

            })})}
        })})

        let inputClass= document.getElementsByTagName("input")
        for(var i = 0; i < inputClass.length; i+=1)
            inputClass[i].className += "input";
        let inputClassOption= document.getElementsByTagName("select")
        for(var i = 0; i < inputClassOption.length; i+=1)
        inputClassOption[i].className += "input";   


        
           
