// JavaScript Document

/*search */
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



// Creating a function to remove item from list
function removeItem() {
  // Declaring a varible to get select element
  var a = document.getElementById("cartlist");
  var cardetails = document.getElementById("cartListClose");
  var item = document.getElementById(cardetails.value);
  a.removeChild(item);
}

/*Retrieve field

var items = document.querySelectorAll("#myUL a");
for (var i = 0; i < items.length; i++)
{
    items[i].onclick = function(){
    	
        document.getElementById("cart").value = this.innerHTML;
    	
        };
}

/*Car-Model 
var items = document.querySelectorAll("#myUL-model a");
for (var i = 0; i < items.length; i++)
{
    items[i].onclick = function(){
    	
        document.getElementById("cart").value = this.innerHTML;
    	
        };
}

/*Fuel 
var items = document.querySelectorAll("#myUL-fuel a");
for (var i = 0; i < items.length; i++)
{
    items[i].onclick = function(){
    	
        document.getElementById("cart").value = this.innerHTML;
    	
        };
}



var items = (document.querySelectorAll('#myUL li a, #myUL-model li a, #myUL-fuel li a'));
for (var i = 0; i < items.length; i++)
{
    items[i].onclick = function(){
    	
        document.getElementById("cart").value = this.innerHTML;
    	
        };
}

*/

$("#myUL").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmanu").val($this.data("value"));
});

//Modal BMW
$("#myUL-model").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Chevrolet
$("#myUL-Chevro").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Daewoo
$("#myUL-Daewoo").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Datsun
$("#myUL-Datsun").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Fiat
$("#myUL-Fiat").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Ford
$("#myUL-Ford").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Honda
$("#myUL-Honda").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Modal Hyundai
$("#myUL-Hyundai").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});
//Modal Mahindra
$("#myUL-Mahindra").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});
//Modal Maruti
$("#myUL-Maruti").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cmodel").val($this.data("value"));
});

//Fuel
$("#myUL-fuel").on("click", "a", function (e) {
  e.preventDefault();
  var $this = $(this).parent();
  $this.addClass("select").siblings().removeClass("select");
  $("#cfuel").val($this.data("value"));
});
