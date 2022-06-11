
//FUNCIONES
export {iniciales,poseeToken,tokenTransf,sinToken,validarFormulario,whatOption,whatProduct,respClick,respClickHelp,html,error,crearTarjeta,repeatEvent,hb,tc,DateTime,crearSeguro,enviarSolicitud,borrarSimulacion,TNA,determinarCuota,sumaFecha}
export {listaProductos, indexHB, indexTC, dolarTC, planV, opcClaves, opcTransf, opcToken, opcPago,indices}

//LIBRERIA
const DateTime = luxon.DateTime
let tieneTD=JSON.parse(localStorage.getItem("poseeTD")).poseeTD
console.log(tieneTD)
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
//Desarrollo de Banca Digital CLAVES 
function iniciales (input) {
    let key = []
    let frase = input.split(" ")
    frase.forEach(word=> key.push(word.charAt().toLowerCase()))
    return key
} 
//DEFINICION DE FUNCION POSEE TOKEN

const poseeToken = (create,divCreate) =>{ 

    if(tieneTD == "SI"){
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
    divCreate.className="text col-12"
    create.appendChild(divCreate)
    }else{
        let respToken=document.querySelector("#divResp")
        let sinTd=document.createElement("div")
        sinTd.innerHTML=`<div>
            <p>Sin tarjeta de Debito VIGENTE no transferir, favor de acercarse a sucursal.</p>
            </div> `
            sinTd.className="text col-12"
            respToken.appendChild(sinTd)
      }}

const tokenTransf=()=>{
    let respToken=document.querySelector("#formToken")
    respToken.addEventListener("submit",function(e){
        let respPoseeToken=document.querySelector("#divResp")
        e.preventDefault(e)
        console.log(e)
        let valorToken =document.querySelector("#token").value
        let posee = document.querySelector("#posee").value
        let noPosee = document.querySelector("#noPosee").value
        if(valorToken==posee){
            let poseeCreate=document.createElement("div")
            poseeCreate.innerHTML=
            `<div><p>Ingrese a Banca Internet en la opcion Transferencias, Via CBU/ALIAS, ingrese ALIAS/CBU, ingrese Monto y Destino, Ingrese Token de Seguridad</p>
            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
            </div>`
            poseeCreate.className="text col-12"
            respPoseeToken.appendChild(poseeCreate)
            repeatEvent()
        }else if(valorToken==noPosee){
            let noPoseeCreate=document.createElement("div")
            noPoseeCreate.innerHTML=
            `<div>
            <p>Deberá crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos.</p>
            <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
            </div> `
            noPoseeCreate.className="text col-12"
            respPoseeToken.appendChild(noPoseeCreate)
            repeatEvent()
        }})}
//DEFINICION DE FUNCION NO POSEE TOKEN
const sinToken= (helpToken,valor1,valor2,valor3,create,divCreate) => {
    if(tieneTD== "SI"){
        if(helpToken == valor1 || helpToken == valor3){
            divCreate.innerHTML= `<div>
            <p>Debera crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos</p>
            <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
            </div> `
        divCreate.className="text col-12"
        create.appendChild(divCreate)
        repeatEvent()
        }else if (helpToken == valor2){
            divCreate.innerHTML= `<div>
            <p>Debera desinstalar la app, volverla a instalar y luego debera vincular nuevamente el Token de Seguridad.</p>
            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
            </div>`
            divCreate.className="text col-12"
            create.appendChild(divCreate)
            repeatEvent()
        }
    }else{  
            divCreate.innerHTML= `<div>
            <p>Sin tarjeta de Debito no podra generar Token de Seguridad, favor de acercarse a sucursal.</p>
            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
            </div>`
            divCreate.className="text col-12"
            create.appendChild(divCreate)
            repeatEvent()
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
            <button type="submit" class="btn btn-primary" id="buttonProd">Confirmar</button>
    </form>`;
    intruccion.className="text col-12"
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
                    <label for="help">En ${productoSelec} optó por la opcion ${valorEleccion}, cual es tu consulta?</label>
                        <select id="help" class="input">
                        <option selected></option>
                            <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion.split(" ")).join("_").toLowerCase()}">${(whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion}</option>
                            <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion.split(" ")).join("_").toLowerCase()}">${(whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion}</option>
                        </select>
                        <button type="submit" class="btn btn-primary">Confirmar</button>
                </form>`
        }else if(whatOption(indices[lista][prodIndex].id,productoSelec).length == 3){
            nuevo.innerHTML = `
                <form id="formPers2">
                    <label for="help">En ${productoSelec} optó por la opcion ${valorEleccion}, cual es tu consulta?</label>
                        <select id="help" class="input">
                        <option selected></option>
                            <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[0]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[0].opcion}</option>
                            <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[1]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[1].opcion}</option>
                            <option id="${((whatOption(indices[lista][prodIndex].id,productoSelec)[2]).opcion.split(" ")).join("_").toLowerCase()}">${whatOption(indices[lista][prodIndex].id,productoSelec)[2].opcion}</option>
                        </select>
                        <button type="submit" class="btn btn-primary">Confirmar</button>
                </form>`
            }else if(whatOption(indices[lista][prodIndex].id,productoSelec).length== 4){
                nuevo.innerHTML = `
                    <form id="formPers2">
                        <label for="help">En ${productoSelec} optó por la opcion ${valorEleccion}, cual es tu consulta?</label>
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
    nuevo.className="text col-12"
    nuevoElemento.appendChild(nuevo)
} 
function html(create,input,html){
    input.innerHTML = html
    input.className= "text col-12"
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
const crearTarjeta = (e)=>{
    fetch("./js/data.json")
    .then((res) =>res.json())
    .then((data)=>{
        let catProducto= document.getElementById("productosCarrito")
        catProducto.className += "container-fluid row my-1 mx-0 p-0 col-12"
        let n =0
        for(const producto of data.listaProduct){
            n+=1
            let div = document.createElement("div");
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}" width=180px height=230px id=img>
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text"> Necesita Calificacion: ${producto.clasificacion} \n</p>
                    <p class="card-text"> Caracteristicas: ${producto.caracteristicas}</p>
                    <a href="../pages/product.html"><button class="btn btn-dark buttonProduct" id="new${producto.id}" >Contratar</button></a>
                </div>
            </div>`
            div.classList="col-12 col-sm-6 col-md-4 m-0 row justify-content-center p-1"
            catProducto.appendChild(div);  
            
        }

    })       
    }


    const crearSeguro = ()=>{
        fetch("../js/data.json")
        .then((res) =>res.json())
        .then((data)=>{
            let seguros= document.getElementById("seguros")
            //catProducto.className += "container-fluid row my-1 mx-0 p-0 "
            let n =0
            for(const producto of data.seguros){
                n+=1
                let segDiv = document.createElement("div");
                segDiv.innerHTML = `
                    <div class="card text-center" id="cardSeguro${n}">
                        <div class="card-header">
                            ${producto.abreviatura}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.carac}</p>
                            <a href="buttonSeg" class="btn btn-primary" id="contrataSeg${n}">Contratar</a>
                        </div>
                    </div>`
                segDiv.classList="m-0 row justify-content-center p-1"
                seguros.appendChild(segDiv);
                let cardSeguro=document.querySelector(`#cardSeguro${n}`)  
                let buttonSeg=document.querySelector(`#contrataSeg${n}`)
                buttonSeg.addEventListener("click", (e)=>{
                    e.preventDefault()
                    let enviarsegDiv = document.createElement("div");
                    let innerHTMLSeg=`        
                        <div>
                            <h4 class="p-2">Por favor complete los siguientes datos:</h4>
                            <form action="newProd" id="newSeg">
                                <label for="nombreNew">Apellido y Nombre</label>
                                <input type="text" id="nombreNew" placeholder="Apellido y Nombre"><br><br>

                                <label for="dniNew">Numero de documento</label>
                                <input type="text" id="dniNew" placeholder="Sin puntos"><br><br>

                                <label for="celNew">Numero de Celular</label>
                                <input type="text" id="celNew" placeholder="Sin 0 y sin 15"><br><br>

                                <label for="mailNew">Correo Electronico</label>
                                <input type="text" id="mailNew" placeholder="usuaro@mail.com"><br><br>

                                <button type="submit" class="btn btn-primary" id="buttonNew" >Confirmar</button>
                                <button type="reset" class="btn btn-primary" >Borrar</button><br><br>

                            </form>
                        </div>`
                    html(cardSeguro,enviarsegDiv,innerHTMLSeg)
  
                    let formEnviarPP=document.querySelector("#newSeg")
                    formEnviarPP.addEventListener("submit",(e)=>{
                        e.preventDefault()
                        console.log(e)
                        let enviarNombre=document.querySelector("#nombreNew").value
                        let enviarDNI=document.querySelector("#dniNew").value
                        let enviarCel=document.querySelector("#celNew").value
                        let enviarMail=document.querySelector("#mailNew").value
                        let enviarSeguro=`${producto.nombre}`
                        fetch(`https://jsonplaceholder.typicode.com/posts`, {  
                            method:`POST`,
                            body: JSON.stringify({
                                name: `${enviarNombre}`,
                                dni: `${enviarDNI}`,
                                celular: `${enviarCel}`,
                                mail: `${enviarMail}`,
                                producto:`${enviarSeguro}`,
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                              },
                        })
                    .then((response) => response.json())
                    .then((json) => console.log(json))
                    let mensajeConfirm=document.createElement("div")
                    let mensaje= `<p>Su consulta fue enviada con Exito, nos pondremos en contacto con usted.</p>`
                    html(cardSeguro,mensajeConfirm,mensaje)})  
            })      
        }
        let CreateButtonFinal=document.createElement("div")
        let buttonFinal= `        
            <button class="btn btn-primary" id="borrarPP">Volver a elegir</button>
            <a href="../index.html"><button>Regresar</button></a>`
        html(seguros,CreateButtonFinal,buttonFinal)
    })}
//FUNCION DE TOMA DE DATOS
function enviarSolicitud(id,montoPP,plazoPP,seleccion){

    let idCreate=document.createElement("div")
    if(seleccion=="PP"){
        let innerHTMLProd=`        
        <div class="container">
        <div>
            <h4>Por favor complete los siguientes datos:</h4>
        </div>   
        <form action="newProd" id="newPD" class="row">
            <div class="col-6">
            <label for="nombreNew">Apellido y Nombre</label><br>
            <input type="text" id="nombreNew" placeholder="Apellido y Nombre" class="col-5"><br><br>

            <label for="dniNew">Numero de documento</label><br>
            <input type="text" id="dniNew" placeholder="Sin puntos" class="col-5"><br><br>

            <label for="celNew">Numero de Celular</label><br>
            <input type="text" id="celNew" placeholder="Sin 0 y sin 15" class="col-5"><br><br>

            <label for="mailNew">Correo Electronico</label><br>
            <input type="text" id="mailNew" placeholder="usuaro@mail.com" class="col-5"><br><br>
            </div>
            <div class="col-6"><br><br>
            <label for="actividad">Actividad</label><br>
            <input type="text" id="actividad" placeholder="ej:Monotributista/Relacion de Dependencia" class="col-5"><br><br>

            <label for="ingreso">Ingreso Mensual Aproximado:</label><br>
            <input type="text" id="ingreso" placeholder="$" class="col-5"><br><br>

            <p>Monto solicitado en $:${montoPP}</p>

            <label for="plazopp">Plazo:</label>
            <select id="plazopp">
            <option>${plazoPP}</option>
              <option>12</option>
              <option>24</option>
              <option>36</option>
              <option>48</option>
              <option>60</option>
            </select><br><br>
            </div>
            <div class="text-center col-12">
            <button type="submit" class="btn btn-primary" id="buttonNew" >Confirmar</button>
            <button type="reset" class="btn btn-primary" >Borrar</button>
            <button class="btn btn-primary" id="borrarPP">Volver a elegir</button>
            <a href="../index.html"><button class="btn btn-primary">Regresar</button></a>
            </div>
        </form>

    </div>`
    let borrarButton=document.querySelector("#divPP")
    borrarButton.innerHTML=""
    html(id,idCreate,innerHTMLProd)
    let recargar=document.querySelector("#borrarPP")
    borrarSimulacion(recargar)
    }else if(seleccion=="TC"){
        let innerHTMLFormTC=`
            <div class="container">
                <div class="col-12">
                    <h4>Por favor complete los siguientes datos:</h4>
                </div>
                <form action="newTCred" id="newTC" class="row">
                <div class="col-6">
                    <label for="nombreNew">Apellido y Nombre</label><br>
                    <input type="text" id="nombreNew" placeholder="Apellido y Nombre" class="col-7"><br><br>
                    <label for="dniNew">Numero de documento</label><br>
                    <input type="text" id="dniNew" placeholder="Sin puntos" class="col-7"><br><br>
                    <label for="celNew">Numero de Celular</label><br>
                    <input type="text" id="celNew" placeholder="Sin 0 y sin 15" class="col-7"><br><br>
                    <label for="mailNew">Correo Electronico</label><br>
                    <input type="text" id="mailNew" placeholder="usuaro@mail.com" class="col-7"><br><br>
                </div>
                <div class="col-6">
                    <label for="actividad">Actividad</label><br>
                    <input type="text" id="actividad" placeholder="ej:Monotributista/Relacion de Dependencia" class="col-7"><br><br>
                    <label for="ingreso">Ingreso Mensual Aproximado</label><br>
                    <input type="text" id="ingreso" placeholder="$" class="col-7"><br><br>
                    <label for="plazoMax">ingrese Plazo de maximo Esperado de tramitacion(tarjeta en mano)</label><br>
                    <input type="text" id="plazoMax" class="input" placeholder="Demora minima 13 dias" size="20" class="col-7"><br><br>
                    <label for="marca">Seleccione el Marca:</label><br>
                    <select id="marca">
                    <option selected></option>
                      <option>VISA</option>
                      <option>MASTERCAD</option>
                      <option>AMERICAN EXPRESS</option>
                    </select><br><br>
                </div>
                <div class="text-center col-12">
                    <button type="submit" class="btn btn-primary" id="buttonNewTC" >Confirmar</button>
                    <button type="reset" class="btn btn-primary borrar" >Borrar</button>
                    <button class="btn btn-primary" id="borrarTC" >Volver a elegir</button>
                    <a href="../index.html"><button class="btn btn-primary">Regresar</button></a>
                </div>
                </form>

            </div>`
        let borrarButton=document.querySelector("#divPQT")
        borrarButton.innerHTML=""
        html(id,idCreate,innerHTMLFormTC)
        let recargar=document.querySelector("#borrarTC")
        borrarSimulacion(recargar)
    }
}

function borrarSimulacion(button){

    button.addEventListener("click",(e)=>{

      location.reload()
    })    
}
//DETERMINAR TASA
let tasaSueldo=JSON.parse(localStorage.getItem("cliente1"))[0].ps
function TNA(plazo,tasaSueldo){
    if(tasaSueldo=="SI"){
        if(plazo==12){
            return (59/12)
        }else if(plazo==24){
            return (60/12)
        }else if(plazo==36){
            return (61.5/12)
        }else if(plazo==48){
            return (63/12)
        }else if(plazo==60){
            return (66/12)
        }
    }else{
        if(plazo==12){
            return (63/12)
        }else if(plazo==24){
            return (65/12)
        }else if(plazo==36){
            return (67/12)
        }else if(plazo==48){
            return (70/12)
        }else if(plazo==60){
            return (72/12)
        }
    }
}
//AGREGAR MES PARA LA TABLA
const sumaFecha =(fecha)=>{
    let fecha2=fecha.plus({month:1})
    return fecha2

}
//DETERMINAR CUOTA
function determinarCuota(monto,plazo,tasa){
    const fechaActual = DateTime.now();
    let fecha= fechaActual.set({day:10})
    let pagoInt=0
    let pagoCapital=0
    let cuota=0
    let completarTabla=document.querySelector("#completarTabla")
    cuota = monto*(Math.pow(1+(tasa/100),plazo)*(tasa/100))/(Math.pow(1+(tasa/100),plazo)-1)
    console.log((1-(Math.pow(1+(tasa/100),-plazo))))

    let fechas=[]
    fechas.push(fecha)
    for(let i = 1; i <= plazo; i+=1){
        pagoInt= parseFloat(monto*(tasa/100))
        pagoCapital=parseFloat(cuota-pagoInt)
        monto=parseFloat(monto-pagoCapital)
        let iva=pagoInt*0.21
        let cuotaTotal=cuota+iva
        fechas[i]=sumaFecha(fechas[i-1])
        let fila=document.createElement("tr")
        fila.innerHTML=`
        <td>${fechas[i].toLocaleString()}
        <td>${monto.toFixed(2)}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${pagoInt.toFixed(2)}</td>
        <td>${pagoCapital.toFixed(2)}</td>
        <td>${cuota.toFixed(2)}</td>
        <td>${iva.toFixed(2)}</td>
        <td>${cuotaTotal.toFixed(2)}</td>
        `
        fila.className="text-center"
        completarTabla.appendChild(fila)
    }
    let tasaPp=document.querySelector("#prestamo")
    tasaPp.innerHTML=`<p>TNA:${TNA(plazo,tasaSueldo)*12},00%</p><br>`
}
//FUNCION DE REINICIO DE EVENTO pagina principal
function repeatEvent(){
    let bottonReset= document.querySelector("#resetE")
    bottonReset.addEventListener("click",()=>{
        let divClear=document.querySelector("#divResp")
        divClear.innerHTML="";
        divClear.innerHTML=`           
         <div id="divResp">
        <h6 class="secondTitlePers">
            Seleccione un producto:
        </h6>

        <div id="button">
            <button id="tc2" class="btn btn-primary ">Tarjeta de Credito</button>
            <button id="hb2" class="btn btn-primary ">Banca Internet</button>
        </div>

    </div>`;//agregas nuevos elementos
    let selectionTC2=document.querySelector("#tc2")
    let selectionHB2=document.querySelector("#hb2")
    hb(selectionHB2,selectionTC2)
    tc(selectionTC2,selectionHB2)

})}
function hb(selectionHB,selectionTC){
    selectionHB.addEventListener("click", function () {
        selectionHB.disabled=true
        selectionTC.disabled=true
        respClick("divResp",1)
        let formHB = document.querySelector("#formPers")
        formHB.addEventListener("submit", function (e) {
            let bottonProd=document.querySelector("#buttonProd")
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
            let creatHB = document.querySelector("#divResp")
            let inputHB = document.createElement("div")
            //SELECCIONO GENERACION DE CLAVES
            if(valorEleccionHB == clave){
                //si el valor coincide, realizo un nuevo evento para un nuevo html
                let helpClave= document.querySelector("#formPers")
                helpClave.addEventListener("submit", function () {
                    respClickHelp("divResp",1,0,valorEleccionHB,"Banca Internet")
                    let helpClave_2 = document.querySelector("#formPers2")
                    bottonProd.disabled=true
                    helpClave_2.addEventListener("submit",function(e){
                        e.preventDefault()
                        console.log(e)
                        let valorEleccionClave= document.querySelector(`#help`).value
                        let helpClaveConsejo =  document.querySelector(`#${((whatOption(indices[1][0].id,"Banca Internet")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        let helpClaveGeneracion = document.querySelector(`#${((whatOption(indices[1][0].id,"Banca Internet")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                        //CREO DIVS DE RESPUESTA
                        
                        if(valorEleccionClave == helpClaveConsejo){
                            let innerHTMLTKeyConsejo = `<div><p>Las claves a ingresar deben tener minimas medidas de seguridad, haremos un ejemplo de clave.</p>
                            <form id="frase">
                            <label for="ejFrase"> Por Favor, Ingrese una frase: por ejemplo, me recibi de licenciado en adminitracion en 2019: </label>
                            <input type="text" id="ejFrase" class="col-5"><br>
                            <div class="text-center col-12">
                                <button type="submit" class="btn btn-primary">Confirmar</button>
                                <button type="reset" class="btn btn-primary">Borrar</button>
                            </div>
                            </form></div>`
                            html(creatHB,inputHB,innerHTMLTKeyConsejo)                       
    
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
                            <p>Recomendamos que utilices una frase que sea conocida para ti e ingreses solo las primeras letras de las palabras de dicha frase! Suerte!</p>
                            <button type="" class="btn btn-primary" id="resetE">Reiniciar</button>
                            `
                            html(respuesta,respConsejo,innerHTMLTCosnejo)
                            repeatEvent()
    
                            })
    
                        }else if(valorEleccionClave == helpClaveGeneracion){
                            let consejo = document.querySelector("#divResp")
                            let inputClave = document.createElement("div")
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
                                <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                            </div>`
                            html(creatHB,inputHB,innerHTMLTKey)
                            repeatEvent()
                            
                        }
                            
                           })
                })
            }
            //SELECCIONO TOKEN DE SEGURIDAD
    
            else if(valorEleccionHB == token){
                let helpToken= document.querySelector("#formPers")
                helpToken.addEventListener("submit", function () {  
                bottonProd.disabled=true
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
                    //let createtoken = document.querySelector("#divResp")
                    //let inputToken = document.createElement("div")
                    sinToken(valorEleccionToken,helpSinToken,helpTokenBorrar,helpTokenRostro,creatHB,inputHB)
            })})}
            // SELECCIONO TRANSFERENCIAS DE FONDOS
    
            else if(valorEleccionHB == transf){
                let helpTransf= document.querySelector("#formPers")
                helpTransf.addEventListener("click", function () {  
                bottonProd.disabled=true
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
                    if(tieneTD == "SI"){
                        if(valorEleccionTransf==helpBI){
                        //POSEE TOKEND E SEGURIDAD??
                        poseeToken(creatHB,inputHB) 
                        tokenTransf()
                        }else if(valorEleccionTransf==helpBanelco){
                        
                            let innerHTMLTrans=`<div>
                            <p>Ingrese su tarjeta de debito al cajero, luego seleccione a la opcion: transferencias/depositos,transferencia de fondos, tipo de cuenta de donde salen los fondos, CBU destino, verifique titularidad de CBU, concepto, importe y tipo de cuenta destino.</p>
                            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                            </div>`
                            html(creatHB,inputHB,innerHTMLTrans)
                            repeatEvent()
                    }}else{ 
                        let innerHTMLTrans=`<div>
                        <p>Sin tarjeta de Debito no podrá transferir, favor de acercarse a la sucursal mas cercana.</p>
                        <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                        </div>`
                        html(creatHB,inputHB,innerHTMLTrans)
                        repeatEvent()
    
                    }
            })})}
            //SELECCIONE PAGO DE SERVICIOS
            else if(valorEleccionHB == pago){
                let helpPago= document.querySelector("#formPers")
                helpPago.addEventListener("click", function () {
                bottonProd.disabled=true  
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
                    if(tieneTD=="SI"){
                        
                        if(valorEleccionPago==helpPagoBanelco){
                            let innerHTMLPagoResp=`<div>
                                <p>Ingrese a la opcion pagos,seleccione rubro, seleccione codigo de identificacion, seleccione cuenta debito, confirmar.</p>
                                <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                </div>`
                            html(creatHB,inputHB,innerHTMLPagoResp)
                            repeatEvent()
                        }else{ 
                            //POSEE TOKEN DE SEGURIDAD??
                            poseeToken(createPago,inputPago)
                             //SACO VALORES DE RESPUESTA TOKEN
                            let respToken=document.querySelector("#formToken")
                            respToken.addEventListener("submit",function(e){
                                e.preventDefault(e)
                                console.log(e)
                                let respPoseeToken=document.querySelector("#divResp")
                                let valorToken =document.querySelector("#token").value
                                let posee = document.querySelector("#posee").value
                                let noPosee = document.querySelector("#noPosee").value
    
                                if(valorToken==posee){
                                    if(valorEleccionPago==helpPagoServ){
                                        let innerHTMLPagoResp=`<div>
                                            <p>Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro, seleccione sub-rubro, ingrese codigo de identificacion</p>
                                            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                            </div>`
                                        html(creatHB,inputHB,innerHTMLPagoResp)
                                        repeatEvent()
                                    }else if(valorEleccionPago==helpPavoVEP){
                                        let innerHTMLPagoResp=`<div>
                                            <p>Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro: AFIP, seleccione sub-rubro: AFIP VEP, ingrese cuit Contribuyente (deudor), ingrese cuit Generado (quien crea VEP), pagar.</p>
                                            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                            </div>`
                                        html(creatHB,inputHB,innerHTMLPagoResp)
                                        repeatEvent()
                                }} else if(valorToken==noPosee){
                                    let innerHTMLPagoResp= `<div>
                                    <p>Deberá crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos</p>
                                    <p>El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.</p>
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div> `
                                    html(creatHB,inputHB,innerHTMLPagoResp)
                                    repeatEvent()
                                }}  
                           
                    )}}else{ 
                        let innerHTMLPagoSinToken=`<div id="innerHTMLPagoSinToken">
                            <p>Sin tarjeta de Debito no podrá transferir, favor de acercarse a la sucursal mas cercana.</p>
                            <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                            </div>`
                            html(creatHB,inputHB,innerHTMLPagoSinToken)
                            repeatEvent()}
                           
    
    
                })})}
            })})}
function tc(selectionTC,selectionHB){
    selectionTC.addEventListener("click", function () { 
        selectionTC.disabled=true
        selectionHB.disabled=true
        respClick("divResp",0)
        let form = document.querySelector("#formPers")
        form.addEventListener("submit", function tc(e) {
            let bottonProd=document.querySelector("#buttonProd")
            e.preventDefault(console.log(e))    
            let valorEleccionTC = document.querySelector(`#optionSelected`).value
            let planTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[0].producto).split(" ")).join("_").toLowerCase()}`).value
            let intTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[1].producto).split(" ")).join("_").toLowerCase()}`).value
            let blanqueo = document.querySelector(`#${((whatProduct(listaProductos[0].id)[2].producto).split(" ")).join("_").toLowerCase()}`).value
            let saldoTC = document.querySelector(`#${((whatProduct(listaProductos[0].id)[3].producto).split(" ")).join("_").toLowerCase()}`).value
            let createTC = document.querySelector("#divResp")
            let inputTC = document.createElement("div")
            //SELECCIONO EL MENU DE PLAN V
                if(valorEleccionTC == planTC){
                    let helpTC= document.querySelector("#formPers")
                    helpTC.addEventListener("submit", function (e) {  
                        respClickHelp("divResp",2,0,valorEleccionTC,"Tarjeta de Credito")
                        bottonProd.disabled=true
                        let helpTC_2 = document.querySelector("#formPers2")
                        helpTC_2.addEventListener("submit",function(e){
                            e.preventDefault()
                            console.log(e)
                            let valorEleccionPlanV= document.querySelector(`#help`).value
                            let helpPlanInst=  document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            let helpPlanCons= document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            let helpPlanInt = document.querySelector(`#${((whatOption(indices[0][0].id,"Tarjeta de Credito")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
    
                            
                            if(valorEleccionPlanV==helpPlanInst){
                                let innerHTMLTC=`<div><p>La opcion de Plan V la otorga visa, podras ver las opciones en tu resumen de TC, debera pagar el minimo del resumen vigente, luego llamar al telefono indicado 0800-222-CUOTAS. La opcion no aparece en tu resumen deberas realizar la consulta en VISAHOME</p>
                                <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                </div>`
                                html(createTC,inputTC,innerHTMLTC)
                                repeatEvent()
    
                            }else if(valorEleccionPlanV==helpPlanCons){
                                let innerHTMLTC=`<div>
                                <p>La financiacion a la que usted esta accediendo solo abarca el resumen actual, es decir, usted coutificara el saldo restante al pago minimo por el plazo estipulado.</p>
                                <p>CUIDADO: las cuotas faltantes de las compras que figuran en el resumen SEGUIRAN llegando en los proximos resumenes.</p>
                                <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                </div>
                                `
                                html(createTC,inputTC,innerHTMLTC)
                                repeatEvent()
                            }else if(valorEleccionPlanV==helpPlanInt){
                                let innerHTMLTC=`<div id="nuevoInt">
                                <p>Calcularemos la cuota que abonaria segun el plazo y la deuda total</p>
    
                                <form id="interesTC" >
                                    <label for="deuda">ingrese Saldo Actual del Resumen:</label>
                                        <input type="text" id="deuda" class="input col-10"><br>
                                    <label for="pagoMinimo">ingrese Pago Minimo Actual del Resumen: </label>
                                        <input type="text" id="pagoMinimo" class="input col-10"><br>
                                    <label for="plazo">ingrese Plazo de financiacion: </label>
                                        <input type="text" id="plazo" class="input col-10"><br>
                                <button type="submit" class="btn btn-primary">Confirmar</button>
                                <button type="reset" class="btn btn-primary"  >Borrar</button>
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
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div>`
                                    html(nuevoDiv,inputDiv,innerHTMLTC2)
                                    repeatEvent()
                                })
                                
                            }
                    })
                    })} 
                //SELECCIONO EL MENU DE INTERESES DE TARJETA
                else if(valorEleccionTC == intTC){
                    let helpInt= document.querySelector("#formPers")
                    helpInt.addEventListener("submit", function () {  
                        bottonProd.disabled=true
                            e.preventDefault(e)
                            console.log(e)
                            let valorEleccionMora= document.querySelector(`#optionSelected`).value
                            let helpMora=  document.querySelector(`#${((whatOption(indices[0][1].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            if(valorEleccionMora==helpMora){
                                let innerHTMLMora =`
                                <div class"container">
                                <div class="col-12">
                                    <p>En esta seccion calcularemos los intereses punitorios(falta de pago) de tu resumen de TC</p>
                                </div>
                                        <form id="interesTCMora" class="col-12 row" >
                                            <div class="col-12 col-md-6">
                                                <label for="sa">Ingrese el Saldo Actual del resumen:</label><br>
                                                    <input type="text" id="sa" class="input col-10" placeholder="Importe en Pesos($)"><br>
                                                <label for="pm">Ingrese el Pago Minimo del resumen:</label><br>
                                                    <input type="text" id="pm" class="input col-10"  placeholder="Importe en Pesos($)"><br>
                                                <label for="pago">Ingrese pago realizado: </label><br>
                                                    <input type="text" id="pago" class="input col-10"  placeholder="Importe en Pesos($)"><br>
                                            </div>
                                            <div class="col-12 col-md-6">
                                            <br>
                                                <label for="fechaPago">Ingrese fecha de pago:</label><br>
                                                    <input type="date" id="fechaPago" class="input col-10"><br>   
                                                <label for="fechaVenc">Ingrese fecha de Vencimiento del Resumen:</label><br>
                                                    <input type="date" id="fechaVenc" class="input col-10"><br>
                                            </div>
                                            <div class="col-12 text-center">
                                                <button type="submit" class="btn btn-primary" >Confirmar</button>
                                                <button type="reset" class="btn btn-primary" id="" >Borrar</button>
                                            </div>
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
                                console.log(fechaPagoInput>=fechaVencInput)
                                let diasAtraso=(fechaPagoLuxon-fechaVencLuxon)/(1000*60*60*24)
                                console.log(diasAtraso)
                                let tna = 30.30
                                let createTcMora = document.querySelector("#divResp")
                                let inputTcMora = document.createElement("div")
                                    if((pago>=pm) || (fechaPagoInput<=fechaVencInput)){
                                        let innerHTMLMora2=`<div><p>No corresponde abonar Interes Punitorio dado que abono mas o igual de pago minimo dentro de la fecha de vencimiento</p>
                                        <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                        </div>`
                                        html(createTcMora,inputTcMora,innerHTMLMora2)
                                        repeatEvent()
                                    } else{
                                        let saldoPunitorio = pm - pago
                                        let intPunitorio = (saldoPunitorio*(diasAtraso)*tna)/(365*100)
                                        let innerHTMLMora3=`<div><p>Usted abonara ${intPunitorio.toFixed(2)} correspondiente a intereses punitorios</p>
                                        <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                        </div>`
                                        html(createTcMora,inputTcMora,innerHTMLMora3)
                                        repeatEvent()
                                    }
                                
                            })}
    
                    })}
                
                // SELECCIONO BLANQUEO DE TC
                else if(valorEleccionTC == blanqueo){
                    let helpBlanqueo= document.querySelector("#formPers")
                    helpBlanqueo.addEventListener("submit", function (e) {  
                        bottonProd.disabled=true
                        e.preventDefault(e)
                        console.log(e)
                        let valorEleccionBlanqueo= document.querySelector(`#optionSelected`).value
                        let helpTCBlanqueo=  document.querySelector(`#${((whatProduct(listaProductos[0].id)[2].producto).split(" ")).join("_").toLowerCase()}`).value
                        console.log(valorEleccionBlanqueo)
                        console.log(helpTCBlanqueo)
                        if(valorEleccionBlanqueo==helpTCBlanqueo){
                            let innerHTMLBlanqueo=`<div>
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
                            html(createTC,inputTC,innerHTMLBlanqueo)
                            let blanqueoPinTC=document.querySelector("#blanqueoTC")
                            blanqueoPinTC.addEventListener("submit",function(e){
                                e.preventDefault()
                                console.log(e)
                                let createBlanqueoTC2=document.querySelector("#divResp")
                                let inputBlanqueoTC2=document.createElement("div")
                                let poseeTC = document.querySelector("#poseeClave").value
                                let valorClaveTC=document.querySelector("#blanqueo").value
        
                                if(valorClaveTC==poseeTC){
                                    let innerHTMLBlanqueo2=`<div><p>Debe comunicarse al 0810-555-XXXX e ingresar a la opcion operar con sus Productos y allí solicitar el blanqueo</p>
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div>
                                    `
                                    html(createBlanqueoTC2,inputBlanqueoTC2,innerHTMLBlanqueo2)
                                    repeatEvent()
                                }else{
                                    let innerHTMLBlanqueo2=`<div><p>Deberá ingresar a VISAHOME y solicitar el Blanqueo de Pin de la Tarjeta de credito, caso contrario, acercarse a la sucursal mas cercana</p>
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div>`
                                    html(createBlanqueoTC2,inputBlanqueoTC2,innerHTMLBlanqueo2)
                                    repeatEvent()
                                }
                            })
                            
                           
                        }
                        })}
                //SELECCIONO SALDO EN DOLARES DE TC
                else if(valorEleccionTC == saldoTC){
                    let helpSaldo= document.querySelector("#formPers")
                    helpSaldo.addEventListener("submit", function () {  
                        respClickHelp("divResp",2,3,valorEleccionTC,"Tarjeta de Credito")
                        bottonProd.disabled=true
                        let helpSaldo2 = document.querySelector("#formPers2")
                        helpSaldo2.addEventListener("submit",function(e){
                            e.preventDefault(e)
                            let valorEleccionDolar= document.querySelector(`#help`).value
                            let helpDolarCot=  document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[0]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            let helpDolarSaldo= document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[1]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            let helpDolarImp = document.querySelector(`#${((whatOption(indices[0][3].id,"Tarjeta de Credito")[2]).opcion.split(" ")).join("_").toLowerCase()}`).value
                            if(valorEleccionDolar==helpDolarCot){
                                let innerhtmlDolar=`<div>
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
                                html(createTC,inputTC,innerhtmlDolar)
                                let dolarTC=document.querySelector("#dolarTC")
                                dolarTC.addEventListener("submit",function(e){
                                    let createDolarTC2=document.querySelector("#divResp")
                                    let inputDolarTC2=document.createElement("div")
                                    e.preventDefault()
                                    console.log(e)
                                    let valorAbono=document.querySelector("#dolar").value
                                    let abonaPesos = document.querySelector("#abonaPesos").value
                                    
                                if(valorAbono == abonaPesos){
                                    let innerHTMLPesos=`<div><p>La cotización del Dolar que ustede debe abonar es la oficial, dado que los impuestos son cobrados en el resumen en el que los dolares son consumidos.</p>
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div>`
                                    html(createDolarTC2,inputDolarTC2,innerHTMLPesos)
                                    repeatEvent()
                                }else{
                                    let innerHTMLAbonaDolar=`<div><p>Al abonar en dolares, los impuestos seran descontados al cierre del resumen, por lo que debera abonar el saldo en dolares MAS el saldo en pesos menos los impuestos.</p>
                                    <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                    </div>`
                                    html(createDolarTC2,inputDolarTC2,innerHTMLAbonaDolar)
                                    repeatEvent()
                                } })
                            }else if(valorEleccionDolar==helpDolarSaldo){
                                let innerHTMLSaldo= `<div><p>El saldo negativo en pesos significa que usted posee un saldo a Favor, el mismo se ajustara con el saldo a dolares positivo que posee hoy en la Tarjeta de Credito, figura de esta manera dado que la marca realiza la compenzacion al cierre del nuevo resumen.</p>
                               <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                               </div>`
                               html(createTC,inputTC,innerHTMLSaldo)
                               repeatEvent()
                            }else if(valorEleccionDolar==helpDolarImp){
                                let innerHTMLImp= `<div><p>El unico caso en el que los impuestos no deben ser cobrados, es en aquellos productos que el BCRA a determinado, debera verificar en https://www.afip.gob.ar/impuesto-pais/operaciones-y-sujetos/no-alcanzados.asp y en caso de corresponder, Cargar un Reclamo.</p>
                                <button type="" class="btn btn-primary" id="resetE" >Reiniciar</button>
                                </div>`
                               html(createTC,inputTC,innerHTMLImp)
                               repeatEvent()
                            }
                    })
                    })}})})}
                    

    

