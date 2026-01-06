import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// detect local certs in ./certs/localhost.pem and ./certs/localhost-key.pem
const certDir = path.resolve(__dirname, 'certs')
const certFile = path.join(certDir, 'localhost.pem')
const keyFile = path.join(certDir, 'localhost-key.pem')

let httpsOption = false
if (fs.existsSync(certFile) && fs.existsSync(keyFile)) {
  httpsOption = {
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile)
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: httpsOption ? { https: httpsOption } : undefined

})
