var value1 = document.getElementById('value1').innerHTML;
var value2 = document.getElementById('value2').innerHTML;
var value3 = document.getElementById('value3').innerHTML;
var value4 = document.getElementById('value4').innerHTML;
var mult=4;
function output(){
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
	var value3 = document.getElementById('value3').value;
	var value4 = document.getElementById('value4').value;

    document.getElementById('result').innerHTML = (parseInt(value1) + parseInt(value2)+ parseInt(value3)+ parseInt(value4))/mult;
}
