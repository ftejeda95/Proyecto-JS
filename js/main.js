/*El presente proyecto consta de crear una pagina web que determine soluciones lo mas precisas posibles dada una cantidad de condiciones a cumplir,
las cuales an sido predeterminadas previamente. ademas calcularan montos de pagos de tarjetas por consumos en dolares, se estimara el interes
por falta de pago de una tarjeta de credito dado los dias y el monto que no hemos abonado y comparar dicho resultado con opciones de financiacion.
se abarcaran por el momento 4 productos, Tarjeta de Credito, Tarjeta de Debito, Banca Digital e Inversiones.*/
//DEFINICION DE VARIABLES
//AYUDA

let help = "Que ayuda necesita"
let helpTC = "Que consulta tiene sobre el producto Tarjeta de Credito?"
let helpTransf = "ayuda en transferencia"

//AYUDA DE HOMEBAKING

let clave = "claves"
let token = "token de seguridad"
let transferencia = "transferencia de fondos"
let pagos ="pagos de servicios"

//AYUDA DE TARJETA DE CREDITO


let interesesTC = "intereses generados de TC"
let blanqueo = "blanqueo de pin TC"
let dolaresTC= "pago de dolares TC"

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
        this.nombre = nombre;
        this.edad = Number(edad);
        this.ps = ps;
        this.segmento = "Plan Sueldo";
    }
    tipo(){
        if(this.edad >= 65 && this.ps == "si"){this.segmento = "Jubilado"}
        else if(this.edad < 65 && this.edad >= 30 &&  this.ps == "si"){ this.segmento = "Plan Sueldo"}
        else if(this.edad < 30 && this.edad >= 18 &&  this.ps == "si"){ this.segmento = "Plan Sueldo Joven"}
        else if(this.ps == "no"){ this.segmento = "Mercado Abierto"}
        else if(this.edad < 18){this.segmento = "Menor de Edad"}
     } 
}

const segmentoCliente= new TypeClientes(names.value,age.value,sueldo.value)
cliente.push(segmentoCliente)

//REFLEJO DE SEGMENTACION EN HTML CLIENTE


    segmentoCliente.tipo()
    let segmentacion = document.getElementById("presetacion")
    let presentacionSeg = document.createElement("div")
    presentacionSeg.innerHTML = "<div><p> Segun lo informado vamos a segmentar el procedimiento dadas las caracteristicas ingresadas</p><ul><li> Edad: "+ age.value + "</li><li> Cobra el sueldo: "+ sueldo.value.toUpperCase() + "</li> <li> Segmento:"+ segmentoCliente.segmento+"</li></ul></div> "
    presentacionSeg.className= "presentacionSeg"
    segmentacion.appendChild(presentacionSeg)
    console.log(segmentoCliente)
    clientes= JSON.stringify(cliente)
    sessionStorage.setItem("cliente1", clientes)
    let prueba = sessionStorage.getItem("cliente1")
    prueba2= JSON.parse(prueba)
    console.log(prueba2)
})

//DEFINICION DE PRODUCTOS

const listaProductos=[{id:1, producto:"Tarjeta de Credito"},{id:2, producto:"Banca Internet"},{id:3, producto:"Tarjeta de debito"},{id:4, producto:"Inversiones"}]
const indexHB=[{id:1, producto:"Claves"},{id:2, producto:"Token de Seguridad "},{id:3, producto:"Transferencias"},{id:4, producto: "Pagos"}]
const indexTC=[{id:1, producto:"Plan V"},{id:2, producto:"Interes por Falta de Pago"},{id:3, producto:"Blanqueo de Pin"},{id:4, producto: "Pago Saldo en Dolares"}]
const dolarTC=[{id:1,opcion:"Cotización Dolar"},{id:2,opcion:"Saldo en Dolares Positivo y Pesos en Negativo "},{id:3,opcion:"Excencion de Impuestos"}]
const planV = [{id:1,opcion:"Instructivo de acceso"},{id:2,opcion:"En que consiste la financiacion?"},{id:3,opcion:"Calculo de interes"}]
const indices = [listaProductos, indexHB, indexTC, dolarTC,planV]

//COMENCEMOS CON LA PERSONALIZACION-- SE PIDE PRODUCTO

alert("Hola " + names.value.toUpperCase() + " te instruiremos en sobre los productos de Banco Random, sin necesidad de que te acerques a la sucursal")
let product = (prompt(`Ingrese el numero correspondiente a la consulta del produto: ${listaProductos[0].producto} (1), ${listaProductos[1].producto} (2), ${listaProductos[2].producto} (3),${listaProductos[3].producto} (4)`));
seleccioneOpcion(listaProductos,product)


//FUNCION QUE ANALIZA PRODUCTO

function seleccioneOpcion(lista,input) {
    while(lista.find((pd)=> pd.id == input)==false){
        console.log("Accion no disponible, favor ingrese otra");
        input= Number(prompt(`Favor de indicar otra operacion: ${lista.producto[0]}(1), ${lista.producto[1]} (2), ${lista.producto[2]} (3),${lista.producto[3]} (4)`));
    }return input
}


// PRIMER FILTRO--SELECCIONOPCION IGUAL A BANCA DIGITAL

if(seleccioneOpcion(listaProductos,product)== 2){
    alert("Excelente, te instruiremos en el producto" + " " + ((listaProductos[1].producto).toUpperCase()));
    help = prompt(`Favor de indicar una operacion:  ${indexHB[0].producto} (1), ${indexHB[1].producto} (2), ${indexHB[2].producto} (3),${indexHB[3].producto} (4)`);
        seleccioneOpcion(indexHB,help)

    }

//Desarrollo de Banca Digital CLAVES 
function iniciales (input) {
    key = []
    frase = input.split(" ")
    frase.forEach(word=> key.push(word.charAt().toLowerCase()))
    return key
} 

if(seleccioneOpcion(indexHB,help)== 1){
        alert("Te indicaremos un ejemplo de clave, sumaremos las primeras letras de cada palabra indicada en la frase");
        let frase = prompt("Ingrese una frase: por ejemplo, me recibi de licenciado en adminitracion en 2019");
        iniciales(frase)
        alert("Sumando las primeras letras tendremos que su clve es: "+ key.join("+").toUpperCase());
        alert("Recomendamos que utilices una frase que sea conocida para ti e ingreses solo las primeras letras de las palabras de dicha frase! Suerte!");
    }
const sinToken= (helpToken) => {
    if(helpToken == 1 || helpToken ==3 || helpToken == "no" ){
        if(td.toLowerCase() == "si"){
            alert("Deberá crear su Token de Seguridad, para ello ingrese al cajero automatico con su Tarjeta de Debito en las siguientes Opciones:Claves,Generacion de claves, Token de Seguridad, tipo documento, Numero de Documento, Clave 6 digitos")
            alert("El cajero emitira Ticket con codigo de activacion, debera ingresarlo en la APP sin necesidad de ingresar el usario en la opcion Token de Seguridad.")
        }else{
            alert("Sin tarjeta de Debito no podra generar Token de Seguridad, favor de acercarse a sucursal.")
        }}    
        else if (helpToken == 2 ){
            alert("Debera desinstalar la app y vincular nuevamente el Token de Seguridad.")
        }
    
}
if(seleccioneOpcion(indexHB,help)== 2){
    let helpToken= prompt("Favor de determinar: No poseo token (1), Se borra Constantemente(2), No toma lectura de Rostro(3): ")
    sinToken(helpToken)
    }

//Desarrollo de Banca Digital TRANSFRENCIAS

//DEFINICION DE FUNCION POSEE TOKEN

const poseeToken = () =>{ 
    if(td.toLowerCase() == "si"){
        let tokenTransf = prompt("Posee Token Activo?: Si, No")
        if(tokenTransf.toLowerCase() == "si")
            return true
        else{return sinToken(tokenTransf)
        }
    }
    else {
        alert("Sin tarjeta de Debito VIGENTE no transferir, favor de acercarse a sucursal.")
    }
    
}
//DEFINICION DE CONDICIONAL PARA OPERAR EN TRANSFERENCIAS

if(seleccioneOpcion(indexHB,help)== 3){
    helpTransf= prompt("Favor de determinar:Banca Internet(1), Cajero Automatico (2): ")
    if(helpTransf == "1"){
        if(poseeToken()==true){
                alert("Ingrese a Banca Internet en la opcion Transferencias, Via CBU/ALIAS, ingrese ALIAS/CBU, ingrese Monto y Destino, Ingrese Token de Seguridad")
            }
    }else if(helpTransf.toLowerCase() == "no"){
        if(td.toLowerCase() == "2"){
            alert("Ingrese a la opcion: transferencias/depositos,transferencia de fondos, tipo de cuenta de donde salen los fondos, CBU destino, verifique titularidad de CBU, concepto, importe y tipo de cuenta destino.")
        }else{
            alert("Sin tarjeta de Debito no podrá transferir, favor de acercarse a la sucursal mas cercana.")
        }}
}

//Desarrollo de Banca Digital PAGOS

if(seleccioneOpcion(indexHB,help)== 4){
    helpPay = prompt("Favor de determinar: Pagos de Servicios(1), VEP(2), Pagos por Cajero(3): ")
    if(helpPay != 3){
        if(poseeToken()==true){
            alert("Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro, seleccione sub-rubro, ingrese codigo de identificacion")
        }
        }else if(helpPay == 2){
            alert("Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro: AFIP, seleccione sub-rubro: AFIP VEP, ingrese cuit Contribuyente (deudor), ingrese cuit Generado (quien crea VEP), pagar")
        
        }else{
            if(td.toLowerCase() == "si"){
                alert("Ingrese a la opcion pagos,seleccione rubro, seleccione codigo de identificacion, seleccione cuenta debito, confirmar.")
        
        }else{
            alert("Sin tarjeta de Debito no podra pagar servicios, favor de acercarse a sucursal.")
    }}}

// SEGUNDO FILTRO--SELECCIONOPCION IGUAL A TARJETA DE CREDITO

if (seleccioneOpcion(listaProductos,product)==1){
    alert("Excelente, te instruiremos en el producto" + " " + ((listaProductos[0].producto).toUpperCase()));
    helpTC = Number(prompt(`Favor de indicar otra operacion: ${indexTC[0].producto} (1), ${indexTC[1].producto} (2), ${indexTC[2].producto} (3),${indexTC[3].producto} (4)`));
    seleccioneOpcion(indexTC,helpTC)
}

//Desarrollo de PLAN V
let helpPlanV = "opciones Plan V"

if(seleccioneOpcion(indexTC,helpTC)== 1){
    helpPlanV= prompt(`${names} seleccionaste la opcion Plan V, cual es tu consulta?:${planV[0].opcion} (1), ${planV[1].opcion} (2),${planV[2].opcion} (3)`)
    if(seleccioneOpcion(planV,helpPlanV) ==1){
        alert("La opcion de Plan V la otorga visa, podras ver las opciones en tu resumen de TC, debera pagar el minimo del resumen vigente, luego llamar al telefono indicado 0800-222-CUOTAS. La opcion no aparece en tu resumen deberas realizar la consulta en VISAHOME")
    }
    else if(seleccioneOpcion(planV,helpPlanV) ==2){
        alert("La financiacion a la que usted esta accediendo solo abarca el resumen actual, es decir, usted coutificara el saldo restante al pago minimo por el plazo estipulado")
        alert("CUIDADO: las cuotas faltantes de las compras que figuran en el resumen SEGUIRAN llegando en los proximos resumenes.")
    }
    else if(seleccioneOpcion(planV,helpPlanV) ==3){
        alert("calcularemos la cuota que abonaria segun el plazo y la deuda total")
        let deuda = Number(prompt("ingrese Saldo Actual del Resumen: "))
        let pagoMinimo = Number(prompt("ingrese Pago Minimo Actual del Resumen: "))
        let plazo = Number(prompt("ingrese Plazo de financiacion: "))
        let tasa = ((0.51/plazo))
        console.log(tasa)
        let saldoAdeudado = (deuda-pagoMinimo);
        let numerador = saldoAdeudado*tasa*((1+tasa)**plazo)
        console.log(numerador+" numerador")
        let denominador= (((1+tasa)**plazo)-1)
        console.log(denominador+" denominador")
        let cuota = numerador / denominador
        cuota = cuota.toFixed(2)
        console.log(`Usted abonara ${plazo} cuotas de ${cuota}`)
        alert(`Usted abonara ${plazo} cuotas de ${cuota} devolviendo en total ${cuota*plazo}`)
    }
}

//Desarrollo de INTERESES DE TC

if(seleccioneOpcion(indexTC,helpTC)== 2){
    alert("En esta seccion calcularemos los intereses punitorios(falta de pago) de tu resumen de TC")
    let sa = prompt("Ingrese el Saldo Actual del resumen: ")
    let pm = prompt("Ingrese el Pago Minimo del resumen: ")
    let pago= prompt("Ingrese pago realizado: ")
    let fechaPago = prompt("Ingrese fecha de pago(solo el dia asumimos que fue en el mes de abril): ")
    let fechaVenc = prompt("Ingrese fecha de Vencimiento del Resumen (solo el dia asumimos que fue en el mes de abril):")
    let diasAtraso= fechaPago-fechaVenc
    let tna = 30.30
    if((pago>=pm) && (fechaPago<=fechaVenc)){
        alert("No corresponde abonar Interes Punitorio dado que abono mas o igual de pago minimo dentro de la fecha de vencimiento")
    } else{
        let saldoPunitorio = pm - pago
        let intPunitorio = (saldoPunitorio*(diasAtraso)*tna)/365
        alert(`usted abonara ${intPunitorio.toFixed(2)} correspondiente a intereses punitorios`)
    }
}

//Desarrollo de BLANQUEO DE PIN TC

if(seleccioneOpcion(indexTC,helpTC)== 3){
    let helpPinTC = prompt("Posee clave Telefonica?: SI(1), NO(2)")
    if(helpPinTC == 1){
        alert("Debe comunicarse al 0810-555-XXXX e ingresar a la opcion Operar con sus Productos y allí solicitar el blanqueo")
    }else{
        alert("Deberá ingresar a VISAHOME y solicitar el Blanqueo de Pin de la Tarjeta de credito, caso contrario, acercarse a la sucursal mas cercana")
    }
}

//Desarrollo de PAGO DE SALDO EN DOLARES

if(seleccioneOpcion(indexTC,helpTC)== 4){
    helpDolarTC= prompt(`Favor de indicar cual es su consulta: ${dolarTC[0].opcion} (1), ${dolarTC[1].opcion} (2), ${dolarTC[2].opcion} (3): `)
    if(seleccioneOpcion(dolarTC,helpDolarTC) == 1){
        let pagoDolar = prompt("Abonara en: Pesos(1), Dolar(2)")
        if(pagoDolar == 1){
            alert("La cotización del Dolar que ustede debe abonar es la oficial, dado que los impuestos son cobrados en el resumen en el que los dolares son consumidos") 
        }else{
            alert("Al abonar en dolares, los impuestos seran descontados al cierre del resumen, por lo que debera abonar el saldo en dolares MAS el saldo en pesos menos los impuestos.")
        }
    }else if(seleccioneOpcion(dolarTC,helpDolarTC) ==2){
        alert("El saldo negativo en pesos significa que usted posee un saldo a Favor, el mismo se ajustara con el saldo a dolares positivo que posee hoy en la Tarjeta de Credito, figura de esta manera dado que la marca realiza la compenzacion al cierre del nuevo resumen.")
    }else if(seleccioneOpcion(dolarTC,helpDolarTC) ==3){
        alert("El unico caso en el que los impuestos no deben ser cobrados, es en aquellos productos que el BCRA a determinado, debera verificar en https://www.afip.gob.ar/impuesto-pais/operaciones-y-sujetos/no-alcanzados.asp y en caso de corresponder, Cargar un Reclamo")
    }
        
}

//Tarjeta de Debito

if (seleccioneOpcion(listaProductos,product)==3){
    alert("Excelente, te instruiremos en el producto" + " " + product3.toUpperCase());
    help = prompt("Ingrese sobre que items tiene inconvenientes: Uso en el exterior(1), Blanqueo de Clave(2), Transferencias(3), Donde esta mi tarjeta(4), Denuncias(5)");
} 

//Inversiones

if (seleccioneOpcion(listaProductos,product)==4){
    alert("Excelente, te instruiremos en el producto" + " " + product4.toUpperCase());
    help = prompt("Ingrese sobre que items tiene inconvenientes: Simulador Plazp Fijo(1), Medio de Creacion(2), Tipos(3), Titulos(4), FCI(5)");
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
const debito = new Productos("Tarjeta de Debito Visa", false, "Tarjeta que permite operar en Banelco y realizar cuenta desde Cuentas")

const categoriaproductos = [visa,master,amex,prestamoPersonal,plazofijoinst,plazofijotrans,plazofijoinstUVA,bancaInternet,debito]
let catProducto= document.getElementById("productosCarrito")
for(const producto of categoriaproductos){
    let div = document.createElement("div");
    let clasificacion = "definicion de clasificaicon producto"
    if(producto.calificacion==true){clasificacion = "SI"}else{clasificacion ="NO"}
    div.innerHTML = `Nombre del Producto: ${producto.nombre}, Necesita Calificacion: ${clasificacion}, Caracteristicas: ${producto.caracteristicas} \n` ;
    catProducto.appendChild(div);   
    div.className = "text"
}

//USO DEL DOM y EVENTO

function validarFormulario (evt){
    evt.preventDefault();
    console.log(evt)

    }   
 
function eventPropagation (evt){
    evt.stopPropagation();
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
function respClick(etiqueta,prodIndex){

    let elemento = document.querySelector(`#${etiqueta}`)
    let intruccion = document.createElement("div")
    intruccion.innerHTML = `
    <p>Excelente! lo instruiremos es el Producto ${listaProductos[prodIndex].producto} </p>
    <form id="formPers">
        <label for="optionSelected">Seleccione un opcion para continuar:</label>
            <select id="optionSelected">
            <option selected></option>
              <option id="option1">${whatProduct(listaProductos[prodIndex].id)[0].producto}</option>
              <option id="option2">${whatProduct(listaProductos[prodIndex].id)[1].producto}</option>
              <option id="option3">${whatProduct(listaProductos[prodIndex].id)[2].producto}</option>
              <option id="option4">${whatProduct(listaProductos[prodIndex].id)[3].producto}</option>
            </select>
            <button type="submit" id="envio">Confirmar</button>
    </form>`;

    intruccion.className="text"
    elemento.appendChild(intruccion)
    console.log(iniciales(whatProduct(listaProductos[prodIndex].id)[0].producto))
}  
console.log(indices[2][0].producto)

let selectionTC= document.querySelector("#tc")
selectionTC.addEventListener("click", function () { 
    respClick("divResp",0)
    let form = document.querySelector("#formPers")
    form.addEventListener("submit", validarFormulario)
    let confirmar = document.querySelector("#envio")

    confirmar.addEventListener("click", function() {
        let valorEleccion = document.querySelector(`#optionSelected`).value
        console.log(valorEleccion)
        let planTC = document.querySelector(`#option1`).value
        let intTC = document.querySelector(`#option2`).value
        let blanqueo = document.querySelector(`#option3`).value
        let saldoTC = document.querySelector(`#option4`).value
        console.log(planTC)
    
        if(valorEleccion == planTC){
            let helpTC= document.querySelector("#envio")
            helpTC.addEventListener("click", function () {  
            respClickHelp("divResp",4,0,valorEleccion)
            return 
            })
        }
        if(valorEleccion == intTC){
            let helpTC= document.querySelector("#formPers")
            helpTC.addEventListener("click", function () {  
            respClickHelp("divResp",2,1)
            return 
            })
        }
        if(valorEleccion == blanqueo){
            let helpTC= document.querySelector("#formPers")
            helpTC.addEventListener("click", function () {  
            respClickHelp("divResp",2,2)
            return 
            })
        }
        if(valorEleccion == saldoTC){
            let helpTC= document.querySelector("#formPers")
            helpTC.addEventListener("click", function () {  
            respClickHelp("divResp",2,3)
            return 
            })
        }
    

        
    

        
    })})



let selectionHB = document.querySelector("#hb")
selectionHB.addEventListener("click", () => respClick("divResp",1))

function whatOption(idOption){
    if(idOption == 1){
        return planV
    }else if(idOption == 2) {
        return intTC
    }else if(idOption == 3) {
        return blanqueo
    }else if(idOption == 4) {
        return dolarTC

}}
console.log(indices[4].length )
function respClickHelp(etiqueta,lista,prodIndex,valorEleccion){

    let elemento = document.querySelector(`#${etiqueta}`)
    let intruccion = document.createElement("div")
    
    if(indices[lista].length == 3){
        intruccion.innerHTML = `
    <p>Seleccionaste la opcion ${valorEleccion}, cual es tu consulta?</p>
    <form id="formPers">
        <label for="help"></label>
            <select id="help">
            <option selected></option>
            
                <option id="segOpcion1">${whatOption(indices[lista][prodIndex].id)[0].opcion}</option>
                <option id="segOpcion2">${whatOption(indices[lista][prodIndex].id)[1].opcion}</option>
                <option id="segOpcion3">${whatOption(indices[lista][prodIndex].id)[2].opcion}</option>
           
              
            </select>
            <button type="submit" id="formPersOk">Confirmar</button>
    </form>`}else if(indices[lista].length == 4){
                intruccion.innerHTML = `
                <option id="segOpcion1">${whatOption(indices[lista][prodIndex].id)[0].opcion}</option>
                <option id="segOpcion2">${whatOption(indices[lista][prodIndex].id)[1].opcion}</option>
                <option id="segOpcion3">${whatOption(indices[lista][prodIndex].id)[2].opcion}</option>
                <option id="segOpcion4">${whatOption(indices[lista][prodIndex].id)[3].opcion}</option>
                </select>
            <button type="submit" id="formPersOk">Confirmar</button>
    </form>`
    }
    //let form = document.querySelector("#formPers")
    //form.addEventListener("submit", validarFormulario)
    intruccion.className="text"
    elemento.appendChild(intruccion)
} 
/*
function respClickTC(){

    let tarjetaCredito = document.getElementById("divResp")
    let intruccionTC = document.createElement("div")
    intruccionTC.innerHTML = `
    <p>Excelente! lo instruiremos es el Producto TARJETA DE CREDITO</p>
    <form>
    <label for="productoTC">Seleccione un opcion para continuar:</label>
        <select id="productoTC" id="productoTC">
        <option selected></option>
          <option value="PlanV">${indexTC[0].producto}</option>
          <option value="Int">${indexTC[1].producto}</option>
          <option value="BlanqueTC"> ${indexTC[2].producto}</option>
          <option value="PagoTC">${indexTC[3].producto}</option>
        </select>
        <button type="submit" >Confirmar</button>
    </form>`;
    
    intruccionTC.className="text"
    tarjetaCredito.appendChild(intruccionTC)
}*/
 //VER DE HACER UN CLICK DE EL LABEL
 
   /*
   
const optionHB=["Claves", "Token de Seguridad", "Transferencias", "Pagos"]
   function respClickHB(){
        let homebanking = document.getElementById("divResp")
        let intruccionHb = document.createElement("div")
        intruccionHb.innerHTML = `<div>
        <form id="formHB">
        <p>Excelente! lo instruiremos es el Producto BANCA INTERNET, seleccione solo un producto a consultar:</p>

        <label for="Clave">${indexHB[0].producto}</label>
        <input type="radio" id="clave" value="Clave" name="Claves"/>

        <label for="Token">${indexHB[1].producto}</label>
        <input type="radio" id="Token" value="Token" name="Token de Seguridad"/>

        <label for="Transf">${indexHB[2].producto}</label>
        <input type="radio" id="Transf" value="Transf" name="Transferencias"/>

        <label for="Pago">${indexHB[3].producto}</label>
        <input type="radio" id="Pago" value="Pago" name="Pagos"/>

        <button type="submit">Confirmar</button>
        </form></div>`;
        homebanking.appendChild(intruccionHb)
        intruccionHb.className="text"
        let miFormulario = document.getElementById("formHB");
        miFormulario.addEventListener("submit", validarFormulario);
        let valorformHB = miFormulario.value
        console.log(valorformHB);
       }
*/