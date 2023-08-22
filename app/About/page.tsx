import Link from 'next/link';
import Image from 'next/image';
import NavigationBar from '../components/NavigationBar';

export default function About() {
  return (
    <>
      <NavigationBar /> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>About</h1>
        <Image src="assets/images/profile.jpg" className="card-img" id="profile-image" alt="Profile picture"/>
          <p className="card-text">
            A South Florida Native currently based in Atlanta, Georgia. I enjoy innovating solutions
            and creating new technology. I enjoy problem solving
            I have  experience with core web technologies with a focus on the MERN (Mongo, Express, React, and Node) stack.
            Download my <a href="assets/Resume_Steffano_Malaga.pdf" download id="resume">resumé</a> to learn more about me.
          </p>

          <h1>Skills</h1>
          <p>
            I am a full stack developer with a focus on the front end. Over my years of learning programming, I
            have learned my languages from C, C++, Basic, Python and Java just to name a few. I also have an expertise
            of web technologies including HTML, CSS, Javascript (ES6 & Typescript) to create web applications and APIs.

            I always am looking to learn the latest technologies and practices to improve my code and the projects
            I dedicate my time to.
          </p>
      </main>
    </>
  )
}