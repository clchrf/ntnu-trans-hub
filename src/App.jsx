import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClubIntro from './components/ClubIntro'
import Timeline from './components/Timeline'
import AcademicGuide from './components/AcademicGuide'
import Transportation from './components/Transportation'
import Resources from './components/Resources'
import FAQ from './components/FAQ'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ClubIntro />
        <Timeline />
        <AcademicGuide />
        <Transportation />
        <Resources />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
    </div>
  )
}
