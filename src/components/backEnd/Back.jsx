

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/back-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['palette.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['palette.002']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/back-transformed.glb')
