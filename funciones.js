
var boton = document.getElementById("guardar")

boton.addEventListener("click",function(e){

    e.preventDefault()

    var idEstudent = document.getElementById("IdAlumno").value
    var NameEstudent = document.getElementById("Nombre").value
    var Nota1 = document.getElementById("Nota1").value
    var Nota2 = document.getElementById("Nota2").value
    var Nota3 = document.getElementById("Nota3").value

    var flag = false

    if(idEstudent=="" || NameEstudent==""|| Nota1=="" || Nota2==""||Nota3==""){
        alert("Ingrese todos los datos")
    }else{


        Nota1 = parseFloat(Nota1)
        Nota2 = parseFloat(Nota2)
        Nota3 = parseFloat(Nota3)

        if(Nota1>5||Nota2>5||Nota3>5){
            alert("Las notas deben ser entre 1 y 5")
        }else{
         var prom = (Nota1+Nota2+Nota3)/3
        

         if(prom>=3){
             var Estado = "Aprobado"
         }else{
             var Estado = "No aprobado"
         }
         
    
         localStorage.setItem(idEstudent, [idEstudent,NameEstudent,prom,Estado])

         alert("Datos guardados con exito!!!")

        }
    }
   


})