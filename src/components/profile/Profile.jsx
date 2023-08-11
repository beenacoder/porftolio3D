import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../cube/Cube';
import './styles.scss';

const Profile = () => {
    return (
        <div className='profileSection'>
            <div className="profileContainer">

                <div className="left">
                    <Canvas camera={{fov: 25, position:[5, 5, 5]}}>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5}/>
                        <ambientLight intensity={1} />
                        <directionalLight position={[1, 2, 3]} />
                        <Cube />
                    </Canvas>   
                </div>


                <div className="right">
                    <h1>Think outside the square space</h1>
                    <div className="whatWeDo">
                        <img src="./img/line.png" alt="" className="line" />
                        <h2 className="subtitle">Who we are</h2>
                    </div>
                    <p className="description">A creative guy who like to copy and paste hahaha.</p>
                    <button>See our works</button>
                </div>
            </div>
        </div>
    )
}

export default Profile