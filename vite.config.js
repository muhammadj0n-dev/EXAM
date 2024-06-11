import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], resolve: {
    alias:[
      {find:"@",replacement: "/src/*"},
      {find: "@images",replacement: "/src/assets/images"},
      {find: "@main",replacement: "/src/components"},
      {find: "@components" , replacement: "/src/components"},
      {find: "@pages" , replacement: "/src/components/pages/index"},
      {find: "@router" , replacement: "/src/router/index.jsx"},
      {find: "@ui" , replacement: "/src/components/ui"},
      {find: "@routes" , replacement:"/src/router/routes.jsx"}
    ],
  },
})
