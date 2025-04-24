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

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';

    const skillCircle = document.createElement('div');
    skillCircle.className = 'skill-circle circle';

    const icon = document.createElement('i');
    icon.className = `icon white-text ${skill.icon}`;

    skillCircle.appendChild(icon);

    const skillName = document.createElement('h3');
    skillName.className = 'centered-text';
    skillName.textContent = skill.name;

    skillDiv.appendChild(skillCircle);
    skillDiv.appendChild(skillName);

    skillsContainer.appendChild(skillDiv);
});