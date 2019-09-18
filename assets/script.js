const projects =
  [
    {
     "name":"Word Guess Game",
     "picture": "assets/images/Word-Guess-Game.png",
     "description": "A word guessing game made of JavaScript with Skate video theme.",
     "link": "https://smalagadev.github.io/Word-Guess-Game/",
     "github": "https://github.com/smalagadev/Word-Guess-Game"
   },

   {
     "name":"Star Wars RPG",
     "picture": "assets/images/Star-Wars-RPG.png",
     "description": "A Star Wars RPG made of JavaScript and JQuery.",
     "link": "https://smalagadev.github.io/Rogue-Squadron-RPG/",
     "github": "https://github.com/smalagadev/Rogue-Squadron-RPG"
   },

   {
      "name":"Timed Quiz",
      "picture": "assets/images/Timed-Quiz.png",
      "description": "A timed quiz made of JavaScript.",
      "link": "https://smalagadev.github.io/Timed-Quiz/",
      "github": "https://github.com/smalagadev/Timed-Quiz"
    },

   {
     "name":"GIPHY API Assignment",
     "picture": "assets/images/GIPHY-API-Assignment.png",
     "description": "A page that uses the GIPHY API and JavaScript.",
     "link": "https://smalagadev.github.io/GIPHY-API-Assignment",
     "github": "https://github.com/smalagadev/GIPHY-API-Assignment"
   },

   {
      "name":"SoundBars",
      "picture": "assets/images/SoundBars.png",
      "description": "An artist previewing site utilizing Spotify and Youtube\"s API. A collaborated team effort focusing on javascript, jquery, and API usage.",
      "link": "https://mahinjiwani.github.io/Project1/",
      "github": "https://github.com/mahinjiwani/Project1"
    },

   {
     "name":"LIRI BOT",
     "picture": "assets/images/LIRI-BOT.png",
     "description": "LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. There is no site link.",
     "link": "",
     "github": "https://github.com/smalagadev/LIRI"
   }
 ];

const technologies = [];


// const loadSection = function(section){
//   const currentSection = document.getElementById(section = sessionStorage.getItem('currentSection'));
//   // If any active nav-link, remove active
//   if(document.getElementsByClassName('nav-item active').length){
//     document.getElementsByClassName('nav-item active')[0].classList.remove('active');
//   }
//   // Clear display
//   for(let i=0; i < document.getElementsByClassName('display').length; i++)
//   {
//     document.getElementsByClassName('display')[i].style.display = 'none';
//   }
//
//   currentSection.style.display = 'flex';
// };
//
// document.addEventListener("DOMContentLoaded", function(){
//   // Declare link variables
//   const about_link = document.getElementById('about-link');
//   const project_link = document.getElementById('project-link');
//   const contact_link = document.getElementById('contact-link');
//
//   // First time opening page does not load a section
//   sessionStorage.getItem('currentSection') ? loadSection() : sessionStorage.setItem('currentSection', '');
//
//   // Load About
//   about_link.addEventListener('click', function(){
//     // Change to current section
//     sessionStorage.setItem("currentSection", "About");
//
//     loadSection();
//   });
//
//   // Load Projects
//   project_link.addEventListener('click', function(){
//     // Change to current section
//     sessionStorage.setItem("currentSection", "Projects");
//
//     loadSection();
//   });
//
//   // Load Contact
//   contact_link.addEventListener('click', function(){
//     // Change to current section
//     sessionStorage.setItem("currentSection", "Contact");
//
//     loadSection();
//   });
//
//
//   // Load projects to DOM
//   const projectList = document.querySelector('#project-list');
//   for(let i=0; i < projects.length; i++){
//     var newItem = document.createElement('a');
//     newItem.classList.add('list-group-item','list-group-item-action', 'list-group-item-dark', 'projects');
//     newItem.id = ('project-' + i);
//     newItem.setAttribute('href', '#');
//     newItem.textContent = projects[i].name;
//     projectList.appendChild(newItem);
//   }
//
//   // Declare project preview variables
//   const project_image = document.querySelector('#project-image');
//   const project_title = document.querySelector('#project-title');
//   const project_details = document.querySelector('#project-details');
//   const project_page = document.querySelector('#page-link');
//   const project_github = document.querySelector('#github-link');
//
//   // Load project preview
//   const projectItems = document.getElementsByClassName('projects');
//   for(let i=0; i < projectItems.length; i++){
//     projectItems[i].addEventListener("click", function(){
//       const thisIndex = (this.id[this.id.length - 1]);
//       project_image.setAttribute('src', projects[thisIndex].picture);
//       project_title.textContent = projects[thisIndex].name;
//       project_details.textContent = projects[thisIndex].description;
//       project_page.setAttribute('href', projects[thisIndex].link);
//       project_github.setAttribute('href', projects[thisIndex].github);
//     });
//   }
// });
