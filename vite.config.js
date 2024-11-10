import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "./localhost-key.pem", // current directory to your private key
      cert:"./localhost.pem",     // current directory to your certificate
    },
    host: 'localhost', // Optional: specify the host
    port: 5173,        // Optional: specify the port
  },
})
