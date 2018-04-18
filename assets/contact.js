$(document).ready(function() {
var name ="";
var email = "";
var message = "";

$("#submit").on("click",function(event)
{
  event.preventDefault();

 message = $("#FormControlTextarea1").val();
 console.log(message);
 
})
})
