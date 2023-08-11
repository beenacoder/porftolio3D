
import { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
    const textRef = useRef();
    useFrame(
        (state) => (
            textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
        )
    );
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#d19bee"]} />
                    <Text ref={textRef} fontSize={1.5} color="#555">
                         Ariel Cabeza 
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube