/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = prompt("ingrese su nombre", "roberto garcia moritan")// El método prompt () muestra un cuadro de diálogo que solicita al visitante una entrada.
	alert("su nombre es " + nombre);
}
