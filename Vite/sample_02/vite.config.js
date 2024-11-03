import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig(({command,mode,ssrBuild})=>{
//   const env=loadEnv(mode,process.cwd(),"VITE_") // to load env variable with VITE_
//   console.log(env)
//   if(mode=="production")
//   {
//     return{
//       base:"/vite/"
//     }
//   }
//   return {}
// })



// alternative defineconfig with more conigs
export default defineConfig({
  clearScreen:false,
  envPrefix:"APP_",
logLevel:"silent",
envDir:"direnv",
  server:{
// open:"index.html", // basically with start the server and open this page on web browser
    port:3000
  },
  preview:{
    port:8080,
    strictPort:true,
  },
  css:{
    devSourcemap:true,
  }
})