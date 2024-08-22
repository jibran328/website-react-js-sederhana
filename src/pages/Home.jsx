import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import parse from 'html-react-parser'
import { coursesSection } from '../data/CoursesSection'
import { tutorsSection, tutorsList } from '../data/TutorsSection'
import Tutors from '../components/Tutors'
import { partnersSection, partnerList} from '../data/PartnersSection'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import { contactSection } from '../data/ContactSection'


function Home() {
  return (
    <>
    <Navbar/>
    <div className='wrapper'>
      {/* Home */}
      <section id="home">
      <img src = {homeSection.image} />    
      <div className="kolom">
        {parse(homeSection.content)}
      </div>
      </section>

      {/* online course */}
      <section id="course">
      <div className="kolom">
        {parse (coursesSection.content) }
      </div>
      <img src = {coursesSection.image}/>
        </section>
      
      {/* Tutor */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">
            {parse (tutorsSection.content)}
            </div>
            <Tutors tutorsList = {tutorsList}/>
        </div> 
      </section>

      {/* Partner */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">
          {parse (partnersSection.content)}
          </div>
          <Partners partnersList = {partnerList}/>
        </div>
      </section>

      {/* Contact */}
        <Contact contactSection={contactSection}/>
    
        </div>
    <Footer/>
    </>
  )
}

export default Home
