import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shop from './Shop';

const WebDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Shop />
            </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5}/>
        </Canvas>
    )
}

export default WebDesign