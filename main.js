$(document).ready(function(){
  // $(document).scroll(function(){
  //   $("nav").css("animation-name", "lower_nav")
  //   $(".circle").removeClass("logo").addClass("logo-move");
  //   $(".first").removeClass("d").addClass("d-move");
  //   $(".second").removeClass("q").addClass("q-move");
  // });

  logo_nav_animation();

	$(".mobile, .mobile_link").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});
});

function logo_nav_animation(){
  $("nav").css("animation-name", "lower_nav")
  // $(".circle").removeClass("logo").addClass("logo-move");
  // $(".first").removeClass("d").addClass("d-move");
  // $(".second").removeClass("q").addClass("q-move");
}

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