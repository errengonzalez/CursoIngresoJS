/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//txtIdNombre
	
	var nombreDelEmpleado;
	nombreDelEmpleado = prompt("ingrese el nombre");
	txtIdNombre.value = nombreDelEmpleado;
}

/* 
entradas: prompt, id.value o document.getelementbyid("...").value
procesos: concatenar (+)
salidas: alert, console.log, document.write, o document.getelementbyid("...").value
*/