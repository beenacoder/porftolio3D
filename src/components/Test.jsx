import { Canvas } from "@react-three/fiber"
import './test.scss';
import { OrbitControls } from "@react-three/drei";



const Test = () => {
    return (
        <div className='container'>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <mesh>
                    <boxGeometry args= {[1,1,1]} />
                </mesh>
            </Canvas>

        </div>
    )
}

export default Test