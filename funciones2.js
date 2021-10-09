
var boton = document.getElementById("Reporte")

boton.addEventListener("click", function(e){
    e.preventDefault()

    var identificador = document.getElementById("identificador").value
    
    var identifier = localStorage.getItem(identificador)
    var array = identifier.split(',')

    var ident = document.getElementById("ID")
    ident.innerHTML= array[0]
    var Nomb = document.getElementById("NOMBRE")
    Nomb.innerHTML= array[1]
    var Nota = document.getElementById("PROMEDIO")
    Nota.innerHTML= array[2]
    var status = document.getElementById("ESTADO")
    status.innerHTML= array[3]
  


})