import{DateTime,crearSeguro,enviarSolicitud,html,borrarSimulacion,TNA,determinarCuota,sumaFecha}from "./module.js"

//ELEGIR PRODUCTO A CONTRATAR

let simulador=document.querySelector("#simular")
let optionSimular=["Simulador Prestamo Personal","Tarjetas de Credito","Seguros","Simulador Plazo Fijo"]
simulador.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    let buttonSimulador=document.querySelector("#buttonSimulador")
    buttonSimulador.disabled=true
    let simularProducto=document.querySelector("#productoSelect").value
    console.log(simularProducto)
    if(simularProducto==optionSimular[0]){
        let simuladorPrestamo=document.querySelector("#newProduct")
        simuladorPrestamo.style.display="block"
        let resetSimulacion=document.querySelector("#borrarPP")
        borrarSimulacion(resetSimulacion)
    }else if(simularProducto==optionSimular[1]){
        let simuladorTarjeta=document.querySelector("#paq")
        simuladorTarjeta.style.display="block"
        let resetSimulacion=document.querySelector("#borrarPQT")
        borrarSimulacion(resetSimulacion)
    }else if(simularProducto==optionSimular[2]){
        let simuladorPf=document.querySelector("#seguros")
        simuladorPf.style.display="block" 
        let resetSimulacion=document.querySelector("#borrarSeguros")
        borrarSimulacion(resetSimulacion)
    }else if(simularProducto==optionSimular[3]){
        let simuladorSeguros=document.querySelector("#pf")
        simuladorSeguros.style.display="block"
        let resetSimulacionPF=document.querySelector("#borrarPF")
        borrarSimulacion(resetSimulacionPF)
    }
    
})




//SELECCION DE PRESTAMO PERSONAL
let tabla=document.querySelector("#pp")
console.log(tabla)
    tabla.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(e)
        let monto=document.querySelector("#monto")
        monto=Number(monto.value)
        console.log(typeof(monto))
        let plazo=document.querySelector("#plazo")
        plazo=Number(plazo.value)
        let valorPP=[{plazo:plazo},{monto:monto}]
        let valorPPLocal=JSON.stringify(valorPP)
        localStorage.setItem("tomaCredito",valorPPLocal)
        let tasa=TNA(plazo)
        console.log(tasa)
        let tabla=document.querySelector("#completarTabla")
        tabla.style.display="block"
        determinarCuota(monto,plazo,tasa)


       })
// CLIENTE CONTRATA PP
       let contrataPP=document.querySelector("#buttonPP")
       contrataPP.addEventListener("click", function enviar(){
        let divPP=document.querySelector(`#divPP`)
        let seleccion="PP"
        let montopp=JSON.parse(localStorage.getItem("tomaCredito"))[1].monto
        let plazopp=JSON.parse(localStorage.getItem("tomaCredito"))[0].plazo
       enviarSolicitud(divPP,montopp,plazopp,seleccion)
       let formEnviarPP=document.querySelector("#newPD")
       formEnviarPP.addEventListener("submit",(e)=>{
        let buttonConfirmar=document.querySelector("#buttonNewPP")
        buttonConfirmar.disabled=true
        e.preventDefault()
        console.log(e)
        let enviarNombre=document.querySelector("#nombreNew").value
        let enviarDNI=document.querySelector("#dniNew").value
        let enviarCel=document.querySelector("#celNew").value
        let enviarMail=document.querySelector("#mailNew").value
        let enviarIngreso=document.querySelector("#ingreso").value
        let enviarActividad=document.querySelector("#actividad").value
        let enviarPlazo=document.querySelector("#plazopp").value
        
        fetch(`https://jsonplaceholder.typicode.com/posts`, {  
            method:`POST`,
            body: JSON.stringify({
                name: `${enviarNombre}`,
                dni: `${enviarDNI}`,
                celular: `${enviarCel}`,
                mail: `${enviarMail}`,
                producto: `Prestamo Personal`,
                ingreso:`${enviarIngreso}`,
                actividad: `${enviarActividad}`,
                monto:`${montopp}`,
                plazo:`${enviarPlazo}`

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
        let confirmacionEnvio=document.querySelector("#newProduct")
        let mensajeConfirm=document.createElement("div")
        let mensaje= `<p>Su consulta fue enviada con Exito, nos pondremos en contacto con usted.</p>`
        html(confirmacionEnvio,mensajeConfirm,mensaje)
       })
})  
// CLIENTE CONTRATA TC
let contrataTC=document.querySelector("#buttonPQT")
contrataTC.addEventListener("click",()=>{   
    let divPQT=document.querySelector(`#divPQT`)
    let seleccionTC="TC"
    enviarSolicitud(divPQT,"montopp","plazopp",seleccionTC)
    let formEnviarTC=document.querySelector("#newTC")
    formEnviarTC.addEventListener("submit",(e)=>{
    let buttonConfirmarTC=document.querySelector("#buttonNewTC")
    buttonConfirmarTC.disabled=true
     e.preventDefault()
     console.log(e)
     let enviarNombre=document.querySelector("#nombreNew").value
     let enviarDNI=document.querySelector("#dniNew").value
     let enviarCel=document.querySelector("#celNew").value
     let enviarMail=document.querySelector("#mailNew").value
     let enviarIngreso=document.querySelector("#ingreso").value
     let enviarActividad=document.querySelector("#actividad").value
     let enviarPlazo=document.querySelector("#plazoMax").value
     let enviarMarca=document.querySelector("#marca").value
     fetch(`https://jsonplaceholder.typicode.com/posts`, {  
         method:`POST`,
         body: JSON.stringify({
             name: `${enviarNombre}`,
             dni: `${enviarDNI}`,
             celular: `${enviarCel}`,
             mail: `${enviarMail}`,
             producto: `${enviarMarca}`,
             ingreso:`${enviarIngreso}`,
             actividad: `${enviarActividad}`,
             plazo:`${enviarPlazo}`
         }),
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
     })
         .then((response) => response.json())
         .then((json) => console.log(json))
     let confirmacionEnvio=document.querySelector("#paq")
     let mensajeConfirm=document.createElement("div")
     let mensaje= `<p>Su consulta fue enviada con Exito, nos pondremos en contacto con usted.</p>`
     html(confirmacionEnvio,mensajeConfirm,mensaje)
    })
})
//CLIENTE CONTRATA PLAZO FIJO


let formPF=document.querySelector("#simularPF")
formPF.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    let divPF=document.querySelector("#divpf")
    let divPFCreate=document.createElement("div")
    let montoPF=Number(document.querySelector("#montoPF").value)
    let plazoPF=Number(document.querySelector("#plazoPf").value)
    let tipoPF=document.querySelector("#tipoPf").value
    if(tipoPF=="Pesos"){
        let interesPF=0
        interesPF=(montoPF*plazoPF*48)/(365*100)
        let innerHTMLPFIntranf=`<p>La inversion de $${montoPF.toFixed(2)} emitira $${interesPF.toFixed(2)} en ${plazoPF} días`
        html(divPF,divPFCreate,innerHTMLPFIntranf)
    }else if(tipoPF=="Dolar"){
        let interesPF=0
        interesPF=(montoPF*plazoPF*0.1)/(365*100)
        let innerHTMLPFIntranf=`<p>La inversion de U$S${montoPF.toFixed(2)} emitira U$S${interesPF.toFixed(2)} en ${plazoPF} días`
        html(divPF,divPFCreate,innerHTMLPFIntranf)
    }
})

//SELECCION DE SEGURO
let seguros=document.querySelector("#seguros")
let segurosDiv=document.createElement("div")
crearSeguro()

// CLARIDAD EN EL BOTON REGRESAR, ACOMODAR CODIGO.


