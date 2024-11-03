import { defineConfig } from 'vite'


// alternative defineconfig with more conigs
export default defineConfig({
  clearScreen:false,
logLevel:"silent",
  server:{
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