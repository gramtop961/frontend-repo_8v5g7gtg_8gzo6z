import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <Work />
        <Contact />
        <footer className="py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} AI Consultant — All rights reserved
        </footer>
      </main>
    </div>
  )
}

export default App
