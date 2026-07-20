$(document).ready(function () {
  $('.mobile, .mobile-list li').click(function () {
    $('.mobile-list').toggle();
    $('.mobile i').toggleClass('fa-times');
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
  { name: 'Angular', icon: 'devicon-angular-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Vue', icon: 'devicon-vuejs-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain' },

  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },

  { name: 'Jest', icon: 'devicon-jest-plain' },
  { name: 'Jasmine', icon: 'devicon-jasmine-original' },
  { name: 'DataDog', icon: 'devicon-datadog-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
];

const skillsContainer = $('#skills-container');

skills.forEach((skill) => {
  const skillDiv = $('<div>', { class: 'skill' });
  const skillCircle = $('<div>', {
    class: 'icon-container skill-circle circle',
  });
  const icon = $('<i>', { class: `icon white-text ${skill.icon}` });

  const skillName = $('<h3>', {
    class: 'centered-text',
    text: skill.name,
  });

  skillCircle.append(icon);
  skillDiv.append(skillCircle).append(skillName);
  skillsContainer.append(skillDiv);
});
