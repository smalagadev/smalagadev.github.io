const loadSection = function(section){
  const currentSection = document.getElementById(section = sessionStorage.getItem('currentSection'));
  // If any active nav-link, remove active
  if(document.getElementsByClassName('nav-item active').length){
    document.getElementsByClassName('nav-item active')[0].classList.remove('active');
  }
  // Clear display
  for(let i=0; i < document.getElementsByClassName('display').length; i++)
  {
    document.getElementsByClassName('display')[i].style.display = 'none';
  }

  currentSection.style.display = 'flex';
};

document.addEventListener("DOMContentLoaded", function(){
  // Declare link variables
  const about_link = document.getElementById('about-link');
  const project_link = document.getElementById('project-link');
  const contact_link = document.getElementById('contact-link');

  // First time opening page does not load a section
  sessionStorage.getItem('currentSection') ? loadSection() : sessionStorage.setItem('currentSection', '');

  // Load About
  about_link.addEventListener('click', function(){
    // Change to current section
    sessionStorage.setItem("currentSection", "About");

    loadSection();
  });

  // Load Projects
  project_link.addEventListener('click', function(){
    // Change to current section
    sessionStorage.setItem("currentSection", "Projects");

    loadSection();
  });

  // Load Contact
  contact_link.addEventListener('click', function(){
    // Change to current section
    sessionStorage.setItem("currentSection", "Contact");

    loadSection();
  });


  // Load projects to DOM
  const projectList = document.querySelector('#project-list');
  for(let i=0; i < projects.length; i++){
    var newItem = document.createElement('a');
    newItem.classList.add('list-group-item','list-group-item-action', 'list-group-item-dark', 'projects');
    newItem.id = ('project-' + i);
    newItem.setAttribute('href', '#');
    newItem.textContent = projects[i].name;
    projectList.appendChild(newItem);
  }

  // Declare project preview variables
  const project_image = document.querySelector('#project-image');
  const project_title = document.querySelector('#project-title');
  const project_details = document.querySelector('#project-details');
  const project_page = document.querySelector('#page-link');
  const project_github = document.querySelector('#github-link');

  // Load project preview
  const projectItems = document.getElementsByClassName('projects');
  for(let i=0; i < projectItems.length; i++){
    projectItems[i].addEventListener("click", function(){
      const thisIndex = (this.id[this.id.length - 1]);
      project_image.setAttribute('src', projects[thisIndex].picture);
      project_title.textContent = projects[thisIndex].name;
      project_details.textContent = projects[thisIndex].description;
      project_page.setAttribute('href', projects[thisIndex].link);
      project_github.setAttribute('href', projects[thisIndex].github);
    });
  }
});
