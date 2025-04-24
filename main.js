$(document).ready(function(){
	$(".mobile").click(function (){
		$(".mobile_list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});
});

function updateNavbarClass() {
  const targetElement = $('ul');

  if (window.innerWidth < 1167) {
    targetElement.addClass('mobile_list');
  } else {
    targetElement.removeClass('mobile_list');
  }

  // if(!$(targetElement).hasClass('mobile_list') && targetElement.css('display') === 'none') {
  //   $(targetElement).css('display', '');
  // }
}

updateNavbarClass();
$(window).on('resize', updateNavbarClass);

// ---- Skills ----

const skills = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'Angular', icon: 'devicon-angular-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'jQuery', icon: 'devicon-jquery-plain' },
  { name: 'Ruby', icon: 'devicon-ruby-plain' },
  { name: 'Rails', icon: 'devicon-rails-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
];

const skillsContainer = $('#skills-container');

skills.forEach(skill => {
  const skillDiv = $('<div>', { class: 'skill' });
  const skillCircle = $('<div>', { class: 'skill-circle circle' });
  const icon = $('<i>', { class: `icon white-text ${skill.icon}` });

  const skillName = $('<h3>', { 
    class: 'centered-text',
    text: skill.name 
  });

  skillCircle.append(icon);
  skillDiv.append(skillCircle).append(skillName);
  skillsContainer.append(skillDiv);
});

function validateForm(){
  const name = $("#name").val().trim();
  const email = $("#email").val().trim();
  const message = $("#message").val().trim();

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