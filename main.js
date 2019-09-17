$(document).ready(function(){
	$(".mobile, .mobile_link").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});

  $('.fa-video').click(showMovie);
  $('.fa-times').click(hideMovie);

  $('#all').click(showAll);
  // $('#javascript').click(showJavaScript);
  $('#jquery').click(showJQuery);
  $('#react').click(showReact);
  $('#ruby').click(showRuby);
  $('#wordpress').click(showWordPress);

  // appHeight();
});

$(window).resize(function(){
  appHeight();
});

function showMovie(){
  $('.video-modal').removeClass('hidden');
  $('body').addClass('no-scroll');
  setTimeout(playMovie, 1500)
}

function playMovie(){
  document.getElementById("appVideo").play();
}

function hideMovie(){
  $('.video-modal').addClass('hidden');
  $('body').removeClass('no-scroll');
  document.getElementById("appVideo").load();
}

function showAll(){
  // $('.javascript').removeClass('hidden');
  $('.jquery').removeClass('hidden');
  $('.react').removeClass('hidden');
  $('.ruby').removeClass('hidden');
  $('.wordpress').removeClass('hidden');
}

// function showJavaScript(){
//   showAll();
//   $('.jquery').addClass('hidden');
//   $('.react').addClass('hidden');
//   $('.ruby').addClass('hidden');
// }

function showJQuery(){
  showAll();
  // $('.javascript').addClass('hidden');
  $('.react').addClass('hidden');
  $('.ruby').addClass('hidden');
  $('.wordpress').addClass('hidden');
}

function showReact(){
  showAll();
  // $('.javascript').addClass('hidden');
  $('.jquery').addClass('hidden');
  $('.ruby').addClass('hidden');
  $('.wordpress').addClass('hidden');
}

function showRuby(){
  showAll();
  // $('.javascript').addClass('hidden');
  $('.jquery').addClass('hidden');
  $('.react').addClass('hidden');
  $('.wordpress').addClass('hidden');
}

function showWordPress(){
  showAll();
  // $('.javascript').addClass('hidden');
  $('.jquery').addClass('hidden');
  $('.react').addClass('hidden');
  $('.ruby').addClass('hidden');
}

function showConfirmation(){
  $('#emailConfirm').removeClass('hidden');
}

function hideConfirmation(){
  $('#emailConfirm').addClass('hidden');
}

function appHeight(){
  var appHeight = $('.ruby').height();
  $('.wordpress, .react, .jquery').css('height', appHeight)
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

  setTimeout(showConfirmation, 2000);
  setTimeout(hideConfirmation, 5000);
}