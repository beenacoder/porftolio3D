import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./ReactLogo";

const FrontEnd = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <ReactLogo />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
        </Canvas>
    )
}

export default FrontEnd