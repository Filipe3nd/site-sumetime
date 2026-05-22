function Verificar() {
    const ValorInput = document.getElementById('clima').value;
    
	if (ValorInput === "") {
		alert("digite um numero!");
		return;
	}
	
	const numero = Number(ValorInput)
	
    if (numero >= 30) {
	    window.location.href = "quente.html";
	}else if (numero <= 15) {
		window.location.href = "frio.html";
	} else {
		window.location.href = "ameno.html";
	}
}
	