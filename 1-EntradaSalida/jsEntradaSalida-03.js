/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
gonzalez rodrigo nelson
*/


function mostrar()
{
	var nombreDelAlumno;//por id
	var edadDelAlumno;//por prompt

	nombreDelAlumno=document.getElementById("txtIdNombre").value; //para almacenar un dato ingresado dentro de un input, llamandolo mediante id
	edadDelAlumno = prompt("ingrese su edad", "Por ej 15");// cuadro de dialogo con el usuario

	alert("Ud se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " su edad"); //muestra el resultado de las variables sumadas
}
