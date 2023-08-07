import Navbar from '../navbar/Navbar';
import './styles.scss';

const Hero = () => {
    return (
        <div className='heroSection'>
            <Navbar />

            <div className="heroContainer">

                <div className="left">
                    <h1>Get that shit done</h1>
                    <div className="whatWeDo">
                        <img src="./img/line.png" alt="" className="line" />
                        <h2 className="subtitle">The shit that we do</h2>
                    </div>
                    <p className="description">We enjoy creating delightful, human.centered digital experiences.</p>
                    <button>Learn More</button>
                </div>


                <div className="right">
                    {/* Modelo 3D */}
                    <img src="./img/hacker.png" alt="" className='rightImg'/>
                </div>
            </div>
        </div>
    )
}

export default Hero