import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Optional: specify the host
    port: 3000,        // Optional: specify the port
    https: false
  },
})
