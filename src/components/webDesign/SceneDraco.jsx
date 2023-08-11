

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sceneDraco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_0.geometry} material={materials.PaletteMaterial001} position={[-0.95, 0.585, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.946, 0.069, 1]} />
      <mesh geometry={nodes.Cube001_0.geometry} material={materials['Material.012']} position={[-1.936, 0.26, 0.024]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.522, 0.074, 0.692]} />
    </group>
  )
}

useGLTF.preload('/sceneDraco-transformed.glb')
