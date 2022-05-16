function respClickHelp(etiqueta,lista,prodIndex){

    let elemento = document.querySelector(`#${etiqueta}`)
    let intruccion = document.createElement("div")
    intruccion.innerHTML = `
    <p>seleccionaste la opcion${indices[lista][prodIndex].producto}, cual es tu consulta?</p>
    <form id="formPers">
        <label for="${indices[lista][prodIndex].producto}"></label>
            <select id="${indices[lista][prodIndex].producto}"">
            <option selected></option>
              <option id="${iniciales(whatOption(indices[lista][prodIndex].id)[0].producto)}">${whatOption(indices[lista][prodIndex].id)[0].producto}</option>
              <option id="${iniciales(whatOption(indices[lista][prodIndex].id)[1].producto)}">${whatOption(indices[lista][prodIndex].id)[1].producto}</option>
              <option id="${iniciales(whatOption(indices[lista][prodIndex].id)[2].producto)}">${whatOption(indices[lista][prodIndex].id)[2].producto}</option>
              <option id="${iniciales(whatOption(indices[lista][prodIndex].id)[3].producto)}">${whatOption(indices[lista][prodIndex].id)[3].producto}</option>
            </select>
            <button type="submit" id="formPersOk">Confirmar</button>
    </form>`;
    //let form = document.querySelector("#formPers")
    //form.addEventListener("submit", validarFormulario)
    intruccion.className="text"
    elemento.appendChild(intruccion)
}  

let selectionTC= document.querySelector("#tc")
selectionTC.addEventListener("click", function () { 
    respClick("divResp",0)
    
    let form = document.querySelector("#formPers")
    form.addEventListener("submit", validarFormulario)
    let planTC = document.querySelector(`#${iniciales(whatProduct(listaProductos[0].id)[0].producto)}`).value
    let intTC = document.querySelector(`#${iniciales(whatProduct(listaProductos[0].id)[1].producto)}`).value
    let pinTC = document.querySelector(`#${iniciales(whatProduct(listaProductos[0].id)[2].producto)}`).value
    let saldoTC = document.querySelector(`#${iniciales(whatProduct(listaProductos[0].id)[3].producto)}`).value
    let eleccion = document.querySelector(`#${listaProductos[0].producto}`)
        if(eleccion == planTC){
            let helpTC= document.querySelector("#formPersOk")
            helpTC.addEventListener("click", function () {  
            respClickHelp("divResp",2,0)
    

        
    })}})
    function whatOption(idOption){
        if(idOption == 0){
            return planV
        }else if(idOption == 1) {
            return intTC
        }else if(idOption == 2) {
            return pinTC
        }else if(idOption == 3) {
            return dolarTC
    
    }}
