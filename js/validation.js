const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector("#nombreHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const detalle = document.querySelector("#detalle")
const detalleHelp = document.querySelector("#detalleHelp")



form.addEventListener("submit", (event) =>{
	event.preventDefault()
if (nombre.value === "" || email.value === "" || detalle.value === "") {
  
  if (nombre.value ==="") {
  	nombreHelp.innerText = "*Campo obligatorio!!!*"
  }

  if (email.value ==="") {
  	emailHelp.innerText = "*Campo obligatorio!!!*"
  }
  if (detalle.value ==="") {
	detalleHelp.innerText = "*Campo obligatorio!!!*"
}

} else {
	form.enviar()
}
})