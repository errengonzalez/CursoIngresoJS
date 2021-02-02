/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
gonzalez rodrigo nelson */
function mostrar()
{	
	var nombreDelAlumno;
	var apellidoDelAlumno;
	var edadDelAlumno;

	nombreDelAlumno = document.getElementById("txtIdNombre").value;
	apellidoDelAlumno=prompt("ingrese su apellido")
	edadDelAlumno=document.getElementById("txtIdEdad").value;

	alert("usted se llama " + nombreDelAlumno + " su apellido es " + apellidoDelAlumno + " y tiene " + edadDelAlumno);

}

