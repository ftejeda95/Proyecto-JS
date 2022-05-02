/*El presente proyecto consta de crear una pagina web que determine soluciones lo mas precisas posibles dada una cantidad de condiciones a cumplir,
las cuales an sido predeterminadas previamente. ademas calcularan montos de pagos de tarjetas por consumos en dolares, se estimara el interes
por falta de pago de una tarjeta de credito dado los dias y el monto que no hemos abonado y comparar dicho resultado con opciones de financiacion.
se abarcaran por el momento 4 productos, Tarjeta de Credito, Tarjeta de Debito, Banca Digital e Inversiones.*/
let product1 = "tarjeta de credito"
let product2 = "banca digital"
let product3 = "tarjeta de debito"
let product4 = "inversiones"
let help = "Que ayuda necesita"
let clave = "claves"
let token = "token de seguridad"
let transferencia = "transferencia de fondos"
let pagos ="pagos de servicios"
let planV ="plan v TC"
let interesesTC = "intereses generados de TC"
let blanqueo = "blanqueo de pin TC"
let dolaresTC= "pago de dolares TC"
let names = prompt("Bienvenido a Banco Random, por favor ingrese su nombre y apellido: ")
let age = prompt("Por favor ingrese su edad:")
let sueldo = prompt("cobra su sueldo en Banco macro?: ingrese SI/NO")
let helpTransf = "ayuda en transferencia"
//Definicion de ARRAYS clientes
const cliente = [{nombre:names,edad:age,ps:sueldo}]
//DEFINICION DE TIPOLOGIA DE CLIENTES//PLAN SUELDO//MERCADO ABIERTO//JOVEN
class TypeClientes{
    constructor(nombre, edad, ps){
        this.nombre = nombre.toLowerCase();
        this.edad = Number(edad);
        this.ps = ps.toLowerCase();
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


const segmentoCliente= new TypeClientes(names,age,sueldo)

segmentoCliente.tipo()

console.log(segmentoCliente)

alert("Hola " + names.toUpperCase() + " te instruiremos en sobre los productos de Banco Random, sin necesidad de que te acerques a la sucursal")
let td = prompt("Le consultamos: Actualmente posee tarjeta de debito vigente?: SI/NO")
let product = (prompt("Ingrese el numero correspondiente a la consulta del produto:Tarjeta de credito(1), Banca Digital(2), Tarjeta de Debito(3), Inversiones(4)"));


//Consultamos si la opcion esta dentro de los parametros
while (product < 1 || product >= 5){
    alert("El producto indicado no esta disponible, favor ingrese otro");
    product = Number(prompt("Ingrese el numero correspondiente a la consulta del produto:Tarjeta de credito(1), Banca Digital(2), Tarjeta de Debito(3), Inversiones(4)"));
    }
//Que producto Eligio?
const consultaProducto = (product) =>{ 
    if(product == 1){
        return product1
    }
    if(product == 2){
        return product2
    }
    if(product == 3){
        return product3
    }
    if(product == 4){
        return product4
        
    }}
//Dentro del producto banca digital que elegio?
const consultaAccion = (help) =>{ 
    if(help == 1){
        return clave
    }
    else if(help == 2){
        return token
    }
    else if(help == 3){
        return transferencia
    }
    else if(help == 4){
        return pagos
        
    }}
//Eligio bien las opciones?
const validacionConsulta = (help) => {

    if(consultaAccion(help) == clave)
        return true
    else if(consultaAccion(help) == token)
        return true
    else if(consultaAccion(help) == transferencia)
        return true
    else if(consultaAccion(help) == pagos)
        return true
    else{
        return false
    }
}
// funcion de ciclo en opciones de banca digital
if(consultaProducto(product)==product2){
    help = prompt("Favor de indicar otra operacion: Claves(1), Token de Seguridad (2), Transferencias(3), Pagos(4)");
        while (validacionConsulta(help) == false){
            console.log("Accion no disponible, favor ingrese otro");
            help = prompt("Favor de indicar otra operacion: Claves(1), Token de Seguridad (2), Transferencias(3), Pagos(4)");
        }
    }
//Desarrollo de Banca Digital CLAVES 

if(consultaAccion(help) == clave){
        alert("Te indicaremos un ejemplo de clave, sumaremos las primeras letras de cada palabra indicada en la frase");
        key = []
        let frase = prompt("Ingrese una frase: por ejemplo, me recibi de licenciado en adminitracion en 2019");
        frase = frase.split(" ")
        frase.forEach(word=> key.push(word.charAt()))
        alert("Sumando las primeras letras tendremos que su clve es: "+ " "+ key.join("+").toUpperCase());
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
if(consultaAccion(help)== token){
    let helpToken= prompt("Favor de determinar: No poseo token (1), Se borra Constantemente(2), No toma lectura de Rostro(3): ")
    sinToken(helpToken)

    }

//Desarrollo de Banca Digital TRANSFRENCIAS
if(consultaAccion(help)==transferencia){
    helpTransf= prompt("Favor de determinar:Banca Internet(1), Cajero Automatico (2): ")
    if(helpTransf == 1){
        if(td.toLowerCase()== "si"){
            let tokenTransf = prompt("Posee Token Activo?: Si(1), No (2)")
            if(tokenTransf.toLowerCase() == "si"){
                alert("Ingrese a Banca Internet en la opcion Transferencias, Via CBU/ALIAS, ingrese ALIAS/CBU, ingrese Monto y Destino, Ingrese Token de Seguridad")
            }else{
                sinToken(tokenTransf)
            }
        }else{
            alert("Sin tarjeta de Debitono transferir, favor de acercarse a sucursal.")
        }
    }else if(helpTransf.toLowerCase() == "no"){
        if(td.toLowerCase() == "si"){
            alert("Ingrese a la opcion transferencias/depositos,transferencia de fondos, tipo de cuenta de donde salen los fondos, CBU destino, verifique titularidad de CBU, concepto, importe y tipo de cuenta destino.")
        }else{
            alert("Sin tarjeta de Debito no transferir, favor de acercarse a sucursal.")
        }}
}
//Desarrollo de Banca Digital PAGOS
if(consultaAccion(help)== pagos){
    helpPay = prompt("Favor de determinar: Pagos de Servicios(1), VEP(2), Pagos por Cajero(3): ")
    if(helpPay != 3){
        if(td.toLowerCase()== "si"){
            let tokenTransf = prompt("Posee Token Activo?: Si, No")
            if(tokenTransf.toLowerCase() == "si"){
                if(helpPay == 1){
                alert("Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro, seleccione sub-rubro, ingrese codigo de identificacion")
                }else if(helpPay == 2){alert("Ingrese a Banca Internet en la opcion pagos de servicio, nuevo pago, selecciones Rubro: AFIP, seleccione sub-rubro: AFIP VEP, ingrese cuit Contribuyente (deudor), ingrese cuit Generado (quien crea VEP), pagar")}
            }else{
                sinToken(tokenTransf)
            }
        }else{
            alert("Sin tarjeta de Debito no prodra realizar pagos, favor de acercarse a sucursal.")
        }
    }else{
        if(td.toLowerCase() == "si"){
            alert("Ingrese a la opcion pagos,seleccione rubro, seleccione codigo de identificacion, seleccione cuenta debito, confirmar.")
        }else{
            alert("Sin tarjeta de Debito no podra pagar servicios, favor de acercarse a sucursal.")
    }}}

//Tarjeta de credito
indexTC=[1,2,3,4]

let helpTC = "que consulta tiene sobre el producto Tarjeta de Credito?"
if (consultaProducto(product)==product1){
    alert("Excelente, te instruiremos en el producto" + " " + product1.toUpperCase());
    let helpTC = Number(prompt("Ingrese sobre que items tiene inconvenientes: Plan V(1), Interes por Falta de Pago(2), Blanqueo de Pin(3), Pago saldo en Dolares(4)"));
    console.log(indexTC.includes(helpTC))
    while (indexTC.includes(helpTC)==false){
    console.log("Accion no disponible, favor ingrese otro");
    helpTC = Number(prompt("Favor de indicar otra operacion: Plan V(1), Interes por Falta de Pago(2), Blanqueo de Pin(3), Pago saldo en Dolares(4)"));
    }

//Desarrollo de PLAN V

if(helpTC == indexTC[0]){
    let helpPlanV= prompt(names+ " seleccionaste la opcion Plan V, cual es tu consulta?: Como acceder?(1), En que consiste la financiacion?(2), Calculo de interes? (3)")
    if(helpPlanV==1){
        alert("La opcion de Plan V la otorga visa, podras ver las opciones en tu resumen de TC, debera pagar el minimo del resumen vigente, luego llamar al telefono indicado 0800-222-CUOTAS. La opcion no aparece en tu resumen deberas realizar la consulta en VISAHOME")
    }
    else if(helpPlanV==2){
        alert("La financiacion a la que usted esta accediendo solo abarca el resumen actual, es decir, usted coutificara el saldo restante al pago minimo por el plazo estipulado")
        alert("CUIDADO: las cuotas faltantes de las compras que figuran en el resumen SEGUIRAN llegando en los proximos resumenes.")
    }
    else if(helpPlanV==3){
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
        console.log(`usted abonara ${plazo} cuotas de ${cuota}`)
        alert(`usted abonara ${plazo} cuotas de ${cuota} devolviendo en total ${cuota*plazo}`)
    }
}

//Desarrollo de INTERESES DE TC
if(helpTC == indexTC[1]){
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
if(helpTC == indexTC[2]){
    let helpPinTC = prompt("Posee clave Telefonica?: SI(1), NO(2)")
    if(helpPinTC == 1){
        alert("Debe comunicarse al 0810-555-XXXX e ingresar a la opcion Operar con sus Productos y allí solicitar el blanqueo")
    }else{
        alert("Deberá ingresar a VISAHOME y solicitar el Blanqueo de Pin de la Tarjeta de credito, caso contrario, acercarse a la sucursal mas cercana")
    }
}

//Desarrollo de PAGO DE SALDO EN DOLARES
if(helpTC == indexTC[3]){
    helpDolarTC= prompt("Favor de indicar cual es su consulta: Cotización Dolar (1), Saldo en Dolares Positivo y Pesos en Negativo (2), Excencion de Impuestos(3): ")
    if(helpDolarTC == 1){
        let pagoDolar = prompt("Abonara en: Pesos(1), Dolar(2)")
        if(pagoDolar == 1){
            alert("La cotización del Dolar que ustede debe abonar es la oficial, dado que los impuestos son cobrados en el resumen en el que los dolares son consumidos") 
        }else{
            alert("Al abonar en dolares, los impuestos seran descontados al cierre del resumen, por lo que debera abonar el saldo en dolares MAS el saldo en pesos menos los impuestos.")
        }
    }else if(helpDolarTC==2){
        alert("El saldo negativo en pesos significa que usted posee un saldo a Favor, el mismo se ajustara con el saldo a dolares positivo que posee hoy en la Tarjeta de Credito, figura de esta manera dado que la marca realiza la compenzacion al cierre del nuevo resumen.")
    }else if(helpDolarTC==3){
        alert("El unico caso en el que los impuestos no deben ser cobrados, es en aquellos productos que el BCRA a determinado, debera verificar en https://www.afip.gob.ar/impuesto-pais/operaciones-y-sujetos/no-alcanzados.asp y en caso de corresponder, Cargar un Reclamo")
    }
        
}
}
//Tarjeta de Debito
if (consultaProducto(product)==product3){
    alert("Excelente, te instruiremos en el producto" + " " + product3.toUpperCase());
    help = prompt("Ingrese sobre que items tiene inconvenientes: Uso en el exterior(1), Blanqueo de Clave(2), Transferencias(3), Donde esta mi tarjeta(4), Denuncias(5)");
} 

//Inversiones
if (consultaProducto(product)==product4){
    alert("Excelente, te instruiremos en el producto" + " " + product4.toUpperCase());
    help = prompt("Ingrese sobre que items tiene inconvenientes: Simulador Plazp Fijo(1), Medio de Creacion(2), Tipos(3), Titulos(4), FCI(5)");
} 
//Defiinicion de Productos-- simil carrito de compras--
class Productos{
    constructor(nombre, calificacion = true, caracteristicas){
        this.nombre = nombre;
        this.calificacion = calificacion
        this.caracteristicas = caracteristicas
    }
    }
const visa = new Productos("VISA","copiar caracteristicas");
const master = new Productos("MASTER","copiar caracteristicas");
const amex = new Productos("AMERICAN EXPREX","copiar caracteristicas");
const prestamoPersonal = new Productos("Prestamo Personal en Pesos","copiar caracteristicas");
const plazofijoinst = new Productos("Plazo fijo intransferible",false,"copiar caracteristicas");
const plazofijotrans = new Productos("Plazo fijo transferible",false,"copiar caracteristicas");
const plazofijoinstUVA = new Productos("Plazo fijo intransferible UVA",false,"copiar caracteristicas");
