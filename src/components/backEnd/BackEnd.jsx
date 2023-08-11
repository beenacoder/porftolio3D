import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Back from "./Back";

const BackEnd = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Back />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
        </Canvas>
    )
}

export default BackEnd