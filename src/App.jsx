import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"
import Profile from "./components/profile/Profile"
import './app.scss';

function App() {
    return (
        <div className="container">
            <Hero />
            <Profile />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
