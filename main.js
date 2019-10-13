$(document).ready(function(){
	$(".mobile, .mobile_link").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});

  // $('.fa-video').click(showMovie);
  // $('.fa-times').click(hideMovie);

  // $('#all').click(showAll);
  // $('#javascript').click(showJavaScript);
  // $('#jquery').click(showJQuery);
  // $('#react').click(showReact);
  // $('#ruby').click(showRuby);
  // $('#wordpress').click(showWordPress);

  // appHeight();
});

// $(window).resize(function(){
//   appHeight();
// });

// function showMovie(){
//   $('.video-modal').removeClass('hidden');
//   $('body').addClass('no-scroll');
//   setTimeout(playMovie, 1500)
// }

// function playMovie(){
//   document.getElementById("appVideo").play();
// }

// function hideMovie(){
//   $('.video-modal').addClass('hidden');
//   $('body').removeClass('no-scroll');
//   document.getElementById("appVideo").load();
// }

// function showAll(){
  // $('.javascript').removeClass('hidden');
//   $('.jquery').removeClass('hidden');
//   $('.react').removeClass('hidden');
//   $('.ruby').removeClass('hidden');
//   $('.wordpress').removeClass('hidden');
// }

// function showJavaScript(){
//   showAll();
//   $('.jquery').addClass('hidden');
//   $('.react').addClass('hidden');
//   $('.ruby').addClass('hidden');
// }

// function showJQuery(){
//   showAll();
//   // $('.javascript').addClass('hidden');
//   $('.react').addClass('hidden');
//   $('.ruby').addClass('hidden');
//   $('.wordpress').addClass('hidden');
// }

// function showReact(){
//   showAll();
//   // $('.javascript').addClass('hidden');
//   $('.jquery').addClass('hidden');
//   $('.ruby').addClass('hidden');
//   $('.wordpress').addClass('hidden');
// }

// function showRuby(){
//   showAll();
//   // $('.javascript').addClass('hidden');
//   $('.jquery').addClass('hidden');
//   $('.react').addClass('hidden');
//   $('.wordpress').addClass('hidden');
// }

// function showWordPress(){
//   showAll();
//   // $('.javascript').addClass('hidden');
//   $('.jquery').addClass('hidden');
//   $('.react').addClass('hidden');
//   $('.ruby').addClass('hidden');
// }

function showConfirmation(){
  $('#emailConfirm').removeClass('hidden');
}

function hideConfirmation(){
  $('#emailConfirm').addClass('hidden');
}

// function appHeight(){
//   var appHeight = $('.ruby').height();
//   $('.wordpress, .react, .jquery').css('height', appHeight)
// }

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

  setTimeout(showConfirmation, 2000);
  setTimeout(hideConfirmation, 5000);
 //  let name = $("#name").val();
	// let email = $("#email").val();
	// let message = $("#message").val();

 //  $("#missing_name").css('display', 'none');
 //  $("#missing_email").css('display', 'none');
 //  $("#missing_message").css('display', 'none');

 //  if(name === "" && email === "" && message === ""){
 //    $('#missing_name').text('Please enter your name.').css('display', 'block');
 //    $("#missing_email").text('Please enter an email address.').css('display', 'block');
 //    $("#missing_message").text('Please enter a message.').css('display', 'block');
 //    return false;
 //  } else if(name === "" && email === ""){
 //    $('#missing_name').text('Please enter your name.').css('display', 'block');
 //    $("#missing_email").text('Please enter an email address.').css('display', 'block');
 //    return false;
 //  } else if(name === "" && message === ""){
 //    $('#missing_name').text('Please enter your name.').css('display', 'block');
 //    $("#missing_message").text('Please enter a message.').css('display', 'block');
 //    return false;
 //  } else if(email === "" && message === ""){
 //    $("#missing_email").text('Please enter an email address.').css('display', 'block');
 //    $("#missing_message").text('Please enter a message.').css('display', 'block');
 //    return false;
 //  } else if(name === ""){
 //    $('#missing_name').text('Please enter your name.').css('display', 'block');
 //    return false;
 //  } else if(name.trim() === ""){
 //    $('#missing_name').text('Please enter a valid name.').css('display', 'block');
 //    return false;
 //  } else if(message === ""){
 //    $("#missing_message").text('Please enter a message.').css('display', 'block');
 //    return false;
 //  } else if (message.trim() === ""){
 //    $("#missing_message").text('Please enter a valid message.').css('display', 'block');
 //    return false;
 //  } else {
 //    return true;
 //  }

  // if(email === ""){
  //   $('#missing_email').text('Please enter an email address.').css('display', 'block');
  //   return false;
  // } 
  // else if(email.trim() === ""){
  // }

  // setTimeout(showConfirmation, 2000);
  // setTimeout(hideConfirmation, 5000);
}