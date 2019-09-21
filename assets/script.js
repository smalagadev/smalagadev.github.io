const projects =
  [
    {
     "name":"Word Guess Game",
     "description": "A word guessing game made of JavaScript with Skate video theme.",
     "link": "https://smalagadev.github.io/Word-Guess-Game/",
     "github": "https://github.com/smalagadev/Word-Guess-Game"
   },

   {
     "name":"Star Wars RPG",
     "description": "A Star Wars RPG made of JavaScript and JQuery.",
     "link": "https://smalagadev.github.io/Rogue-Squadron-RPG/",
     "github": "https://github.com/smalagadev/Rogue-Squadron-RPG"
   },

   {
      "name":"Timed Quiz",
      "description": "A timed quiz made of JavaScript.",
      "link": "https://smalagadev.github.io/Timed-Quiz/",
      "github": "https://github.com/smalagadev/Timed-Quiz"
    },

   {
     "name":"GIPHY API Assignment",
     "description": "A page that uses the GIPHY API and JavaScript.",
     "link": "https://smalagadev.github.io/GIPHY-API-Assignment",
     "github": "https://github.com/smalagadev/GIPHY-API-Assignment"
   },

   {
      "name":"SoundBars",
      "description": "An artist previewing site utilizing Spotify and Youtube\"s API. A collaborated team effort focusing on javascript, jquery, and API usage.",
      "link": "https://mahinjiwani.github.io/Project1/",
      "github": "https://github.com/mahinjiwani/Project1"
    },

   {
     "name":"LIRI BOT",
     "description": "LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. There is no site link.",
     "link": false,
     "github": "https://github.com/smalagadev/LIRI"
   }
 ];

document.addEventListener("DOMContentLoaded", function(){

  // Load projects to DOM
  const projectList = document.querySelector('#project-list');
  projects.forEach( project => {
    const newItem = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    const col3_link = document.createElement('a');
    const col4 = document.createElement('td');
    const col4_link = document.createElement('a');
    col1.textContent = project.name;
    col2.textContent = project.description;
    col3_link.textContent = "Visit Site";
    col3_link.setAttribute("href", project.link);
    col3.appendChild(col3_link);
    col4_link.textContent = "Visit Repo";
    col4_link.setAttribute("href", project.github);
    col4.appendChild(col4_link);
    // newItem.appendChild(col1).appendChild(col2).appendChild(col3).appendChild(col4);
    newItem.appendChild(col1);
    newItem.appendChild(col2);
    newItem.appendChild(col3);
    newItem.appendChild(col4);
    projectList.appendChild(newItem);
  });

});
