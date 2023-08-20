import Link from 'next/link';
import SiteNavigation from '../components/NavigationBar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects =
  [
    {
     name:"Word Guess Game",
     preview: "./assets/preview_images/SkatevideoGuessingGame.png",
     description: "A word guessing game made of JavaScript with Skate video theme.",
     link: "https://smalagadev.github.io/Word-Guess-Game/",
     github: "https://github.com/smalagadev/Word-Guess-Game"
   },

   {
     name:"Star Wars RPG",
     preview: "./assets/preview_images/RogueSquadronRPG.png",
     description: "A Star Wars RPG made of JavaScript and JQuery.",
     link: "https://smalagadev.github.io/Rogue-Squadron-RPG/",
     github: "https://github.com/smalagadev/Rogue-Squadron-RPG"
   },

   {
      name:"Timed Quiz",
      preview: "./assets/preview_images/TimedQuiz.png",
      description: "A timed quiz made of JavaScript.",
      link: "https://smalagadev.github.io/Timed-Quiz/",
      github: "https://github.com/smalagadev/Timed-Quiz"
    },

   {
     name:"GIPHY API Assignment",
     preview: "./assets/preview_images/GIPHY.png",
     description: "A page that uses the GIPHY API and JavaScript.",
     link: "https://smalagadev.github.io/GIPHY-API-Assignment",
     github: "https://github.com/smalagadev/GIPHY-API-Assignment"
   },

   {
      name:"SoundBars",
      preview: "./assets/preview_images/SoundBars.png",
      description: "An artist previewing site utilizing Spotify and Youtube\"s API. A collaborated team effort focusing on javascript, jquery, and API usage.",
      link: "https://mahinjiwani.github.io/Project1/",
      github: "https://github.com/mahinjiwani/Project1"
    },

   {
     name:"LIRI BOT",
     preview: "./assets/preview_images/LIRI.png",
     description: "LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. There is no site link.",
     link: false,
     github: "https://github.com/smalagadev/LIRI"
   }
 ];
 
    return (
      <>
        <SiteNavigation />   
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-semibold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
        </main>
      </>
    )
  }