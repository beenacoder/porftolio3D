import Navbar from '../navbar/Navbar';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
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
                    <Canvas>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[1, 2, 3]} />
                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial color={"#b058f4"} attach={"material"} distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>  
                    <img src="./img/hacker.png" alt="" className='rightImg'/>
                </div>
            </div>
        </div>
    )
}

export default Hero