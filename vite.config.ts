import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Three.js is split into its own chunk and only loaded when the 3D hero mounts.
export default defineConfig({ plugins: [react()], build: { rollupOptions: { output: { manualChunks: { three: ['three', '@react-three/fiber', '@react-three/drei'] } } } } })
