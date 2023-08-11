

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shop-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={0.735} />
    </group>
  )
}

useGLTF.preload('/shop-transformed.glb')
