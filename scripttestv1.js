//poczatek
function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}
//koniec

//poczatek
function perc1() {
	a = document.form1.a.value.replace(',', '.') / 100;
	b = a * document.form1.b.value.replace(',', '.');
	document.form1.total1.value = b;
}
function perc2() {
	a = document.form2.c.value.replace(',', '.');
	b = document.form2.d.value.replace(',', '.');
	c = a / b;
	d = c * 100;
	document.form2.total2.value = d;
}
function perc3() {
	a = document.form3.e.value.replace(',', '.');
	b = document.form3.f.value.replace(',', '.');
	c = (b - a) / a;
	d = c * 100;
	document.form3.total3.value = d;
}
function perc4() {
	a = document.form4.g.value.replace(',', '.');
	b = document.form4.h.value.replace(',', '.');
	c = a - -((b / 100) * a);
	document.form4.total4.value = c;
}
function perc5() {
	a = document.form5.i.value.replace(',', '.');
	b = document.form5.j.value.replace(',', '.');
	c = a - (b / 100) * a;
	document.form5.total5.value = c;
}
//koniec

//poczatek
function mycopyfunction() {
	var copyText = document.getElementById('mykopiuInput');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');

	var tooltip = document.getElementById('myTooltip');
	tooltip.innerHTML = 'Skopiowano';
}

function outFunc() {
	var tooltip = document.getElementById('myTooltip');
	tooltip.innerHTML = 'Kopiuj';
}
//koniec

//poczatek
function mywstawFunction() {
	var x = document.getElementById('myDIV');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}
//koniec

//poczatek
function reset1() {
	document.getElementById('form1').reset();
}
function reset2() {
	document.getElementById('form2').reset();
}
function reset4() {
	document.getElementById('form4').reset();
}
function reset5() {
	document.getElementById('form5').reset();
}
function reset3() {
	document.getElementById('form3').reset();
}
//koniec

//skrypt historia i zapisz

var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = 'none';
	};
}

var list = document.querySelector('ul');
list.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},
	false
);

function newElement(type) {
	var li = document.createElement('li');

	const text = getTextFromType(type);

	var t = document.createTextNode(text);

	li.appendChild(t);

	document.getElementById('myUL').appendChild(li);

	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		};
	}
}

function getTextFromType(type) {
	switch (type) {
		case 1:
			return `${document.querySelector('input[name="a"]').value}% z ${document.querySelector('input[name="b"]').value} = ${document.querySelector('input[name="total1"]').value}`;
		case 2:
			return `${document.querySelector('input[name="c"]').value} dla ${document.querySelector('input[name="d"]').value} = ${document.querySelector('input[name="total2"]').value}%`;
		case 3:
			return `${document.querySelector('input[name="g"]').value} + ${document.querySelector('input[name="h"]').value}% = ${document.querySelector('input[name="total4"]').value}`;
		case 4:
			return `${document.querySelector('input[name="i"]').value} - ${document.querySelector('input[name="j"]').value}% = ${document.querySelector('input[name="total5"]').value}`;
		case 5:
			return `${document.querySelector('input[name="e"]').value} do ${document.querySelector('input[name="f"]').value} wzrosło/zmalało o ${
				document.querySelector('input[name="total3"]').value
			}%`;
		default:
			return '';
	}
}

//koniec skrypt historia i zapisz

//poczatek KW
function mykwfunction(index) {
	var copyText = document.querySelector(`input[name="total${index}"]`);
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');
}
//koniec KW

//poczatek KR
function mykrfunction(index) {
	var copyText = getTextFromType(index);
	const newInput = document.createElement('input');
	newInput.type = 'text';
	newInput.value = copyText;
	newInput.style.opacity = 0;
	document.body.appendChild(newInput);

	newInput.select();
	newInput.setSelectionRange(0, 99999);
	document.execCommand('copy');

	document.body.removeChild(newInput);
}
//koniec KR
