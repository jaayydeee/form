import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"
import react from '@vitejs/plugin-react-swc'
import { plugin } from 'mongoose'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
})
