$(document).ready(function(){
	$(".mobile, .mobile_link").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});
});

function validateForm(){
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;

	document.getElementById("missing_name").style.display = "none";
	document.getElementById("missing_email").style.display = "none";
	document.getElementById("missing_message").style.display = "none";

	if(name === "" && email === "" && message === ""){
		document.getElementById("missing_name").style.display = "block";
		document.getElementById("missing_email").style.display = "block";
		document.getElementById("missing_message").style.display = "block";
		return false;
	} else if(name === "" && email === ""){
		document.getElementById("missing_name").style.display = "block";
		document.getElementById("missing_email").style.display = "block";
		return false;
	} else if(name === "" && message === ""){
		document.getElementById("missing_name").style.display = "block";
		document.getElementById("missing_message").style.display = "block";
		return false;
	} else if(email === "" && message === ""){
		document.getElementById("missing_email").style.display = "block";
		document.getElementById("missing_message").style.display = "block";
		return false;
	} else if (name === "") {
    document.getElementById("missing_name").style.display = "block";
    return false;
  } else if(email === ""){
		document.getElementById("missing_email").style.display = "block";
    return false;
  } else if(message === ""){
		document.getElementById("missing_message").style.display = "block";
    return false;
  } else {
  	return true;
  }
}