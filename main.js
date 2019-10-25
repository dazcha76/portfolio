$(document).ready(function(){
	$(".mobile, .mobile_link").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});
});

function validateForm(){
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();

  $("#missing_name").css("display","none");
  $("#missing_email").css("display","none");
  $("#missing_message").css("display","none");

  if(name === "" && email === "" && message === ""){
    $("#missing_name").css('display', 'block');
    $("#missing_email").css('display', 'block');
    $("#missing_message").css('display', 'block');
    return false;
  } else if(name === "" && email === ""){
    $("#missing_name").css('display', 'block');
    $("#missing_email").css('display', 'block');
    return false;
  } else if(name === "" && message === ""){
    $("#missing_name").css('display', 'block');
    $("#missing_message").css('display', 'block');
    return false;
  } else if(email === "" && message === ""){
    $("#missing_email").css('display', 'block');
    $("#missing_message").css('display', 'block');
    return false;
  } else if (name === "") {
    $("#missing_name").css('display', 'block');
    return false;
  } else if(email === ""){
    $("#missing_email").css('display', 'block');
    return false;
  } else if(message === ""){
    $("#missing_message").css('display', 'block');
    return false;
  } else {
    return true;
  } 
}