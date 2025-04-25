$(document).ready(function(){
	$(".mobile, .mobile-list").click(function (){
		$(".mobile-list").toggle();
		$(".mobile i").toggleClass("fa-times");
	});
});

function updateNavbarClass() {
  const targetElement = $('.navigation');
  if (window.innerWidth < 1281) {
    targetElement.addClass('mobile-list');
  } else {
    targetElement.removeClass('mobile-list');
  }
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
  { name: 'Figma', icon: 'devicon-figma-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' }
];

const skillsContainer = $('#skills-container');

skills.forEach(skill => {
  const skillDiv = $('<div>', { class: 'skill' });
  const skillCircle = $('<div>', { class: 'icon-container skill-circle circle' });
  const icon = $('<i>', { class: `icon white-text ${skill.icon}` });

  const skillName = $('<h3>', { 
    class: 'centered-text',
    text: skill.name 
  });

  skillCircle.append(icon);
  skillDiv.append(skillCircle).append(skillName);
  skillsContainer.append(skillDiv);
});
