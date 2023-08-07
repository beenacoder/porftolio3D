import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"
import Profile from "./components/profile/Profile"
import './app.scss';
import Test from "./components/Test";

function App() {
    return (
        <div className="container">
            <Hero />
            <Profile />
            <Projects />
            <Contact />
            <Test />
        </div>
    )
}

export default App
