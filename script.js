window.onload = function() {

var a = b = 0;
var ch = '';
var click_ravno = btnflag = false;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var ravno = document.getElementById("ravno");
var sqrt = document.getElementById("sqrt");
var procent = document.getElementById("procent");
var clear = document.getElementById("clear");

var btns09 = document.getElementById("btns09");
var mas_btn = [];

for (let i = 9; i >= 0; i--) {
	mas_btn[i] = document.createElement("input");
	mas_btn[i].setAttribute("type", "button");
	mas_btn[i].setAttribute("value", i);
	btns09.appendChild(mas_btn[i]);	
	mas_btn[i].onclick = function() {			
		
		if (document.getElementById("textbox").value.indexOf(".")===-1 &&
		    document.getElementById("textbox").value.charAt(0)==0 || btnflag)
		{
			document.getElementById("textbox").value = i;
			btnflag = false;
		}
		else document.getElementById("textbox").value += i;	
		
	}
}

mas_btn[10] = document.createElement("input");
mas_btn[10].setAttribute("type", "button");
mas_btn[10].setAttribute("value", ",");
btns09.appendChild(mas_btn[10]);
mas_btn[10].onclick = function() {
	if (document.getElementById("textbox").value.indexOf(".")===-1)
		document.getElementById("textbox").value += ".";
}


mas_btn[11] = document.createElement("input");
mas_btn[11].setAttribute("type", "button");
mas_btn[11].setAttribute("value", "+/-");
btns09.appendChild(mas_btn[11]);	
mas_btn[11].onclick = function() {
	document.getElementById("textbox").value = -parseFloat(document.getElementById("textbox").value);	
}

plus.onclick = function() {
	scanf();	
	ch = '+';
}

minus.onclick = function() {
	scanf();	
	ch = '-';
}

mul.onclick = function() {
	scanf();	
	ch = '*';
}

div.onclick = function() {
	scanf();	
	ch = '/';
}

sqrt.onclick = function() {
	document.getElementById("textbox").value = Math.sqrt(parseFloat(document.getElementById("textbox").value));
}

procent.onclick = function() {
	document.getElementById("textbox").value = document.getElementById("textbox").value / 100 * a;
}

clear.onclick = function() {
	document.getElementById("textbox").value = 0;
	a = b = 0;
	ch = '';
	click_ravno = btnflag = false;
}
	

ravno.onclick = function() {	
	if (click_ravno) { 
		b = document.getElementById("textbox").value;
		if (isFinite(b)) {
			b = parseFloat(b);
		}
		else alert("Вы ввели не число!");
	}
	switch (ch) {
		case '+': a = a + b; break;
		case '-': a = a - b; break;
		case '*': a = a * b; break;
		case '/': a = a / b; break;
		default: a = 0;
	}
	
	document.getElementById("textbox").value = a;
	click_ravno = false;
	btnflag = false;
}
	
	
	function scanf() {
		try {	
			a = document.getElementById("textbox").value;
			if (isFinite(a)) {
				a = parseFloat(a);				
				click_ravno = true;
				btnflag = true;
			}
			else alert("Вы ввели не число!");
		}
		catch (exc) {
			alert("Ошибка: " + exc);
		}
	}
}