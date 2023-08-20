import Link from 'next/link'
import SiteNavigation from '../components/NavigationBar';

export default function Contact() {
  const subject = "We Want to Meet You!";
  
  return (
    <>
        <SiteNavigation />   
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Contact Me</h1>
          <p>
          You can contact my email:
              <a target="_blank" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=smalagadev@gmail.com&su=${subject}&tf=1`}>
                SMALAGADEV@GMAIL.COM
              </a>
              <br/>
              You can reach me at: <a href="tel:9543192000">9543192000</a>
              <br/>
              Download my <a href="assets/Resume_Steffano_Malaga.pdf" download>resumé</a>.
          </p>
          <p>
          <p>You can also find me on these platforms:</p>
          <a href="https://github.com/smalagadev">GITHUB</a>
          <a href="https://linkedin.com/in/smalagadev">LINKEDIN</a>
          </p>
        </main>
      </>
  )
}
