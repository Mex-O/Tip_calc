
function calc_tip(){
var no1=document.getElementById('no1');
var no2=document.getElementById('no2');
var service=document.getElementById('service');
var tip_btn=document.getElementById('tib_btn');
	 no1=no1.value;
	 no2=no2.value;
	 service=(service.value)/10;
	let tip=(no1*service)/no2;
	let tip_el= document.querySelector('.tip-wrap .tip');
	tip_el.innerText = '$' + tip.toFixed(2) + ((no2 > 1) ? ' each' : '');;
	}