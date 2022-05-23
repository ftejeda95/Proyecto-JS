


/*
if(seleccioneOpcion(indexHB,help)== 1){
        alert("Te indicaremos un ejemplo de clave, sumaremos las primeras letras de cada palabra indicada en la frase");
        let frase = prompt("Ingrese una frase: por ejemplo, me recibi de licenciado en adminitracion en 2019");
        iniciales(frase)
        alert("Sumando las primeras letras tendremos que su clve es: "+ key.join("+").toUpperCase());
        alert("Recomendamos que utilices una frase que sea conocida para ti e ingreses solo las primeras letras de las palabras de dicha frase! Suerte!");
    }

if(seleccioneOpcion(indexHB,help)== 2){
    
    let helpToken= prompt("Favor de determinar: No poseo token (1), Se borra Constantemente(2), No toma lectura de Rostro(3): ")
    sinToken(helpToken)
    }

//Desarrollo de Banca Digital TRANSFRENCIAS


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
*/
// SEGUNDO FILTRO--SELECCIONOPCION IGUAL A TARJETA DE CREDITO
/*
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
*/
//Desarrollo de INTERESES DE TC
/*

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
*/
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
